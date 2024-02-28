import styles from "./Post.module.css";

export const Post = (props) => {
  return (
    <li className={styles.post}>
      <p className={styles.author}>{props.name}</p>
      <p className={styles.text}>{props.title}</p>
    </li>
  );
};
