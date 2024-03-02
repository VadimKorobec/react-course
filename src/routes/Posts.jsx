import { Outlet } from "react-router-dom";

import { ListPosts } from "../components/ListPosts/ListPosts";

export const Posts = () => {
  return (
    <>
      <Outlet />
      <main>
        <ListPosts />
      </main>
    </>
  );
};

export const loader = async () => {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();
  return resData.posts;
};
