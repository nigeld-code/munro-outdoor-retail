import React, { useState } from 'react';

import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { addToBasket } from '../../store/actions/basket';

import useLoadProduct from '../../hooks/useLoadProduct';

import Breadcrumbs from '../../components/UI/Breadcrumbs/Breadcrumbs';
import SlideShow from '../../components/UI/SlideShow/SlideShow';

import classes from './Product.module.scss';

const API_URL = 'http://192.168.0.17:8080/';

const Product = () => {
  const { sku } = useParams();

  const screenSize = useSelector(state => state.config.screenSize);

  const product = useLoadProduct(sku);

  const dispatch = useDispatch();

  const [addToBasketQty, setAddToBasketQty] = useState(1);

  const addToBasketQtyHandler = event => {
    setAddToBasketQty(event.target.value.replace(/\D/, ''));
  };

  const addToBasketSubmit = event => {
    event.preventDefault();
    if (product && +addToBasketQty > 0) {
      dispatch(addToBasket(product.productSku, +addToBasketQty, product.productPrice));
    }
  };

  let productDisplay = null;
  if (product) {
    const productBrandName = (
      <div className={classes.ProductBrandName}>
        <h2>{product.productBrand}</h2>
        <h1>{product.productName}</h1>
      </div>
    );

    const productPrice = (
      <div className={classes.ProductPrice}>
        <h3>£{product.productPrice}</h3>
      </div>
    );

    const productSlideShow = (
      <div
        className={classes.ProductSlideShow}
        style={screenSize > 3 ? { margin: '0.5rem 1rem' } : null}
      >
        <SlideShow
          slides={product.productImages.map(id => ({
            contents: (
              <React.Fragment>
                <img
                  style={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                    cursor: 'pointer'
                  }}
                  src={`${API_URL}images/850x850/${id}`}
                  alt=''
                />
              </React.Fragment>
            )
          }))}
          display={{
            height: '350px',
            width: '350px',
            sizeByScreen: [
              {
                screens: [1, 2, 3],
                height: '95vw',
                width: '95vw'
              },
              {
                screens: [4],
                height: '500px',
                width: '500px'
              },
              {
                screens: [5],
                height: '700px',
                width: '700px'
              },
              {
                screens: [6],
                height: '800px',
                width: '800px'
              }
            ]
          }}
          timings={{ autoSlideChangeTime: 6000, slideChangeTime: 1200 }}
        />
      </div>
    );

    const productAddToBasket = (
      <div className={classes.ProductAddToBasket}>
        <form onSubmit={addToBasketSubmit}>
          <label htmlFor='quantity'>Qty:</label>
          <input
            type='text'
            id='quantity'
            value={addToBasketQty}
            onChange={addToBasketQtyHandler}
          />
          <button>Add to Basket</button>
        </form>
      </div>
    );

    const productDescription = (
      <div className={classes.ProductDescription}>
        {product.productDescription}
      </div>
    );

    const productSku = (
      <div className={classes.ProductSku}>Sku:{product.productSku}</div>
    );

    productDisplay = (
      <div>
        {screenSize > 2 ? (
          <Breadcrumbs
            breadcrumbs={product.breadcrumbs}
            productName={product.productName}
          />
        ) : null}
        <div
          className={classes.ProductDetails}
          style={screenSize > 3 ? { flexFlow: 'row nowrap' } : null}
        >
          {screenSize > 3 ? productSlideShow : productBrandName}
          <div>
            {screenSize > 3 ? productBrandName : productPrice}
            {screenSize > 3 ? productPrice : productSlideShow}
            {screenSize > 3 ? productAddToBasket : null}
            {screenSize > 3 ? productDescription : null}
            {screenSize > 3 ? productSku : null}
          </div>
        </div>
        {screenSize > 3 ? null : productAddToBasket}
        {screenSize > 3 ? null : productDescription}
        {screenSize > 3 ? null : productSku}
      </div>
    );
  }
  return <React.Fragment>{productDisplay}</React.Fragment>;
};

export default Product;
