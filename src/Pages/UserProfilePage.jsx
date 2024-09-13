import React, { Fragment, Suspense, lazy, useEffect } from "react";
import MasterLayout from "../components/MasterLayout/MasterLayout";
import LazyLoader from "../components/MasterLayout/LazyLoader";
import ProfileComponent from "../components/user/Profile"; // renamed to avoid conflict
import { useSelector } from "react-redux";
import { getProfileRequest } from "../components/APIRequest/APIRequest";
const UserProfile = lazy(() => import("../components/user/UserProfile"));

const UserProfilePage = () => {
  const userProfileData = useSelector((state) => state.user.Profile);
  const userAdsdata = useSelector((state) => state.user.UserProduct);


  useEffect(() => {
    const fetchData = async () => {
      try {
        await getProfileRequest();
        await UserAdsRequest();

      } catch (e) {
        console.error(e.toString());  
      }
    };

    fetchData();
  }, []);

  console.log(userProfileData);

  return (
    <Fragment>
      <MasterLayout>
        <ProfileComponent> {/* Use ProfileComponent to avoid name conflict */}
          <Suspense fallback={<LazyLoader />}>
            <UserProfile profile={userProfileData} userAds={userAdsdata} />
          </Suspense>
        </ProfileComponent>
      </MasterLayout>
    </Fragment>
  );
};

export default UserProfilePage;

