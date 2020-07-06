import { useState, useEffect } from 'react';

import { productAxios } from '../axios';

const useLoadProduct = (sku) => {
  const [product, setProduct ] = useState();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response =  await productAxios.get(`${sku}`);
        setProduct(response.data.product);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, [sku]);
  return product;
};

export default useLoadProduct;