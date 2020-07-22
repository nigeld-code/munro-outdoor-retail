import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';

import { showModal } from '../../../store/actions/';

import Overlay from '../Overlay/Overlay';
import Logo from '../Logo/Logo';
import BasketProduct from '../../BasketProduct/BasketProduct';

import classes from './Modal.module.scss';

const Modal = () => {
  const modalContents = useSelector(state => state.config.modal);
  const basket = useSelector(state => state.basket);

  const dispatch = useDispatch();

  const history = useHistory();

  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(showModal(null));
  }, [pathname, dispatch]);

  let modalDisplay = null;
  if (modalContents) {
    modalDisplay = (
      <React.Fragment>
        <Overlay
          showOverlay={modalContents}
          clicked={() => dispatch(showModal(null))}
        />
        <div className={classes.Modal}>
          <div
            className={classes.Modal_CloseBtn}
            onClick={() => dispatch(showModal(null))}
          >
            X
          </div>
          <div style={{ textAlign: 'center', margin: '0.5rem' }}>
            <Logo className={classes.Modal_Logo} />
          </div>
          <div className={classes.Modal_Main}>
            {modalContents.title ? <h2>{modalContents.title}</h2> : null}
            {modalContents.main
              ? modalContents.main.map((item, itemIndex) => {
                  return (
                    <div key={itemIndex + 'item'}>
                      {item.text ? <p>{item.text}</p> : null}
                      {item.points ? (
                        <ul>
                          {item.points.map((point, pointIndex) => (
                            <li key={pointIndex + 'point' + itemIndex}>
                              {point}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      {item.hr ? <hr /> : null}
                      {item.basket ? (
                        <div>
                          {basket.basket.map(item => {
                            return (
                              <BasketProduct
                                key={item.productSku + item.size}
                                sku={item.productSku}
                                size={item.size}
                                qty={item.qty}
                                isModal
                              />
                            );
                          })}
                          <hr />
                          <div className={classes.Modal_BasketSubtotal}>
                            <div className={classes.Modal_BasketText}>
                              <p>Subtotal</p>
                              <small>{'(excluding delivery & discounts)'}</small>
                            </div>
                            <div className={classes.Modal_BasketTotalPrice}>
                              £{basket.totalPrice}
                            </div>
                          </div>
                          <div className={classes.Modal_BasketButtons}>
                            <button onClick={() => dispatch(showModal(null))}>
                              Continue Shopping
                            </button>
                            <button onClick={() => history.push('/basket')}>
                              Checkout
                            </button>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </React.Fragment>
    );
  }

  return modalDisplay;
};

export default Modal;
