import { useState } from 'react';

import css from './BtnOpenModal.module.css';

const BtnOpenModal = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <button className={css.button} onClick={openModal}>
        Add trip
      </button>
      {modal && <button onClick={closeModal}>Add trip</button>}
    </>
  );
};

export default BtnOpenModal;
