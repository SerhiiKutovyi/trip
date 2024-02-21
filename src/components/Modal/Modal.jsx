import css from './Modal.module.css';

const Modal = ({ onClose, isOpen }) => {
  const onWrapperClose = event => {
    if (event.target.classList.contains(css.modalWrapper)) onClose();
  };

  return (
    <>
      {isOpen && (
        <div className={css.modal}>
          <div className={css.modalWrapper} onClick={onWrapperClose}>
            <form className={css.modalContent}>
              <h2 className={css.modalTitle}>Create trip</h2>
              <button
                className={css.modalClosed}
                type="button"
                onClick={() => onClose()}
              >
                X
              </button>
              <input className={css.modalInput} type="text" name="City"></input>
              <input
                className={css.modalInput}
                type="text"
                name="StartDate"
              ></input>
              <input
                className={css.modalInput}
                type="text"
                name="EndDate"
              ></input>
              <button
                className={css.modalCancel}
                type="button"
                onClick={() => onClose()}
              >
                Cancel
              </button>
              <button className={css.modalSave}>Save</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
