import Navbar from "../Navbar";
import Menu from "../Menu";
import classes from "./style/index.module.scss";

const Header = () => {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <Menu />
    </div>
  );
};

export default Header;
