import React from 'react';

import { useHistory } from 'react-router-dom';

import classes from './Breadcrumbs.module.scss';

const Breadcrumbs = props => {
  const { breadcrumbs, productName } = props;

  const history = useHistory();

  let breadcrumbsArr = null;
  if (typeof breadcrumbs === 'object') {
    breadcrumbsArr =
      breadcrumbs &&
      breadcrumbs.map(breadcrumb => (
        <React.Fragment key={breadcrumb._id}>
          <div className={classes.BreadcrumbsArrow}>{'>'}</div>
          <div
            className={classes.BreadcrumbsTitle}
            onClick={() => history.push(`/products/${breadcrumb._id}`)}
          >
            {breadcrumb.title}
          </div>
        </React.Fragment>
      ));
  }

  return (
    <React.Fragment>
      <div className={classes.Breadcrumbs}>
        <div
          className={classes.BreadcrumbsTitle}
          onClick={() => history.push('/')}
        >
          Home
        </div>
        {breadcrumbsArr}
        {productName ? (
          <React.Fragment>
            <div className={classes.BreadcrumbsArrow}>{'>'}</div>
            <div
              className={classes.BreadcrumbsTitle}
              style={{ textDecoration: 'none', cursor: 'default' }}
            >
              {productName}
            </div>
          </React.Fragment>
        ) : null}
      </div>
      <hr className={classes.BreadcrumbsBorder} />
    </React.Fragment>
  );
};

export default Breadcrumbs;
