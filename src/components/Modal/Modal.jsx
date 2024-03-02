import { useNavigate } from "react-router-dom";
import styles from "./Modal.module.css";

export const Modal = ({ children }) => {
  const navigate = useNavigate();

  const handleCloseModal = () => {
    navigate("/", { replace: true });
  };

  return (
    <>
      <div className={styles.backdrop} onClick={handleCloseModal} />
      <dialog open className={styles.modal}>
        {children}
      </dialog>
    </>
  );
};
