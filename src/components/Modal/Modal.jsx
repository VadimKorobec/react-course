import styles from "./Modal.module.css";

export const Modal = ({ children, onClick }) => {
  return (
    <>
      <div className={styles.backdrop} onClick={onClick} />
      <dialog open className={styles.modal}>
        {children}
      </dialog>
    </>
  );
};
