import React, { Fragment, Suspense, lazy, useEffect } from "react"
import MasterLayout from "../components/MasterLayout/MasterLayout";
import LazyLoader from "../components/MasterLayout/LazyLoader";
import Profile from "../components/user/Profile";
import { useSelector } from "react-redux";
import { getProfileRequest } from "../components/APIRequest/APIRequest";
const EditProfile = lazy (() => import('../components/user/EditProfile'))

const EditProfilePage = () => {

  const userProfileData = useSelector((state) => state.user.Profile)

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getProfileRequest();
      } catch (e) {
        console.error(e.toString());
      }
    }
    fetchData()
  }, [])

  return (
    <Fragment>
        <MasterLayout>
            <Profile>
                <Suspense fallback={<LazyLoader/>}>
                    <EditProfile profile={userProfileData}/>
                </Suspense> 
            </Profile>
        </MasterLayout>
    </Fragment>
  )
};

export default EditProfilePage
