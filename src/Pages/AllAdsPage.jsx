import React, { Fragment, Suspense, lazy, useEffect, useState } from 'react';
import MasterLayout from '../components/MasterLayout/MasterLayout';
import LazyLoader from '../components/MasterLayout/LazyLoader';
import { useParams } from 'react-router';
import { AllProduct } from '../components/APIRequest/APIRequest';
import { useSelector } from 'react-redux';
const AllAds = lazy(()=> import('../components/product/AllAds'))
 

function AllAdsPage(props) {


    const AllproductList = useSelector((state)=> state.products.AllProduct)

    useEffect(() => {
        const fetchData = async () => {
            try {
                await AllProduct();
            } catch (e) {
                console.error(e.toString());
            }
        };

        fetchData();
    }, []);

    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <AllAds products={AllproductList} />
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
}

export default AllAdsPage;