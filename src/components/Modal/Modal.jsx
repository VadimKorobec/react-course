import styles from "./Modal.module.css";

export const Modal = ({ children }) => {
  return (
    <>
      <div className={styles.backdrop} />
      <dialog open={true} className={styles.modal}>
        {children}
      </dialog>
    </>
  );
};
