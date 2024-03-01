import styles from "./Post.module.css";

export const Post = ({ item }) => {
  return (
    <div className={styles.post}>
      <p className={styles.author}>{item.title}</p>
      <p className={styles.text}>{item.text}</p>
    </div>
  );
};
