import { useState, useEffect } from 'react';

import { productsAxios } from '../axios';

const useLoadProducts = (category, selection) => {
  const [products, setProducts] = useState();
  const [breadcrumbs, setBreadcrumbs] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await productsAxios.get(`${category}/${selection}`);
        if (response.data) {
          response.data.products && setProducts(response.data.products);
          response.data.breadcrumbs && setBreadcrumbs(response.data.breadcrumbs);
        }
      } catch (err) {
        console.log('err', err);
      }
    };
    fetchProducts();
  }, [category, selection]);
  return {products, breadcrumbs};
};

export default useLoadProducts;
