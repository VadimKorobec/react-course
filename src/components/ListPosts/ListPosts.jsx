import { useLoaderData } from "react-router-dom";

import { Post } from "../Post/Post";

import styles from "./ListPosts.module.css";

export const ListPosts = () => {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 ? (
        <ul className={styles.posts}>
          {posts.map((item) => (
            <li key={item.id}>
              <Post item={item} />
            </li>
          ))}
        </ul>
      ) : (
        <h1>Loading post ...</h1>
      )}
    </>
  );
};
