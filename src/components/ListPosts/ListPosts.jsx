import { useEffect, useState } from "react";

import { Post } from "../Post/Post";
import { Modal } from "../Modal/Modal";
import { NewPost } from "../NewPost/NewPost";

import styles from "./ListPosts.module.css";

export const ListPosts = ({ isPosting, onStopPosting }) => {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetscPosts = async () => {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      setPosts(resData.posts);
      setIsFetching(false);
    };
    fetscPosts();
  }, []);

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
      {!isFetching && posts.length > 0 ? (
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
