import styles from "./NewPost.module.css";

export const NewPost = ({ onTextChange, onChangeTitle }) => {
  return (
    <form className={styles.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onTextChange} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={onChangeTitle} />
      </p>
    </form>
  );
};
