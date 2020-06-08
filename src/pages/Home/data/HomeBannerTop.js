import React from 'react';

const HomeBannerTop = [
  {
    text: <div>Click &amp; Collect</div>,
    click: () => console.log('Hello'),
    minScreen: 1
  },
  {
    text: (
      <div>
        <strong>Free</strong> Next Day Delivery over £60
      </div>
    )
  },
  {
    text: (
      <div>
        <strong>Free</strong> Returns
      </div>
    ),
    minScreen: 2
  }
];

export default HomeBannerTop;