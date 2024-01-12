import { useState } from "react";
import Posts from "./components/Posts/Posts";
import { post } from "../data/postsData";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [posts, serPosts] = useState(post);


  return (
    <>
      <Navbar />
      <Posts posts={posts} />
    </>
  );
}

export default App;
