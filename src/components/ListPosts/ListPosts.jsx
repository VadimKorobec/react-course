import { useState } from "react";

import { Post } from "../Post/Post";
import { Modal } from "../Modal/Modal";
import { NewPost } from "../NewPost/NewPost";

import styles from "./ListPosts.module.css";

export const ListPosts = () => {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <Modal>
        <NewPost
          onTextChange={handleChangeText}
          onChangeTitle={handleChangeTitle}
        />
      </Modal>
      <ul className={styles.posts}>
        <Post name={title} text={text} />
        <Post name="NextJS" text="NextJS is great!" />
      </ul>
    </>
  );
};
