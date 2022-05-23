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
        <div className="flex flex-row items-center gap-16">
          <Link href="#" passHref>
            <button className="bg-purple-400 text-white px-4 py-2 transition-all duration-300 rounded-lg sm:text-xs hover:bg-purple-500">
              ایجاد فروشگاه رایگان
            </button>
          </Link>
          <ul className="list-none flex flex-row gap-16 cursor-pointer">
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
