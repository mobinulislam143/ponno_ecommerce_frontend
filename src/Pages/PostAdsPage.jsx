import React, { Fragment, Suspense, lazy } from 'react';
import MasterLayout from '../components/MasterLayout/MasterLayout';
import LazyLoader from '../components/MasterLayout/LazyLoader';
const PostAds = lazy(()=> import('../components/product/PostAds'))

function PostAdsPage(props) {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <PostAds/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
}

export default PostAdsPage;