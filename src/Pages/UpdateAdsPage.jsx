import React, { Fragment, Suspense, lazy } from 'react';
import MasterLayout from '../components/MasterLayout/MasterLayout';
import LazyLoader from '../components/MasterLayout/LazyLoader';
const UpdateAds = lazy(()=> import('../components/product/UpdateAds'))

function UpdateAdsPage(props) {
    

    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <UpdateAds/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
}

export default UpdateAdsPage;