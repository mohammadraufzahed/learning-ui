import classes from "./style/index.module.scss";
import {
  FaBook,
  FaHome,
  FaShoppingCart,
  FaPercentage,
  FaBookOpen,
} from "react-icons/fa";

const Menu = () => {
  return (
    <div className="container w-full mt-32 lg:mt-0">
      <ul className="grid grid-cols-3 place-items-center gap-y-5 w-full justify-between bg-white rounded-xl px-3 py-5 my-4 md:px-16 md:py-4 md:grid-cols-5">
        <li className="flex flex-row items-center cursor-pointer text-xs">
          وبلاگ <FaBookOpen className="text-purple-400 text-xl mx-2" />
        </li>
        <li className="flex flex-row items-center cursor-pointer text-xs">
          فروش ویژه سایت
          <FaPercentage className="text-purple-400 text-lg mx-2" />
        </li>
        <li className="flex flex-row items-center cursor-pointer text-xs">
          لیست فروشگاه ها{" "}
          <FaShoppingCart className="text-purple-400 text-lg mx-2" />
        </li>
        <li className="flex flex-row items-center cursor-pointer text-xs">
          منابع سایت <FaBook className="text-purple-400 text-lg mx-2" />
        </li>
        <li className="flex flex-row items-center cursor-pointer text-xs">
          صفحه اصلی <FaHome className="text-purple-400 text-lg mx-2" />
        </li>
      </ul>
    </div>
  );
};

export default Menu;
