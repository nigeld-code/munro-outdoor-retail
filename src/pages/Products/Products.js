import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import useLoadProducts from '../../hooks/useLoadProducts';

import Banner from '../../components/Banner/Banner';

import productsTopBanner from './data/productsTopBanner';

import classes from './Products.module.scss';

const API_URL = 'http://192.168.0.17:8080/';

const Products = props => {
  const { category, selection } = useParams();

  const history = useHistory();

  const products = useLoadProducts(category, selection);

  const productsFilter = (
    <aside className={classes.ProductsFilter}>Refine your search</aside>
  );

  let productsDisplay = [];
  if (products && products.length) {
    productsDisplay = products.map((product, index) => {
      return (
        <article
          key={'Product' + index}
          className={classes.ProductsItem}
          onClick={() => {history.push(`/product/${product.productSku}`)}}
        >
          {product.productImages && product.productImages.length ? (
            <img
              className={classes.ProductsItemImage}
              src={`${API_URL}images/300x300/${product.productImages[0]}`}
              alt={product.productName}
            />
          ) : (
            <img
              className={classes.ProductsItemImage}
              src={`${API_URL}images/300x300/5efc762a9dbacd38a8db8372`}
              alt={product.productName}
            />
          )}
          <h3 className={classes.ProductsItemBrand}>{product.productBrand}</h3>
          <div className={classes.ProductsItemInfo}>
            <div>
              <h4 className={classes.ProductsItemName}>
                {product.productName}
              </h4>
            </div>
            <div className={classes.ProductsItemPrice}>
              <p>£{product.productPrice}</p>
            </div>
          </div>
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
