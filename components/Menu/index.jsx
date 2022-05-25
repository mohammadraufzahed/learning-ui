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
    <div className="container w-full mt-20 lg:mt-0">
      <ul className="flex flex-row w-full justify-between bg-white rounded-xl px-3 py-1 my-4 md:px-16 md:py-4">
        <li className="flex flex-row gap-3 items-center cursor-pointer text-sm">
          وبلاگ <FaBookOpen className="text-purple-400 text-lg" />
        </li>
        <li className="flex flex-row gap-3 items-center cursor-pointer text-sm">
          فروش ویژه سایت <FaPercentage className="text-purple-400 text-lg" />
        </li>
        <li className="flex flex-row gap-3 items-center cursor-pointer text-sm">
          لیست فروشگاه ها <FaShoppingCart className="text-purple-400 text-lg" />
        </li>
        <li className="flex flex-row gap-3 items-center cursor-pointer text-sm">
          منابع سایت <FaBook className="text-purple-400 text-lg" />
        </li>
        <li className="flex flex-row gap-3 items-center cursor-pointer text-sm">
          صفحه اصلی <FaHome className="text-purple-400 text-lg" />
        </li>
      </ul>
    </div>
  );
};

export default Menu;
