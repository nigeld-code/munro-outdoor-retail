import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';

import { showModal } from '../../../store/actions/';

import Overlay from '../Overlay/Overlay';
import Logo from '../Logo/Logo';
import BasketProduct from '../../BasketProduct/BasketProduct';

import classes from './Modal.module.scss';

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

const Modal = () => {
  const modalContents = useSelector(state => state.config.modal);
  const basket = useSelector(state => state.basket);

  const dispatch = useDispatch();

  const history = useHistory();

  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(showModal(null));
  }, [pathname, dispatch]);

  const closeFunctions = {
    closeOrderConfirmation: () => {
      history.push('/');
    }
  };

  const closeModal = () => {
    if (modalContents && modalContents.close) {
      closeFunctions[modalContents.close.functionName](
        modalContents.close.param ? modalContents.close.param : null
      );
    }
    dispatch(showModal(null));
  };

  let modalDisplay = null;
  if (modalContents) {
    let orderDisplay = null;
    if (modalContents.order) {
      let codesDisplay = null;
      let discountsDisplay = null;
      if (modalContents.order.discounts.length) {
        codesDisplay = modalContents.order.discounts.map((discount, index) => (
          <small key={discount.code + index}>
            <span style={{ padding: '0.25rem 1rem' }}>"{discount.code}"</span>
          </small>
        ));
        discountsDisplay = modalContents.order.discounts.map(
          (discount, index) => (
            <small
              key={discount.discountType + index}
              style={{ width: '5rem' }}
            >
              {makeDiscountDisplay({
                type: discount.discountType,
                value: discount.discountValue
              })}
            </small>
          )
        );
      }

      orderDisplay = (
        <div>
          <p>
            Order Ref: <strong>{modalContents.order._id}</strong>
          </p>
          {modalContents.order.products.map(product => {
            return (
              <BasketProduct
                key={product.productSku + product.size}
                sku={product.productSku}
                price={product.price}
                size={product.size}
                qty={product.qty}
                isCheckout
              />
            );
          })}
          <hr />
          <div className={classes.Modal_BasketSubtotal}>
            <div className={classes.Modal_BasketText}>
              <p>Subtotal</p>
            </div>
            <div className={classes.Modal_BasketTotalPrice}>
              £{modalContents.order.totals.subTotal}
            </div>
          </div>
          {codesDisplay ? (
            <div className={classes.Modal_Order_Discounts}>
              <div style={{ alignSelf: 'flex-start', fontSize: '0.8rem' }}>
                Voucher Codes
              </div>
              <div className={classes.Modal_Order_DiscountsCodes}>
                {codesDisplay}
              </div>
              <div className={classes.Modal_Order_DiscountsCodes}>
                {discountsDisplay}
              </div>
            </div>
          ) : null}
          <hr />
          <div className={classes.Modal_Order_Delivery}>
            <div className={classes.Modal_Order_Delivery_Section}>
              <div style={{ padding: '0 0.5rem', alignSelf: 'flex-start' }}>
                {modalContents.order.delivery.isDelivery
                  ? 'Delivery to:'
                  : 'Collect at:'}
              </div>
              <div>
                {modalContents.order.delivery.name}
                {!modalContents.order.delivery.isDelivery
                  ? ' Munro Outdoor Retail'
                  : null}
                <br />
                {modalContents.order.delivery.address},{' '}
                {modalContents.order.delivery.city}
                <br />
                {modalContents.order.delivery.postcode}
              </div>
            </div>
            <div className={classes.Modal_Order_Delivery_Section}>
              <div style={{ padding: '0.25rem 1rem' }}>
                {modalContents.order.delivery.isDelivery
                  ? 'Delivery'
                  : 'Click & Collect'}
              </div>
              <div style={{ width: '5rem' }}>
                {modalContents.order.delivery.isDelivery &&
                modalContents.order.totals.subTotal < 60
                  ? '£5'
                  : 'Free'}
              </div>
            </div>
          </div>
          <hr />
          <div className={classes.Modal_Order_Total}>
            <span style={{ padding: '0.25rem 1rem' }}>Total</span>
            <span style={{ width: '5rem' }}>
              £{modalContents.order.totals.totalToPay.toFixed(2)}
            </span>
          </div>
          <hr />
          <div style={{ textAlign: 'center', margin: '1rem 0' }}>
            <p style={{ marginBottom: '0.5rem' }}>"Payment":</p>
            {modalContents.order.payment.map(pay => (
              <p key={pay.cardNum + pay.method} style={{ margin: 0 }}>
                {pay.method.charAt(0).toUpperCase() + pay.method.slice(1)} Card:
                ******{pay.cardNum} - £{pay.amount.toFixed(2)}
              </p>
            ))}
          </div>
          <div className={classes.Modal_BasketButtons}>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      );
    }
    modalDisplay = (
      <React.Fragment>
        <Overlay showOverlay={modalContents} clicked={closeModal} />
        <div className={classes.Modal}>
          <div className={classes.Modal_CloseBtn} onClick={closeModal}>
            X
          </div>
          <div style={{ textAlign: 'center', margin: '0.5rem' }}>
            <Logo className={classes.Modal_Logo} />
          </div>
          <div className={classes.Modal_Main}>
            {modalContents.title ? <h2>{modalContents.title}</h2> : null}
            {modalContents.main
              ? modalContents.main.map((item, itemIndex) => {
                  return (
                    <div key={itemIndex + 'item'}>
                      {item.h3 ? <h3>{item.h3}</h3> : null}
                      {item.text ? <p>{item.text}</p> : null}
                      {item.points ? (
                        <ul>
                          {item.points.map((point, pointIndex) => (
                            <li key={pointIndex + 'point' + itemIndex}>
                              {point}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      {item.hr ? <hr /> : null}
                      {item.basket ? (
                        <div>
                          {basket.basket.map(item => {
                            return (
                              <BasketProduct
                                key={item.productSku + item.size}
                                sku={item.productSku}
                                size={item.size}
                                qty={item.qty}
                                isModal
                              />
                            );
                          })}
                          <hr />
                          <div className={classes.Modal_BasketSubtotal}>
                            <div className={classes.Modal_BasketText}>
                              <p>Subtotal</p>
                              <small>
                                {'(excluding delivery & discounts)'}
                              </small>
                            </div>
                            <div className={classes.Modal_BasketTotalPrice}>
                              £{basket.totalPrice}
                            </div>
                          </div>
                          <div className={classes.Modal_BasketButtons}>
                            <button onClick={closeModal}>
                              Continue Shopping
                            </button>
                            <button onClick={() => history.push('/basket')}>
                              Checkout
                            </button>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  );
                })
              : null}
            {orderDisplay}
          </div>
        </div>
      </React.Fragment>
    );
  }

  return modalDisplay;
};

export default Modal;
