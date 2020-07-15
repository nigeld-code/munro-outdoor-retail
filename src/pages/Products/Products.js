import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import useLoadProducts from '../../hooks/useLoadProducts';

import Banner from '../../components/Banner/Banner';
import Breadcrumbs from '../../components/UI/Breadcrumbs/Breadcrumbs';

import productsTopBanner from './data/productsTopBanner';

import classes from './Products.module.scss';

const API_URL = 'http://192.168.0.17:8080/';

const COMMON_BREADCRUMB_TITLE_CHARS_TO_REMOVE = [
  "Men's ",
  "Women's ",
  'Boys ',
  'Girls '
];

const Products = () => {
  const { category, selection } = useParams();

  const history = useHistory();

  const { products, breadcrumbs, refineOptions, brands } = useLoadProducts(
    category,
    selection
  );

  const [filter, setFilter] = useState([]);
  const [sort, setSort] = useState('new');

  const [filterProductsResult, setFilterProductsResult] = useState({
    productsFiltered: [],
    refineOptionsFiltered: [],
    brandsFiltered: []
  });

  const filterHandler = (type, item) => {
    if (type && item) {
      const toggleFilterIndex = filter.findIndex(
        filterObj => filterObj.type === type && filterObj.item === item
      );
      if (toggleFilterIndex !== -1) {
        setFilter(
          filter.filter(
            (filterObj, index) =>
              (filterObj.type === 'breadcrumb' && index < toggleFilterIndex) ||
              (filterObj.type === 'brand' && index !== toggleFilterIndex)
          )
        );
      } else {
        setFilter([...filter, { type, item }]);
      }
    } else {
      setFilter([]);
    }
  };

  useEffect(() => {
    if (products && refineOptions && brands) {
      let productsFiltered = [...products];
      if (sort === 'low') {
        productsFiltered.sort((a, b) => a.productPrice - b.productPrice);
      }
      if (sort === 'high') {
        productsFiltered.sort((a, b) => b.productPrice - a.productPrice);
      }
      let refineOptionsFiltered = refineOptions;
      let brandsFiltered = brands;

      const removedBreadcrumbs = {};
      const removedBrands = {};

      if (filter && filter.length) {
        const breadcrumbFilters = [];
        const brandFilters = [];
        filter.forEach(({ type, item }) => {
          if (type === 'breadcrumb') {
            breadcrumbFilters.push(item);
          } else if (type === 'brand') {
            brandFilters.push(item);
          }
        });
        if (breadcrumbFilters.length) {
          productsFiltered = productsFiltered.filter(product => {
            let canShowCount = 0;
            breadcrumbFilters.forEach(filter => {
              if (product.breadcrumbs.includes(filter)) {
                canShowCount += 1;
              }
            });
            const keepProduct = canShowCount === breadcrumbFilters.length;
            if (!keepProduct) {
              product.breadcrumbs.forEach(breadcrumb => {
                removedBreadcrumbs[breadcrumb] = removedBreadcrumbs[breadcrumb]
                  ? removedBreadcrumbs[breadcrumb] + 1
                  : 1;
              });
              removedBrands[product.productBrand] = removedBrands[
                product.productBrand
              ]
                ? removedBrands[product.productBrand] + 1
                : 1;
            }
            return keepProduct;
          });
          refineOptionsFiltered = refineOptionsFiltered.map(refineOption => {
            if (breadcrumbFilters.includes(refineOption.breadcrumbId)) {
              return { ...refineOption, optionSelected: true, show: true };
            } else if (
              breadcrumbFilters.findIndex(
                breadcrumb => breadcrumb === refineOption.parent
              ) ===
              breadcrumbFilters.length - 1
            ) {
              return { ...refineOption, show: true };
            } else if (refineOption.breadcrumbId === category) {
              return refineOption;
            } else {
              return null;
            }
          });
        }
        if (brandFilters.length) {
          productsFiltered = productsFiltered.filter(product => {
            const keepProduct = brandFilters.includes(product.productBrand);
            if (!keepProduct) {
              product.breadcrumbs.forEach(breadcrumb => {
                removedBreadcrumbs[breadcrumb] = removedBreadcrumbs[breadcrumb]
                  ? removedBreadcrumbs[breadcrumb] + 1
                  : 1;
              });
              removedBrands[product.productBrand] = removedBrands[
                product.productBrand
              ]
                ? removedBrands[product.productBrand] + 1
                : 1;
            }
            return keepProduct;
          });
          brandsFiltered = brandsFiltered.map(brand => {
            if (brandFilters.includes(brand.brand)) {
              return { ...brand, optionSelected: true };
            } else {
              return brand;
            }
          });
        }

        brandsFiltered = brandsFiltered.map(brand => {
          if (Object.keys(removedBrands).includes(brand.brand)) {
            return {
              ...brand,
              qty: brand.qty - removedBrands[brand.brand]
            };
          } else {
            return brand;
          }
        });

        refineOptionsFiltered = refineOptionsFiltered.map(refineOption => {
          if (
            refineOption &&
            refineOption.breadcrumbId &&
            Object.keys(removedBreadcrumbs).includes(refineOption.breadcrumbId)
          ) {
            return {
              ...refineOption,
              qty:
                refineOption.qty - removedBreadcrumbs[refineOption.breadcrumbId]
            };
          } else {
            return refineOption;
          }
        });
      }

      setFilterProductsResult({
        productsFiltered,
        refineOptionsFiltered,
        brandsFiltered
      });
    }
  }, [filter, sort, products, brands, category, refineOptions]);

  const sortHandler = event => {
    setSort(event.target.value);
  };

  let refineDisplayBreadcrumbs = null;
  if (refineOptions && refineOptions.length && products) {
    refineDisplayBreadcrumbs = filterProductsResult.refineOptionsFiltered.map(
      refineOption => {
        if (refineOption && refineOption.breadcrumbId === category) {
          return (
            <React.Fragment key={refineOption.breadcrumbId}>
              <li style={{ cursor: 'default' }}>{refineOption.title + ':'}</li>
              <div className={classes.ProductsFilter_Line}></div>
            </React.Fragment>
          );
        } else if (
          refineOption &&
          (refineOption.show ||
            (category === '_'
              ? refineOption.parent === null
              : refineOption.parent === category))
        ) {
          COMMON_BREADCRUMB_TITLE_CHARS_TO_REMOVE.forEach(startToRemove => {
            if (refineOption.title.startsWith(startToRemove)) {
              refineOption.title = refineOption.title.replace(
                startToRemove,
                ''
              );
            }
          });
          if (refineOption.qty) {
            return (
              <li
                key={refineOption.breadcrumbId}
                className={
                  refineOption.optionSelected
                    ? classes.ProductsFilter_OptionSelected
                    : classes.ProductsFilter_Option
                }
                style={{ marginLeft: `${refineOption.level * 5}px` }}
                onClick={() => {
                  filterHandler('breadcrumb', refineOption.breadcrumbId);
                }}
              >
                <div className={classes.ProductsFilter_Title}>
                  <span className={classes.ProductsFilter_Text}>
                    {refineOption.title}
                  </span>
                </div>
                <div>
                  <span className={classes.ProductsFilter_Text}>
                    {refineOption.qty}
                  </span>
                </div>
              </li>
            );
          }
        }
        return null;
      }
    );
  }

  let refineDisplayBrands = null;
  if (brands && brands.length && products) {
    refineDisplayBrands = filterProductsResult.brandsFiltered.map(
      brandOption => {
        if (brandOption.qty) {
          return (
            <React.Fragment key={brandOption.brand}>
              <li
                className={
                  brandOption.optionSelected ||
                  brandOption.qty === products.length ||
                  brandOption.qty ===
                    filterProductsResult.productsFiltered.length
                    ? classes.ProductsFilter_OptionSelected
                    : classes.ProductsFilter_Option
                }
                style={{ marginLeft: '0.5rem' }}
                onClick={() => {
                  if (
                    brandOption.qty !== products.length ||
                    brandOption.qty !==
                      filterProductsResult.productsFiltered.length
                  ) {
                    filterHandler('brand', brandOption.brand);
                  }
                }}
              >
                <div>
                  <span className={classes.ProductsFilter_Text}>
                    {brandOption.brand}
                  </span>
                </div>
                <div>
                  <span className={classes.ProductsFilter_Text}>
                    {brandOption.qty}
                  </span>
                </div>
              </li>
            </React.Fragment>
          );
        } else {
          return null;
        }
      }
    );
  }

  const productsFilter = (
    <aside className={classes.ProductsFilter}>
      <ul className={classes.ProductsFilter_Heading}>
        <li>
          <div style={{ paddingLeft: '0.25rem' }}>
            {products ? filterProductsResult.productsFiltered.length : null}{' '}
            results
          </div>
          <div>
            <small>Refine your search</small>
          </div>
        </li>
      </ul>
      <ul>{refineDisplayBreadcrumbs}</ul>
      {refineDisplayBrands && refineDisplayBreadcrumbs ? (
        <div className={classes.ProductsFilter_Line}></div>
      ) : null}
      <ul>
        {refineDisplayBrands ? (
          <React.Fragment>
            <li style={{ cursor: 'default' }}>Brand:</li>
            <div className={classes.ProductsFilter_Line}></div>
          </React.Fragment>
        ) : null}
        {refineDisplayBrands}
      </ul>
      {filter && filter.length ? (
        <React.Fragment>
          <div
            className={classes.ProductsFilter_Reset}
            onClick={() => filterHandler()}
          >
            <small>Clear</small>
          </div>
        </React.Fragment>
      ) : null}
    </aside>
  );

  let productsDisplay = [];
  let productsSort = null;
  if (products && products.length) {
    productsDisplay = filterProductsResult.productsFiltered.map(
      (product, index) => {
        return (
          <article
            key={'Product' + index}
            className={classes.ProductsItem}
            onClick={() => {
              history.push(`/product/${product.productSku}`);
            }}
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
            <h3 className={classes.ProductsItemBrand}>
              {product.productBrand}
            </h3>
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
      }
    );
    productsSort = (
      <React.Fragment>
        <label htmlFor='sort'>Sort By: </label>
        <select id='sort' onChange={sortHandler}>
          <option value='new'>Newest Arrivals</option>
          <option value='high'>Price: High to Low</option>
          <option value='low'>Price: Low to High</option>
        </select>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Banner
        className={productsTopBanner.className}
        contents={productsTopBanner.contents}
        clicked={() => history.push('/terms/first-online-order-discount')}
      />
      {category !== '_' ? (
        <Breadcrumbs breadcrumbs={breadcrumbs ? breadcrumbs : null} />
      ) : null}
      <div className={classes.Products}>
        {refineDisplayBreadcrumbs || refineDisplayBrands
          ? productsFilter
          : null}
        <div className={classes.Products_Right}>
          <div className={classes.ProductsSort}>{productsSort}</div>
          <section className={classes.ProductsContainer}>
            {productsDisplay.length ? productsDisplay : <p>No Products</p>}
          </section>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Products;
