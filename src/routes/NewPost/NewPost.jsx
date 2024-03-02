import { useState } from "react";
import styles from "./NewPost.module.css";
import { Modal } from "../../components/Modal/Modal";
import { Link } from "react-router-dom";

export const NewPost = ({ onCreatePost }) => {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      text,
      title,
    };
    onCreatePost(postData);
  };

  return (
    <Modal>
      <form className={styles.form} onSubmit={handleSubmit}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={handleChangeText} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required onChange={handleChangeTitle} />
        </p>
        <p className={styles.actions}>
          <Link to="/" type="button">
            Cancel
          </Link>
          <button type="submit">Sabmit</button>
        </p>
      </form>
    </Modal>
  );
};
