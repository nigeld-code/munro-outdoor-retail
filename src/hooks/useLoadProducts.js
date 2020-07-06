import { useState, useEffect } from 'react';

import { productsAxios } from '../axios';

const useLoadProducts = (category, selection) => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await productsAxios.get(`${category}/${selection}`);
        setProducts(response.data.products);
      } catch (err) {
        console.log('err', err);
      }
    };
    fetchProducts();
  }, [category, selection]);
  return products;
};

export default useLoadProducts;
