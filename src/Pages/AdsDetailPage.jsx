import React, { Fragment, Suspense, lazy, useEffect } from 'react';
import MasterLayout from '../components/MasterLayout/MasterLayout';
import LazyLoader from '../components/MasterLayout/LazyLoader';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { AdsDetailsRequest, getCommentByProductRequest } from '../components/APIRequest/APIRequest';
import { getProductDetails } from '../redux/state-slice/product-slice';

const AdsDetails = lazy(() => import('../components/product/AdsDetails'));

function AdsDetailPage() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const ProductDetails = useSelector(state => state.products.ProductDetails);
    const status = useSelector(state => state.products.status);
    const error = useSelector(state => state.products.error);

    useEffect(() => {
        if (id) {
            AdsDetailsRequest(id); // Dispatch the request
            getCommentByProductRequest(id); // Dispatch the comments request
        }
    }, [ id]);

    if (status === 'loading') {
        return <LazyLoader />;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader />}>
                    {ProductDetails ? <AdsDetails ProductDetails={ProductDetails} /> : <div>No product details found</div>}
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
}

export default AdsDetailPage;
