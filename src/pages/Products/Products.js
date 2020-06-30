import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import useLoadProducts from '../../hooks/useLoadProducts';

import Banner from '../../components/Banner/Banner';

import productsTopBanner from './data/productsTopBanner';

import classes from './Products.module.scss';

const API_URL = 'http://192.168.0.17:8080/';

const Products = props => {
  const screenSize = useSelector(state => state.config.screenSize);
  const { category, selection } = useParams();

  const products = useLoadProducts(category, selection);

  const productsFilter = (
    <aside className={classes.ProductsFilter}>Refine your search</aside>
  );

  let productsDisplay = [];
  if (products && products.length) {
    productsDisplay = products.map((product, index) => {
      return (
        <article key={'Product' + index} className={classes.ProductsItem}>
          {product.productName}
          <br />
          {product.productSku}
          <br />
          {product.productImages && product.productImages.length ? (
            <img
              className={classes.ProductImage}
              src={`${API_URL}images/300x300/${product.productImages[0]}`}
              alt=''
            />
          ) : null}
        </article>
      );
    });
  }

  return (
    <React.Fragment>
      <Banner
        className={productsTopBanner.className}
        contents={productsTopBanner.contents}
        clicked={() => props.history.push('/terms/first-online-order-discount')}
      />
      <div className={classes.Products}>
        {productsFilter}
        <section className={classes.ProductsContainer}>
          {productsDisplay.length ? productsDisplay : <p>No Products</p>}
        </section>
      </div>
    </React.Fragment>
  );
};

export default Products;
