// productbyCategoryPage.jsx
import React, { Fragment, Suspense, lazy, useEffect } from 'react';
import MasterLayout from '../components/MasterLayout/MasterLayout';
import LazyLoader from '../components/MasterLayout/LazyLoader';
import { ListProductByCategoryRequest } from '../components/APIRequest/APIRequest';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

const AllAds = lazy(() => import('../components/product/AllAds'));

function ProductByCategoryPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const products = useSelector(state => state.products.CategoryByProductList);
  const status = useSelector(state => state.products.status);
  const error = useSelector(state => state.products.error);

  useEffect(() => {
    if (id) {
      ListProductByCategoryRequest(id);
    }
  }, [id]);

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
          <AllAds products={products} /> 
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
}

export default ProductByCategoryPage;
