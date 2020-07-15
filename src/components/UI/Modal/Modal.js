import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { showModal } from '../../../store/actions/';

import Overlay from '../Overlay/Overlay';

const Modal = () => {
  const modalContents = useSelector(state => state.config.modal);

  const dispatch = useDispatch();

  let modalDisplay = null;
  if (modalContents) {
    modalDisplay = (
      <div>
        <Overlay
          showOverlay={modalContents}
          clicked={() => dispatch(showModal(null))}
        />
        {modalContents}
      </div>
    );
  }

  return modalDisplay;
};

export default Modal;
