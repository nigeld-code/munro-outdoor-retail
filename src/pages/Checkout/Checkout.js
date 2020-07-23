import React, { useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import useGenerateOrder from '../../hooks/useGenerateOrder';

import BasketProduct from '../../components/BasketProduct/BasketProduct';

import classes from './Checkout.module.scss';

const Checkout = () => {
  const location = useLocation();

  const basket = useSelector(state => state.basket.basket);

  const discountCodes = useSelector(state => state.voucherCode.codes);

  const deliveryDetails = useMemo(() => {
    return location.state
      ? location.state.deliveryDetails
      : { isDelivery: null };
  }, [location]);

  const saveAddress = useMemo(() => {
    return location.state ? location.state.saveAddress : false;
  }, [location]);

  const order = useGenerateOrder(
    basket,
    discountCodes,
    deliveryDetails,
    saveAddress
  );

  const makeDiscountDisplay = discount => {
    switch (discount.type) {
      case '£':
        return `- £${Math.abs(discount.value)}`;
      case '%':
        return `- ${Math.abs(discount.value)}%`;
      case 'product':
        return null;
      default:
        return '';
    }
  };

  let basketDisplay = (
    <React.Fragment>
      <p>You do not currently have any items in your basket</p>
      <Link className={classes.Checkout_Link} to='/'>
        Continue Shopping
      </Link>
    </React.Fragment>
  );
  if (order.get.products.length) {
    basketDisplay = order.get.products.map(item => (
      <BasketProduct
        key={item.productSku + item.size}
        sku={item.productSku}
        price={item.price}
        size={item.size}
        qty={item.qty}
        isCheckout={true}
      />
    ));
  }

  let codesDisplay = null;
  let discountsDisplay = null;
  if (order.get.discounts.length) {
    codesDisplay = order.get.discounts.map((discount, index) => (
      <small key={discount.code + index}>
        {!index ? <span>Voucher Codes</span> : null}
        <span style={{ minWidth: '8rem', display: 'inline-block' }}>
          "{discount.code}"
        </span>
      </small>
    ));
    discountsDisplay = order.get.discounts.map((discount, index) => (
      <small key={discount.discountType + index}>
        {makeDiscountDisplay({
          type: discount.discountType,
          value: discount.discountValue
        })}
      </small>
    ));
  }

  let subTotalDisplay = null;
  if (order.get.products.length) {
    subTotalDisplay = (
      <React.Fragment>
        <hr className={classes.Checkout_Line} />
        <div className={classes.Checkout_CheckoutSubtotal}>
          <div className={classes.Checkout_CheckoutText}>
            <p>Subtotal</p>
            {codesDisplay}
          </div>
          <div className={classes.Checkout_CheckoutSubTotalPrice}>
            <p>£{order.get.totals.subTotal}</p>
            {discountsDisplay}
          </div>
        </div>
      </React.Fragment>
    );
  }

  let deliveryDisplay = null;
  if (order.get.products.length) {
    deliveryDisplay = (
      <div className={classes.Checkout_Delivery}>
        {deliveryDetails.isDelivery ? (
          <React.Fragment>
            <address className={classes.Checkout_DeliveryAddress}>
              <span>Your Order will be sent to:</span>
              <div>
                {deliveryDetails.name}
                <br />
                {deliveryDetails.address}
                {', '}
                {deliveryDetails.city}
                <br />
                {deliveryDetails.postcode}
                <br />
              </div>
            </address>
            <div className={classes.Checkout_CheckoutDeliveryPrice}>
              <p>Delivery</p>
              <span>
                {deliveryDetails.isDelivery && order.get.totals.subTotal < 60
                  ? '£5'
                  : 'FREE'}
              </span>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <address className={classes.Checkout_DeliveryAddress}>
              <span>Click &amp; Collect:</span>
              <div>
                {deliveryDetails.name} Munro Outdoor Retail
                <br />
                {deliveryDetails.address}
                {', '}
                {deliveryDetails.city}
                {', '}
                {deliveryDetails.postcode}
                <br />
              </div>
            </address>
            <div className={classes.Checkout_CheckoutDeliveryPrice}>
              <p>Click &amp; Collect</p>
              <span>
                {deliveryDetails.isDelivery && order.get.totals.subTotal < 60
                  ? '£5'
                  : 'FREE'}
              </span>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }

  let totalDisplay = null;
  if (order.get.products.length) {
    totalDisplay = (
      <React.Fragment>
        <hr className={classes.Checkout_Line} />
        <div className={classes.Checkout_Total}>
          <p>Total</p>
          <span>£{order.get.totals.totalToPay.toFixed(2)}</span>
        </div>
        <hr className={classes.Checkout_Line} />
      </React.Fragment>
    );
  }

  return (
    <div
      className={classes.Checkout}
      style={!order.get.products.length ? { margin: '6rem auto' } : null}
    >
      <div className={classes.Checkout_Title}>Checkout</div>
      <div className={classes.Checkout_Basket}>{basketDisplay}</div>
      {subTotalDisplay}
      {deliveryDisplay}
      {totalDisplay}
    </div>
  );
};

export default Checkout;
