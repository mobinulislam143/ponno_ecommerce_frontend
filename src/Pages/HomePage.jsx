import React, { Fragment, Suspense, lazy } from 'react';
const Home = lazy(()=>import('../components/Home/Home'))
import MasterLayout from '../components/MasterLayout/MasterLayout';
import LazyLoader from '../components/MasterLayout/LazyLoader';

function HomePage(props) {
    return (
        <>
           <Fragment>
                <MasterLayout>
                    <Suspense fallback={<LazyLoader/>}>
                        <Home/>
                    </Suspense>
                </MasterLayout>
           </Fragment>

        </>
    );
}

export default HomePage;