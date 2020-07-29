import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { orderAxios } from '../axios';

const useFetchOrdersData = () => {
  const token = useSelector(state => state.auth.token);

  const [orderData, setOrderData] = useState([]);
  const [errorMsg, setErrorMsg] = useState();

  useEffect(() => {
    if (token) {
      const fetchOrderData = async () => {
        try {
          const response = await orderAxios.get('getOrders', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          if (
            response.data &&
            response.data.orders &&
            response.data.orders.length
          ) {
            setOrderData(response.data.orders);
            setErrorMsg(null);
          } else {
            setOrderData([]);
            setErrorMsg('No Orders, ...Yet!');
          }
        } catch (err) {
          console.log(err);
          setOrderData([]);
          setErrorMsg(
            'Please Refresh Page, Failed to connect with Munro Servers'
          );
        }
      };
      fetchOrderData();
    }
  }, [token]);

  return { orders: orderData, errorMsg: errorMsg };
};

export default useFetchOrdersData;
