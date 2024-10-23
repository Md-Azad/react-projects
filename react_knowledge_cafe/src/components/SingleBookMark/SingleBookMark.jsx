import PropTypes from "prop-types";
const SingleBookMark = ({ st }) => {
  return (
    <div className="bg-slate-400 m-4 rounded-lg h-auto p-2">
      <h1 className="text-2xl font-bold p-2">{st}</h1>
    </div>
  );
};

SingleBookMark.propTypes = {
  st: PropTypes.string,
};

export default SingleBookMark;
