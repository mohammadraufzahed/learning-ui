import Image from "next/image";
import Link from "next/link";
import classes from "./style/index.module.scss";
import { FaSearch, FaArrowCircleRight, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="container w-full h-max">
      <nav className="flex lg:flex-row-reverse flex-col justify-between items-center h-16">
        <div className={classes.no_line_height}>
          <Link href="/" passHref>
            <Image src="/svg/logo.svg" width={80} height={80} alt="Logo" />
          </Link>
        </div>
        <div className="grid grid-cols-1 mt-4 items-center gap-y-6 gap-x-7 md:grid-cols-2 ">
          <Link href="#" passHref>
            <button className="bg-purple-400 text-white transition-all duration-300 rounded-lg text-xs  px-1 py-2 md:px-4 md:py-2 md:text-lg hover:bg-purple-500">
              ایجاد فروشگاه رایگان
            </button>
          </Link>
          <ul className="grid grid-cols-3 w-full gap-x-6 place-items-center cursor-pointer">
            <li className="flex flex-row gap-4 items-center duration-300 opacity-80 hover:opacity-100">
              ثبت نام <FaUser className="text-purple-400" />
            </li>
            <li className="flex flex-row gap-4 items-center cursor-pointer duration-300 opacity-80 hover:opacity-100">
              ورود <FaArrowCircleRight className="text-purple-400" />
            </li>
            <li className="flex flex-row gap-4 items-center cursor-pointer duration-300 opacity-80 hover:opacity-100">
              جستجو <FaSearch className="text-purple-400" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
