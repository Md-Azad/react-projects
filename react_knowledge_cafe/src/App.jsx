import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmark from "./components/Bookmark/Bookmark";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [title, setTitle] = useState([]);
  const handleAddToBookmark = (blogTitle) => {
    setTitle([...title, blogTitle]);
  };
  return (
    <div className=" w-11/12 mx-auto">
      <Navbar></Navbar>
      <div className="md:flex gap-5">
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmark title={title}></Bookmark>
      </div>
    </div>
  );
}

export default App;
