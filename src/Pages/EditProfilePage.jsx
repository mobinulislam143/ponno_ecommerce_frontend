import React, { Fragment, Suspense, lazy } from "react"
import MasterLayout from "../components/MasterLayout/MasterLayout";
import LazyLoader from "../components/MasterLayout/LazyLoader";
import Profile from "../components/user/Profile";
const EditProfile = lazy (() => import('../components/user/EditProfile'))

const EditProfilePage = () => {
  return (
    <Fragment>
        <MasterLayout>
            <Profile>
                <Suspense fallback={<LazyLoader/>}>
                    <EditProfile/>
                </Suspense> 
            </Profile>
        </MasterLayout>
    </Fragment>
  )
};

export default EditProfilePage
