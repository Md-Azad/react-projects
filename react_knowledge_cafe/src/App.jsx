import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmark from "./components/Bookmark/Bookmark";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className=" w-11/12 mx-auto">
      <Navbar></Navbar>
      <div className="md:flex">
        <Blogs></Blogs>
        <Bookmark></Bookmark>
      </div>
    </div>
  );
}

export default App;
