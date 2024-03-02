import { Link } from "react-router-dom";

import styles from "./Post.module.css";

export const Post = ({ item }) => {
  return (
    <div className={styles.post}>
      <Link to={item.id}>
        <p className={styles.author}>{item.title}</p>
        <p className={styles.text}>{item.text}</p>
      </Link>
    </div>
  );
};
