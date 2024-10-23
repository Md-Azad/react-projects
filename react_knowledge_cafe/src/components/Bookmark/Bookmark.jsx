import PropTypes from "prop-types";
import SingleBookMark from "../SingleBookMark/SingleBookMark";
const Bookmark = ({ title }) => {
  console.log(title);
  return (
    <div className="w-1/3 bg-gray-300 rounded-lg">
      <h1 className="text-3xl text-center">Bookmark : {title.length}</h1>

      {title.length ? (
        title.map((st, id) => (
          <SingleBookMark key={id} st={st}></SingleBookMark>
        ))
      ) : (
        <SingleBookMark st="No Data Available"></SingleBookMark>
      )}
    </div>
  );
};

Bookmark.propTypes = {
  title: PropTypes.array,
};
export default Bookmark;
