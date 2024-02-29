import { Post } from "../Post/Post";
import { NewPost } from "../NewPost/NewPost";
import styles from "./ListPosts.module.css";

export const ListPosts = () => {
  return (
    <>
      <NewPost />
      <ul className={styles.posts}>
        <Post name="React" title="React is awesome!" />
        <Post name="NextJS" title="NextJS is great!" />
      </ul>
    </>
  );
};
