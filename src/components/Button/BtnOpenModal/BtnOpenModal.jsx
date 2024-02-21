// import { useState } from 'react';

import css from './BtnOpenModal.module.css';

const BtnOpenModal = ({ onOpen }) => {
  return (
    <>
      <button className={css.button} type="button" onClick={() => onOpen()}>
        Add trip
      </button>
    </>
  );
};

export default BtnOpenModal;
