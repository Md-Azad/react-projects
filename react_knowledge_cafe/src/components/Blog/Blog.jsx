import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog, handleAddToBookmark, handleReadingTime }) => {
  const {
    cover,
    title,
    author_img,
    reading_time,
    author,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="mb-4">
      <img
        className="w-full rounded-lg"
        src={cover}
        alt={`cover image of ${title}`}
      />
      <section className="flex justify-between my-4">
        <div className="flex">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h2 className="text-2xl">{author}</h2>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p>{reading_time} min read </p>

          <FaBookmark onClick={handleAddToBookmark} className="text-red-500" />
        </div>
      </section>

      <h1 className="text-4xl font-bold">{title}</h1>
      <p>
        {hashtags.map((tag, idx) => (
          <span key={idx} className="mr-2 my-2">
            {" "}
            #{tag}
          </span>
        ))}
      </p>
      <button
        onClick={() => handleReadingTime(reading_time)}
        className=" btn text-purple-800 font-bold underline"
      >
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleReadingTime: PropTypes.func,
  reading_time: PropTypes.func,
};

export default Blog;
