import React, { Fragment, Suspense, lazy, useEffect } from "react"
import MasterLayout from "../components/MasterLayout/MasterLayout";
import LazyLoader from "../components/MasterLayout/LazyLoader";
import Profile from "../components/user/Profile";
import { useSelector } from "react-redux";
import { UserAdsRequest } from "../components/APIRequest/APIRequest";
const UserAds = lazy (() => import('../components/user/UserAds'))

const UserAdsPage = () => {
  const userAdsdata = useSelector((state) => state.user.UserProduct);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await UserAdsRequest();
      } catch (e) {
        console.error(e.toString());
      }
    };

    fetchData();
  }, []);
  return (
    <Fragment>
        <MasterLayout>
            <Profile>
                <Suspense fallback={<LazyLoader/>}>
                    <UserAds userAds={userAdsdata}/>
                </Suspense> 
            </Profile>
        </MasterLayout>
    </Fragment>
  )
};

export default UserAdsPage
