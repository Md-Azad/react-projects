import PropTypes from "prop-types";
const Blog = ({ blog }) => {
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
    <div>
      <img src={cover} alt={`cover image of ${title}`} />
      <section className="flex justify-between">
        <div className="flex">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h2 className="text-2xl">{author}</h2>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <p>{reading_time} min read</p>
        </div>
      </section>

      <h1 className="text-4xl font-bold">{title}</h1>
      <p>
        {hashtags.map((tag, idx) => (
          <span key={idx} className="mx-2 my-2">
            {" "}
            #{tag}
          </span>
        ))}
      </p>
      <button className="btn">Mark as read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
