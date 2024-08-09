import React, { Fragment, Suspense, lazy } from "react"
import MasterLayout from "../components/MasterLayout/MasterLayout";
import LazyLoader from "../components/MasterLayout/LazyLoader";
import Profile from "../components/user/Profile";
const Setting = lazy (() => import('../components/user/Setting'))

const SettingsPage = () => {
  return (
    <Fragment>
        <MasterLayout>
            <Profile>
                <Suspense fallback={<LazyLoader/>}>
                    <Setting/>
                </Suspense> 
            </Profile>
        </MasterLayout>
    </Fragment>
  )
};

export default SettingsPage
