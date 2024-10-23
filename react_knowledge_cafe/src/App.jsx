import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmark from "./components/Bookmark/Bookmark";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [title, setTitle] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleAddToBookmark = (blogTitle) => {
    setTitle([...title, blogTitle]);
  };

  const handleReadingTime = (time) => {
    setReadingTime(readingTime + time);
  };

  return (
    <div className=" w-11/12 mx-auto">
      <Navbar></Navbar>
      <div className="md:flex gap-5">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleReadingTime={handleReadingTime}
        ></Blogs>
        <Bookmark title={title} readingTime={readingTime}></Bookmark>
      </div>
    </div>
  );
}

export default App;
