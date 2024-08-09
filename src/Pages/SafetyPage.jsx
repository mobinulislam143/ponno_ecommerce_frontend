import React, { Fragment, Suspense, lazy } from "react"
import MasterLayout from "../components/MasterLayout/MasterLayout";
import LazyLoader from "../components/MasterLayout/LazyLoader";
const Safety = lazy (() => import('../components/Utility/Safety'))

const SafetyPage = () => {
  return (
    <Fragment>
        <MasterLayout>
            <Suspense fallback={<LazyLoader/>}>
                <Safety/>
            </Suspense>
        </MasterLayout>
    </Fragment>
  )
};

export default SafetyPage
