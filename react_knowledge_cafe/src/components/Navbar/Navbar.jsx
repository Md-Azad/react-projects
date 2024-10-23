import profile from "../../assets/images/profile.png";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4">
      <h1 className="font-bold text-4xl">Knowledge cafe</h1>
      <img src={profile} alt="" />
    </div>
  );
};

export default Navbar;
