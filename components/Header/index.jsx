import Navbar from "../Navbar";
import Menu from "../Menu";
import classes from "./style/index.module.scss";
import Hero from "../Hero";

const Header = () => {
  return (
    <div className="w-full h-max bg-gray-100 px-9 py-4">
      <Navbar />
      <Menu />
      <Hero />
    </div>
  );
};

export default Header;
