import React, { useState, useEffect, useMemo } from 'react';

import { Link, useHistory } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import {
  clearBasket,
  checkVoucherCode,
  checkAutoVoucherCodes,
  rejectVoucherCode,
  removeVoucherCode
} from '../../store/actions/';

import BasketProduct from '../../components/BasketProduct/BasketProduct';
import classes from './Basket.module.scss';

const stores = {
  Birmingham: {
    address: '1 Madeup Street',
    city: 'Birmingham',
    postcode: 'B2 4QA'
  },
  Glasgow: { address: '32 Fake Road', city: 'Glasgow', postcode: 'G1 3SL' },
  Leeds: { address: '27 Invisible Avenue', city: 'Leeds', postcode: 'LS1 4DY' },
  Liverpool: { address: '0 M62', city: 'Liverpool', postcode: 'L1 1JD' },
  London: { address: '34 Real Road', city: 'London', postcode: 'N1 9AL' },
  Manchester: {
    address: 'New Trafford',
    city: 'Manchester',
    postcode: 'M60 7RA'
  },
  Newcastle: {
    address: 'Up North',
    city: 'Newcastle upon Tyne',
    postcode: 'NE1 5DL'
  }
};

const Basket = () => {
  const history = useHistory();
  const user = useSelector(state => state.auth);
  const basket = useSelector(state => state.basket);
  const basketQty = useSelector(state => {
    let basketQtyCount = 0;
    state.basket.basket.forEach(item => {
      basketQtyCount += item.qty;
    });
    return basketQtyCount;
  });
  const dispatch = useDispatch();

  const [voucherCode, setVoucherCode] = useState('');

  const voucherCodeState = useSelector(state => state.voucherCode);

  const [deliveryDetails, setDeliveryDetails] = useState({
    isDelivery: true,
    name: user && user.savedAddress ? user.savedAddress.name : '',
    address: user && user.savedAddress ? user.savedAddress.address : '',
    city: user && user.savedAddress ? user.savedAddress.city : '',
    postcode: user && user.savedAddress ? user.savedAddress.postcode : '',
    email: user && user.email ? user.email : ''
  });

  const [inputValidation, setInputValidation] = useState({});

  const [saveAddress, setSaveAddress] = useState(false);

  useEffect(() => {
    return () => {
      dispatch(
        rejectVoucherCode({
          isAccepted: false,
          msg: null
        })
      );
    };
  }, [dispatch]);

  useEffect(() => {
    if (basket.basket.length) {
      dispatch(checkAutoVoucherCodes(voucherCodeState.codes, basket.basket));
    }
  }, [dispatch, voucherCodeState.codes, basket.basket, user.email]);

  useEffect(() => {
    let messageTimer = null;
    if (voucherCodeState.message.msg && voucherCodeState.message.msg.length) {
      messageTimer = setTimeout(() => {
        dispatch(
          rejectVoucherCode({
            isAccepted: false,
            msg: null
          })
        );
      }, 2000);
    }
    return () => {
      clearTimeout(messageTimer);
    };
  }, [voucherCodeState.message.msg, dispatch]);

  const voucherCodeInputHandler = event => {
    setVoucherCode(event.target.value.toUpperCase());
  };

  const clearBasketHandler = () => {
    dispatch(clearBasket());
  };

  const discountCodeHandler = event => {
    event.preventDefault();
    if (voucherCode && voucherCode !== '') {
      if (!voucherCodeState.codes.find(codeObj => codeObj === voucherCode)) {
        dispatch(
          checkVoucherCode(voucherCode, voucherCodeState.codes, basket.basket)
        );
        setVoucherCode('');
      } else {
        dispatch(
          rejectVoucherCode({
            isAccepted: false,
            msg: "Good try, you can't use codes more than once"
          })
        );
      }
    }
  };

  const removeCodeHandler = code => {
    dispatch(removeVoucherCode(code));
  };

  const isDeliveryBtnHandler = isDelivery => {
    if (isDelivery !== deliveryDetails.isDelivery) {
      setDeliveryDetails({
        isDelivery: isDelivery,
        name:
          isDelivery && user && user.savedAddress ? user.savedAddress.name : '',
        address:
          isDelivery && user && user.savedAddress
            ? user.savedAddress.address
            : '',
        city:
          isDelivery && user && user.savedAddress ? user.savedAddress.city : '',
        postcode:
          isDelivery && user && user.savedAddress
            ? user.savedAddress.postcode
            : '',
        email: user && user.email ? user.email : ''
      });
    }
    setInputValidation({});
    setSaveAddress(false);
  };

  const deliverDetailsInputHandler = (event, field) => {
    setDeliveryDetails({
      ...deliveryDetails,
      [field]: event.target.value
    });
    if (inputValidation[field] && inputValidation[field].length) {
      setInputValidation({
        ...inputValidation,
        [field]: []
      });
    }
  };

  const storeSelectionHandler = event => {
    if (event.target.value !== 'Choose...') {
      setDeliveryDetails({
        ...deliveryDetails,
        name: event.target.value,
        address: stores[event.target.value].address,
        city: stores[event.target.value].city,
        postcode: stores[event.target.value].postcode
      });
      if (inputValidation.name && inputValidation.name.length) {
        setInputValidation({ ...inputValidation, name: [] });
      }
    } else {
      setDeliveryDetails({
        ...deliveryDetails,
        name: '',
        address: '',
        city: '',
        postcode: ''
      });
    }
  };

  const proceedToCheckoutHandler = () => {
    setInputValidation({});
    let inputValidationObj = {};
    const addInputValidationFlag = (key, msg) => {
      inputValidationObj = {
        ...inputValidationObj,
        [key]: inputValidationObj[key]
          ? inputValidationObj[key].push(msg)
          : [msg]
      };
    };
    let passValidation = true;
    Object.keys(deliveryDetails).forEach(key => {
      if (key !== 'isDelivery' && deliveryDetails[key] === '') {
        addInputValidationFlag(key, '*required');
        passValidation = false;
      }
    });

    if (basket.basket.length && passValidation) {
      history.push({
        pathname: '/checkout',
        state: {
          deliveryDetails,
          saveAddress
        }
      });
    } else {
      setInputValidation(inputValidationObj);
    }
  };

  const saveAddressHandler = event => {
    setSaveAddress(event.target.checked);
  };

  const makeDiscountDisplay = discount => {
    switch (discount.type) {
      case '£':
        return `- £${Math.abs(discount.value)}`;
      case '%':
        return `- ${Math.abs(discount.value)}%`;
      case 'product':
        return null;
      default:
        return '';
    }
  };

  const calculateTotal = useMemo(() => {
    let runningTotal = basket.totalPrice;
    if (voucherCodeState.discounts.length) {
      const sortedDiscounts = [...voucherCodeState.discounts].sort((a, b) => {
        if (a.type === b.type) {
          return 0;
        } else if (b.type === 'product') {
          return 1;
        } else if (b.type === '£') {
          if (a.type === '%') {
            return 1;
          } else {
            return -1;
          }
        } else if (b.type === '%') {
          return -1;
        } else {
          return 0;
        }
      });
      sortedDiscounts.forEach(discount => {
        if (discount.type !== '%') {
          runningTotal += discount.value;
        } else {
          runningTotal += (discount.value / 100) * runningTotal;
        }
        if (runningTotal < 0) runningTotal = 0;
      });
    }
    if (deliveryDetails.isDelivery && basket.totalPrice < 60) {
      runningTotal += 5;
    }
    if (runningTotal > 0) {
      return '£' + runningTotal.toFixed(2).toString();
    } else {
      return '£0.00';
    }
  }, [
    basket.totalPrice,
    voucherCodeState.discounts,
    deliveryDetails.isDelivery
  ]);

  let basketDisplay = (
    <React.Fragment>
      <p>You do not currently have any items in your basket</p>
      <Link className={classes.Basket_Link} to='/'>
        Continue Shopping
      </Link>
    </React.Fragment>
  );
  if (basket && basket.basket && basket.basket.length) {
    basketDisplay = basket.basket.map(item => {
      return (
        <BasketProduct
          key={item.productSku + item.size}
          sku={item.productSku}
          size={item.size}
          qty={item.qty}
        />
      );
    });
  }

  let discountCodesDisplay = null;
  if (basketQty) {
    discountCodesDisplay = (
      <React.Fragment>
        <form className={classes.Basket_Voucher} onSubmit={discountCodeHandler}>
          <label htmlFor='voucher'>Voucher</label>
          <input
            type='text'
            id='voucher'
            placeholder='Enter a code'
            value={voucherCode}
            onChange={voucherCodeInputHandler}
          />
          <button>Apply</button>
        </form>
        {voucherCodeState.message ? (
          <div
            className={
              voucherCodeState.message.isAccepted
                ? classes.Basket_VoucherMessage_Accept
                : classes.Basket_VoucherMessage_Reject
            }
          >
            {voucherCodeState.message.msg}
          </div>
        ) : null}
      </React.Fragment>
    );
  }

  let codesDisplay = null;
  let discountsDisplay = null;
  if (voucherCodeState.codes.length) {
    codesDisplay = (
      <React.Fragment>
        {voucherCodeState.codes.map((code, index) => {
          return (
            <small key={code + index}>
              {!index ? <span>Voucher Codes</span> : null}
              <span style={{ minWidth: '8rem', display: 'inline-block' }}>
                "{code}"{' '}
                <span
                  className={classes.Basket_VoucherCode_Remove}
                  onClick={() => removeCodeHandler(code)}
                >
                  X
                </span>
              </span>
            </small>
          );
        })}
      </React.Fragment>
    );
    discountsDisplay = (
      <React.Fragment>
        {voucherCodeState.discounts.map((discount, index) => {
          return (
            <small key={'discount' + index}>
              {makeDiscountDisplay(discount)}
            </small>
          );
        })}
      </React.Fragment>
    );
  }

  let subTotalDisplay = null;
  if (basket.basket.length) {
    subTotalDisplay = (
      <React.Fragment>
        <hr className={classes.Basket_Line} />
        <div className={classes.Basket_BasketSubtotal}>
          <div className={classes.Basket_BasketText}>
            <p>Subtotal</p>
            {codesDisplay}
          </div>
          <div className={classes.Basket_BasketSubTotalPrice}>
            <p>£{basket.totalPrice}</p>
            {discountsDisplay}
          </div>
        </div>
      </React.Fragment>
    );
  }

  let deliveryInfoDisplay = (
    <div className={classes.Basket_DeliveryForm}>
      <h4>Delivery Address</h4>
      <p>This is what will be printed on your parcel.</p>
      <label htmlFor='name'>Name:</label>
      <input
        type='text'
        id='name'
        value={deliveryDetails.name}
        onChange={event => deliverDetailsInputHandler(event, 'name')}
      />
      {inputValidation.name
        ? inputValidation.name.map(msg => (
            <p key={'name' + msg} className={classes.Basket_InputValidation}>
              {msg}
            </p>
          ))
        : null}
      <label htmlFor='address'>Address:</label>
      <input
        type='text'
        id='address'
        value={deliveryDetails.address}
        onChange={event => deliverDetailsInputHandler(event, 'address')}
      />
      {inputValidation.address
        ? inputValidation.address.map(msg => (
            <p key={'address' + msg} className={classes.Basket_InputValidation}>
              {msg}
            </p>
          ))
        : null}
      <label htmlFor='city'>City/Town:</label>
      <input
        type='text'
        id='city'
        value={deliveryDetails.city}
        onChange={event => deliverDetailsInputHandler(event, 'city')}
      />
      {inputValidation.city
        ? inputValidation.city.map(msg => (
            <p key={'city' + msg} className={classes.Basket_InputValidation}>
              {msg}
            </p>
          ))
        : null}
      <label htmlFor='postcode'>Postcode:</label>
      <input
        type='text'
        id='postcode'
        value={deliveryDetails.postcode}
        onChange={event => deliverDetailsInputHandler(event, 'postcode')}
      />
      {inputValidation.postcode
        ? inputValidation.postcode.map(msg => (
            <p
              key={'postcode' + msg}
              className={classes.Basket_InputValidation}
            >
              {msg}
            </p>
          ))
        : null}
      <div className={classes.Basket_SaveAddress}>
        {user && user.email ? (
          <small>
            <label htmlFor='saveAddress'>
              {!user.savedAddress
                ? 'Save Address:'
                : 'Update address on Account:'}
            </label>
            <input
              type='checkbox'
              id='saveAddress'
              checked={saveAddress}
              onChange={saveAddressHandler}
            />
          </small>
        ) : (
          <small>Login/Register an Account to save a delivery Address</small>
        )}
      </div>
      <br />
      <h4>Contact Details</h4>
      <p>We'll use this to email you an order confirmation.</p>
      <label htmlFor='email'>Email:</label>
      <input
        type='email'
        id='email'
        value={deliveryDetails.email}
        onChange={event => deliverDetailsInputHandler(event, 'email')}
      />
      {inputValidation.email
        ? inputValidation.email.map(msg => (
            <p key={'email' + msg} className={classes.Basket_InputValidation}>
              {msg}
            </p>
          ))
        : null}
    </div>
  );
  let clickCollectDisplay = (
    <div className={classes.Basket_DeliveryForm}>
      <h4>Select a store</h4>
      <select onChange={storeSelectionHandler}>
        <option>Choose...</option>
        <option>Birmingham</option>
        <option>Glasgow</option>
        <option>Leeds</option>
        <option>Liverpool</option>
        <option>London</option>
        <option>Manchester</option>
        <option>Newcastle</option>
      </select>
      {inputValidation.name
        ? inputValidation.name.map(msg => (
            <p key={'name' + msg} className={classes.Basket_InputValidation}>
              {msg}
            </p>
          ))
        : null}
      {deliveryDetails.name !== '' ? (
        <div className={classes.Basket_DeliveryForm_StoreDetails}>
          <p>Selected Store:</p>
          <div className={classes.Basket_DeliveryForm_StoreDetailsAddress}>
            <p>{deliveryDetails.name},</p>
            <p>
              {deliveryDetails.address}, {deliveryDetails.city},{' '}
              {deliveryDetails.postcode}
            </p>
          </div>
        </div>
      ) : null}
      <br />
      <h4>Contact Details</h4>
      <p>We'll use this to email you an order confirmation.</p>
      <label htmlFor='email'>Email:</label>
      <input
        type='email'
        id='email'
        value={deliveryDetails.email}
        onChange={event => deliverDetailsInputHandler(event, 'email')}
      />
      {inputValidation.email
        ? inputValidation.email.map(msg => (
            <p key={'email' + msg} className={classes.Basket_InputValidation}>
              {msg}
            </p>
          ))
        : null}
    </div>
  );

  let deliveryDisplay = null;
  if (basket.basket.length) {
    deliveryDisplay = (
      <React.Fragment>
        <hr className={classes.Basket_Line} />
        <div className={classes.Basket_DeliveryTotal}>
          <div className={classes.Basket_DeliveryTotalText}>Delivery</div>
          <div className={classes.Basket_DeliveryTotalValue}>
            {basket.totalPrice < 60 && deliveryDetails.isDelivery
              ? '£5'
              : 'Free'}
          </div>
        </div>
        <div className={classes.Basket_Delivery}>
          <button
            className={
              deliveryDetails.isDelivery
                ? classes.Basket_Delivery_BtnActive
                : null
            }
            onClick={() => isDeliveryBtnHandler(true)}
          >
            Delivery
          </button>
          <button
            className={
              !deliveryDetails.isDelivery
                ? classes.Basket_Delivery_BtnActive
                : null
            }
            onClick={() => isDeliveryBtnHandler(false)}
          >
            Click &amp; Collect
          </button>
          <section>
            {deliveryDetails.isDelivery
              ? deliveryInfoDisplay
              : clickCollectDisplay}
          </section>
        </div>
      </React.Fragment>
    );
  }

  let totalDisplay = null;
  if (basket.basket.length) {
    totalDisplay = (
      <React.Fragment>
        <hr className={classes.Basket_Line} />
        <div className={classes.Basket_Total}>
          <p>Total</p>
          <span>{calculateTotal}</span>
        </div>
      </React.Fragment>
    );
  }

  return (
    <div
      className={classes.Basket}
      style={!basket.basket.length ? { margin: '6rem auto' } : null}
    >
      <div className={classes.Basket_Title}>
        <span>Shopping Basket</span> {' - ' + basketQty}
        {basketQty === 1 ? ' item' : ' items'}
        {basketQty ? (
          <button
            className={classes.Basket_ClearBtn}
            onClick={clearBasketHandler}
          >
            clear
          </button>
        ) : null}
      </div>
      <div className={classes.Basket_BasketDisplay}>{basketDisplay}</div>
      {discountCodesDisplay}
      {subTotalDisplay}
      {deliveryDisplay}
      {totalDisplay}
      {basket.basket.length ? (
        <button
          className={classes.Basket_ProceedToCheckoutBtn}
          onClick={proceedToCheckoutHandler}
        >
          Proceed to Checkout
        </button>
      ) : null}
    </div>
  );
};

export default Basket;
