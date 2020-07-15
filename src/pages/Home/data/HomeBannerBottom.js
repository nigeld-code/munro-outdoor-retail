import React from 'react';

const HomeBannerBottom = [
  {
    text: <div>Ascend</div>,
    click: ({ history }) => history.push('/products/_/ascend')
  },
  {
    text: <div>Highland</div>,
    click: ({ history }) => history.push('/products/_/highland'),
    minScreen: 2
  },
  {
    text: <div>Eagle Footware</div>,
    click: ({ history }) => history.push('/products/_/eagle')
  },
  {
    text: <div>Draussen Camping</div>,
    click: ({ history }) => history.push('/products/_/draussen')
  },
  {
    text: <div>Sudore Activeware</div>,
    click: ({ history }) => history.push('/products/_/sudore'),
    minScreen: 3
  },
  {
    text: <div>Kaput</div>,
    click: ({ history }) => history.push('/products/_/kaput'),
    minScreen: 4
  },
  {
    text: <div>Skodon</div>,
    click: ({ history }) => history.push('/products/_/skodon'),
    minScreen: 3
  },
  {
    text: <div>Pabell Tents</div>,
    click: ({ history }) => history.push('/products/_/pabell'),
    minScreen: 4
  },
  {
    text: <div>Equipo</div>,
    click: ({ history }) => history.push('/products/_/equipo'),
    minScreen: 2
  }
];

export default HomeBannerBottom;
