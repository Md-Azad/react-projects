import PropTypes from "prop-types";
const Reading = ({ readingTime }) => {
  return (
    <div className="bg-slate-400 m-4 rounded-lg h-auto p-2">
      <h1 className="text-2xl font-bold p-2">
        Total Reading time: {readingTime}
      </h1>
    </div>
  );
};
Reading.propTypes = {
  readingTime: PropTypes.number,
};
export default Reading;
