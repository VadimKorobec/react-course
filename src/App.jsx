import { useState } from "react";

import { ListPosts } from "./components/ListPosts/ListPosts";
import { MainHeader } from "./components/MainHeader/MainHeader";

export const App = () => {
  const [visibleModal, setVisibleModal] = useState(false);

  const handleShowModal = () => {
    setVisibleModal(true);
  };

  const handleVisibleModal = () => {
    setVisibleModal(false);
  };

  return (
    <>
      <MainHeader onCreatePost={handleShowModal} />
      <main>
        <ListPosts
          isPosting={visibleModal}
          onStopPosting={handleVisibleModal}
        />
      </main>
    </>
  );
};
