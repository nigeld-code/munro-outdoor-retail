import React from 'react';

import classes from './Breadcrumbs.module.scss';

const Breadcrumbs = props => {
  const { breadcrumbs, productName } = props;

  const breadcrumbsArr = breadcrumbs.map(breadcrumb => (
    <React.Fragment key={breadcrumb._id}>
      <div className={classes.BreadcrumbsArrow}>{'>'}</div>
      <div className={classes.BreadcrumbsTitle}>{breadcrumb.title}</div>
    </React.Fragment>
  ));

  return (
    <React.Fragment>
      <div className={classes.Breadcrumbs}>
        <div className={classes.BreadcrumbsTitle}>Home</div>
        {breadcrumbsArr}
        {productName ? (
          <React.Fragment>
            <div className={classes.BreadcrumbsArrow}>{'>'}</div>
            <div className={classes.BreadcrumbsTitle}>{productName}</div>
          </React.Fragment>
        ) : null}
      </div>
      <hr className={classes.BreadcrumbsBorder} />
    </React.Fragment>
  );
};

export default Breadcrumbs;
