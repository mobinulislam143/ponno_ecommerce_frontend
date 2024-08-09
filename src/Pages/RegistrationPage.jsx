import React, { Fragment, Suspense, lazy } from 'react';
import LazyLoader from '../components/MasterLayout/LazyLoader';
const Registration = lazy(() => import('../components/user/Registration'))

function RegistrationPage(props) {
    return (
        <Fragment>
            <Suspense fallback={<LazyLoader/>}>
                <Registration/>
            </Suspense>
        </Fragment>
    );
}

export default RegistrationPage;