import React, { Fragment, Suspense, lazy } from "react"
import MasterLayout from "../components/MasterLayout/MasterLayout";
import LazyLoader from "../components/MasterLayout/LazyLoader";
import Profile from "../components/user/Profile";
const UserAds = lazy (() => import('../components/user/Dashboard'))

const DashboardPage = () => {
  return (
    <Fragment>
        <MasterLayout>
            <Profile>
                <Suspense fallback={<LazyLoader/>}>
                    <UserAds/>
                </Suspense> 
            </Profile>
        </MasterLayout>
    </Fragment>
  )
};

export default DashboardPage
