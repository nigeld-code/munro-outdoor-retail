import { useState, useEffect, useRef } from 'react';

import { productAxios } from '../axios';

const useLoadProduct = sku => {
  const [product, setProduct] = useState();

  const isMountedRef = useRef(null);

  useEffect(() => {
    isMountedRef.current = true;
    const fetchProduct = async () => {
      try {
        const response = await productAxios.get(`${sku}`);
        setProduct(response.data.product);
      } catch (err) {
        console.log(err);
      }
    };
    if (isMountedRef.current) {
      fetchProduct();
    }
    return () => {
      isMountedRef.current = false;
    };
  }, [sku]);
  return product;
};

export default useLoadProduct;
