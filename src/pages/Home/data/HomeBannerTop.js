import React from 'react';

import { showModal } from '../../../store/actions/';

const HomeBannerTop = [
  {
    text: <div>Click &amp; Collect</div>,
    click: ({ dispatch }) => {
      dispatch(
        showModal({
          title: 'Click & Collect',
          main: [
            {
              points: [
                'You CLICK on the things you want',
                'Then COLLECT from the shop'
              ]
            },
            { text: 'Sorted' }
          ]
        })
      );
    },
    minScreen: 1
  },
  {
    text: (
      <div>
        <strong>Free</strong> Next Day Delivery over £60
      </div>
    ),
    click: ({ dispatch }) => {
      dispatch(
        showModal({
          title: 'Delivery',
          main: [
            { text: 'Free next day Deliver on all orders over £60' },
            {
              text:
                'Delivery charge for order under £60 are £5 and will arrive within 3 working days of your order confirmation'
            },
            { hr: true },
            {
              text:
                'Delivery may take longer on days ending in "y", due to this business being made-up. No Refunds'
            }
          ]
        })
      );
    }
  },
  {
    text: (
      <div>
        <strong>Free</strong> Returns
      </div>
    ),
    click: ({ dispatch }) => {
      dispatch(
        showModal({
          title: 'Returns & Refunds',
          main: [
            {
              points: ['Returns']
            },
            {
              text:
                'You will recieve a full refund on any purchase returned within 30 days of the purchase date, as long as the product is unused and has retained any of its orignal packaging and labels etc. To return your product however, you wil need to find me! Good Luck ;)'
            },
            {
              points: ['Refunds']
            },
            {
              text: 'Umm, No Refunds. Tough Sh*t!'
            }
          ]
        })
      );
    },
    minScreen: 2
  }
];

export default HomeBannerTop;
