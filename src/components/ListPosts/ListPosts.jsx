import { useState } from "react";

import { Post } from "../Post/Post";
import { Modal } from "../Modal/Modal";
import { NewPost } from "../NewPost/NewPost";

import styles from "./ListPosts.module.css";

export const ListPosts = ({ isPosting, onStopPosting }) => {
  const [posts, setPosts] = useState([]);
  console.log(posts);

  const handleCreateNewPost = (postData) => {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((prevState) => [...prevState, postData]);
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
      {posts.length > 0 ? (
        <ul className={styles.posts}>
          {posts.map((item, idx) => (
            <li key={idx}>
              <Post item={item} />
            </li>
          ))}
        </ul>
      ) : (
        <h2>Sorry, your post list is empty(</h2>
      )}
    </>
  );
};
