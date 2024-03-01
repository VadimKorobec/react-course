import { useState } from "react";

import { Post } from "../Post/Post";
import { Modal } from "../Modal/Modal";
import { NewPost } from "../NewPost/NewPost";

import styles from "./ListPosts.module.css";

export const ListPosts = ({ isPosting, onStopPosting }) => {
  const [posts, setPosts] = useState([]);

  const handleCreateNewPost = (text, title) => {
    setPosts((prevState) => [...prevState, { text, title }]);
  };

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onCancel={onStopPosting}
            onCreatePost={handleCreateNewPost}
          />
        </Modal>
      )}
      <ul className={styles.posts}>
        {posts.map((item, idx) => (
          <li key={idx}>
            <Post item={item} />
          </li>
        ))}
      </ul>
    </>
  );
};
