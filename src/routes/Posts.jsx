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
