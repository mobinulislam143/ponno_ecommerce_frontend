import React, { Fragment, Suspense, lazy } from 'react';
import Copyright from '../components/MasterLayout/Copyright';
import LazyLoader from '../components/MasterLayout/LazyLoader';

const VerifyOtp = lazy(()=> import('../components/user/VerifyOtp'))

function VerifyOtpPage(props) {
    return (
        <Fragment>
            <Suspense fallback={<LazyLoader/>}>
                <VerifyOtp/> 
            </Suspense>
        </Fragment>
    );
}

export default VerifyOtpPage;