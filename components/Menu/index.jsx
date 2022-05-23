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
      <ul className="flex flex-row w-full justify-between bg-white rounded-xl px-16 py-4 my-4">
        <li className="flex flex-row gap-3 items-center cursor-pointer">
          وبلاگ <FaBookOpen className="text-purple-400 text-lg" />
        </li>
        <li className="flex flex-row gap-3 items-center cursor-pointer">
          فروش ویژه سایت <FaPercentage className="text-purple-400 text-lg" />
        </li>
        <li className="flex flex-row gap-3 items-center cursor-pointer">
          لیست فروشگاه ها <FaShoppingCart className="text-purple-400 text-lg" />
        </li>
        <li className="flex flex-row gap-3 items-center cursor-pointer">
          منابع سایت <FaBook className="text-purple-400 text-lg" />
        </li>
        <li className="flex flex-row gap-3 items-center cursor-pointer">
          صفحه اصلی <FaHome className="text-purple-400 text-lg" />
        </li>
      </ul>
    </div>
  );
};

export default Menu;
