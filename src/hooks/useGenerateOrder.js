import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { accountUpdateSavedAddress } from '../store/actions/';

import { orderAxios } from '../axios';

const useGenerateOrder = (
  basket,
  discountCodes,
  deliveryDetails,
  saveAddress
) => {
  const [order, setOrder] = useState({
    customerId: null,
    products: [],
    totals: {
      subTotal: null,
      totalToPay: null
    },
    payment: [],
    discounts: [],
    delivery: deliveryDetails
  });

  const [orderToken, setOrderToken] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    const generateOrder = async () => {
      const token = localStorage.getItem('token');
      const axiosOptions = {
        method: 'post',
        url: 'setupOrder',
        data: {
          currentCodes: discountCodes,
          basket,
          deliveryDetails,
          saveAddress
        }
      };
      if (token) {
        axiosOptions.headers = {
          Authorization: `Bearer ${token}`
        };
      }
      try {
        const response = await orderAxios(axiosOptions);
        setOrder(o => ({ ...o, ...response.data.orderObj }));
        setOrderToken(response.data.orderToken);
        if (saveAddress) {
          dispatch(
            accountUpdateSavedAddress(
              deliveryDetails.name,
              deliveryDetails.address,
              deliveryDetails.city,
              deliveryDetails.postcode
            )
          );
        }
      } catch (err) {
        console.log(err);
      }
    };
    generateOrder();
  }, [basket, deliveryDetails, discountCodes, saveAddress, dispatch]);

  return { get: order, token: orderToken };
};

export default useGenerateOrder;
