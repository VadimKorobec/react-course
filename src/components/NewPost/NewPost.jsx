import { useState } from "react";
import styles from "./NewPost.module.css";

export const NewPost = () => {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  const handleChangeTexterea = (e) => {
    setText(e.target.value);
  };

  const handleChangeInput = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text, title);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={handleChangeTexterea} />
      </p>
      <p>{text}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={handleChangeInput} />
      </p>
    </form>
  );
};
