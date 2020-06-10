import React from 'react';
import { useSelector } from 'react-redux';

import Banner from '../../components/Banner/Banner';

import productsTopBanner from './data/productsTopBanner';

import classes from './Products.module.scss';

const Products = props => {
  const screenSize = useSelector(state => state.config.screenSize);

  const productsFilter =
    screenSize > 3 ? (
      <aside className={classes.ProductsFilter}>
        Refine your search hello what
      </aside>
    ) : null;

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
          <article className={classes.ProductsItem}>Product</article>
          <article className={classes.ProductsItem}>Product</article>
          <article className={classes.ProductsItem}>Product</article>
          <article className={classes.ProductsItem}>Product</article>
          <article className={classes.ProductsItem}>Product</article>
          <article className={classes.ProductsItem}>Product</article>
          <article className={classes.ProductsItem}>Product</article>
          <article className={classes.ProductsItem}>Product</article>
          <article className={classes.ProductsItem}>Product</article>
          <article className={classes.ProductsItem}>Product</article>
          <article className={classes.ProductsItem}>Product</article>
          <article className={classes.ProductsItem}>Product</article>
          <article className={classes.ProductsItem}>Product</article>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Products;
