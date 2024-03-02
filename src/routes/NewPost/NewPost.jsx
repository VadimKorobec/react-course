import styles from "./NewPost.module.css";
import { Modal } from "../../components/Modal/Modal";
import { Form, Link, redirect } from "react-router-dom";

export const NewPost = () => {
  return (
    <Modal>
      <Form method="post" className={styles.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="text" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="title" required />
        </p>
        <p className={styles.actions}>
          <Link to="/" type="button">
            Cancel
          </Link>
          <button type="submit">Sabmit</button>
        </p>
      </Form>
    </Modal>
  );
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return redirect("/");
};
