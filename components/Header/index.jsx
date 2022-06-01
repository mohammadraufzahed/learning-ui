import Navbar from "../Navbar";
import Menu from "../Menu";
import classes from "./style/index.module.scss";
import Hero from "../Hero";

const Header = () => {
  return (
    <div className="w-full h-max bg-gray-100 px-1 py-2 md:px-9 md:py-4 rounded-b-4xl flex flex-col justify-center items-center">
      <Navbar />
      <Menu />
      <Hero />
    </div>
  );
};

export default Header;
