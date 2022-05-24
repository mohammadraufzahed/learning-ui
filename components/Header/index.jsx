import Navbar from "../Navbar";
import Menu from "../Menu";
import classes from "./style/index.module.scss";

const Header = () => {
  return (
    <div className="w-full h-screen bg-gray-100 px-9 py-4">
      <Navbar />
      <Menu />
    </div>
  );
};

export default Header;
