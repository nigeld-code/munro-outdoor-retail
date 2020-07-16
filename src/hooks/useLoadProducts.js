import { useState, useEffect, useRef } from 'react';

import { productsAxios } from '../axios';

const useLoadProducts = (category, selection) => {
  const [products, setProducts] = useState();
  const [breadcrumbs, setBreadcrumbs] = useState();
  const [refineOptions, setRefineOptions] = useState();
  const [brands, setBrands] = useState();

  const isMountedRef = useRef(null);

  useEffect(() => {
    isMountedRef.current = true;
    const fetchProducts = async () => {
      try {
        const response = await productsAxios.get(`${category}/${selection}`);
        if (response.data) {
          response.data.products && setProducts(response.data.products);
          response.data.breadcrumbs &&
            setBreadcrumbs(response.data.breadcrumbs);
          response.data.breadcrumbOptions &&
            setRefineOptions(response.data.breadcrumbOptions);
          response.data.brands && setBrands(response.data.brands);
        }
      } catch (err) {
        console.log('err', err);
      }
    };
    if (isMountedRef.current) {
      fetchProducts();
    }
    return () => {
      isMountedRef.current = false;
    };
  }, [category, selection]);
  return {
    products,
    breadcrumbs,
    refineOptions,
    brands
  };
};

export default useLoadProducts;
