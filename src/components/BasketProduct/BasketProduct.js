import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import useLoadProduct from '../../hooks/useLoadProduct';

import { changeBasketQty, removeBasketSku } from '../../store/actions/';

import classes from './BasketProduct.module.scss';

const API_URL = 'http://192.168.0.17:8080/';

const BasketProduct = props => {
  const product = useLoadProduct(props.sku);

  const history = useHistory();

  const dispatch = useDispatch();

  const screenSize = useSelector(state => state.config.screenSize);

  const [productQty, setProductQty] = useState(props.qty);

  const productChangeQtyHandler = event => {
    setProductQty(+event.target.value.replace(/\D/, ''));
  };

  const updateBasketHandler = () => {
    if (productQty) {
      dispatch(
        changeBasketQty(
          product.productSku,
          productQty,
          product.productPrice,
          props.size
        )
      );
    } else {
      removeBasketSkuHandler();
    }
  };

  const removeBasketSkuHandler = () => {
    dispatch(
      removeBasketSku(product.productSku, product.productPrice, props.size)
    );
  };

  let productDisplay = null;
  if (product) {
    productDisplay = (
      <div
        className={
          screenSize >= 5
            ? classes.BasketProduct
            : classes.BasketProduct_SmallScreen
        }
        style={screenSize < 3 ? { borderTop: '1px dashed' } : null}
      >
        <article
          className={[
            classes.BasketProduct_ProductDetails,
            screenSize < 3
              ? classes.BasketProduct_ProductDetails_SmallScreen
              : null
          ].join(' ')}
          style={
            props.isModal || props.isCheckout ? { pointerEvents: 'none' } : null
          }
          onClick={() =>
            !props.isModal &&
            !props.isCheckout &&
            history.push(`product/${product.productSku}`)
          }
        >
          <section className={classes.BasketProduct_ProductDetails_Images}>
            <img
              src={`${API_URL}images/150x150/${product.productImages[0]}`}
              alt={product.productSku}
            />
          </section>
          <section className={classes.BasketProduct_ProductDetails_Details}>
            <p>
              {product.productBrand + ' - ' + product.productName}
              {screenSize < 3 ? <br /> : ' - '}
              {props.size ? 'size: ' + props.size : null}
            </p>
            <p>£{!props.isCheckout ? product.productPrice : props.price}</p>
          </section>
        </article>
        <article
          className={
            screenSize >= 5
              ? classes.BasketProduct_ProductQtyPrice
              : classes.BasketProduct_ProductQtyPrice_SmallScreen
          }
          // style={
          //   props.isCheckout
          //     ? {
          //         justifyContent: 'flex-end',
          //         width: '35%'
          //       }
          //     : null
          // }
        >
          {!props.isCheckout ? (
            <section className={classes.BasketProduct_ProductQtyPrice_Qty}>
              <small>Qty</small>
              <input
                type='text'
                value={productQty}
                onChange={productChangeQtyHandler}
              />
              <button
                disabled={productQty === props.qty}
                onClick={updateBasketHandler}
              >
                update
              </button>
              <button onClick={removeBasketSkuHandler}>remove</button>
            </section>
          ) : (
            <section
              className={classes.BasketProduct_ProductQtyPrice_Checkout}
              style={screenSize >= 5 ? { width: '10rem' } : null}
            >
              <small>X</small>
              <div style={{ marginRight: '0.5rem' }}>
                <span style={{ marginRight: '0.5rem' }}>Qty</span>
                <span>{productQty}</span>
              </div>
            </section>
          )}
          {screenSize >= 3 ? (
            <section className={classes.BasketProduct_ProductQtyPrice_Price}>
              £
              {(!props.isCheckout ? product.productPrice : props.price) *
                props.qty}
            </section>
          ) : null}
        </article>
        {screenSize < 3 ? (
          <React.Fragment>
            <section
              className={
                classes.BasketProduct_ProductQtyPrice_Price_ScreenSmall
              }
            >
              £
              {(!props.isCheckout ? product.productPrice : props.price) *
                props.qty}
            </section>
          </React.Fragment>
        ) : null}
      </div>
    );
  }

  return productDisplay;
};

export default BasketProduct;
