import { useState } from "react";
import styles from "./NewPost.module.css";

export const NewPost = ({ onCancel, onCreatePost }) => {
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
    onCancel();
  };

  return (
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
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Sabmit</button>
      </p>
    </form>
  );
};
