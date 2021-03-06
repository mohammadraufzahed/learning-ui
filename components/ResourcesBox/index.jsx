import { FaRegNewspaper } from "react-icons/fa";
import classes from "./style/index.module.scss";

const fakeData = [
  {
    name: "پوستر کلاس درس",
    icon: FaRegNewspaper,
  },
  {
    name: "پوستر کلاس درس",
    icon: FaRegNewspaper,
  },
  {
    name: "پوستر کلاس درس",
    icon: FaRegNewspaper,
  },
  {
    name: "پوستر کلاس درس",
    icon: FaRegNewspaper,
  },
  {
    name: "پوستر کلاس درس",
    icon: FaRegNewspaper,
  },
  {
    name: "پوستر کلاس درس",
    icon: FaRegNewspaper,
  },
  {
    name: "پوستر کلاس درس",
    icon: FaRegNewspaper,
  },
  {
    name: "پوستر کلاس درس",
    icon: FaRegNewspaper,
  },
  {
    name: "پوستر کلاس درس",
    icon: FaRegNewspaper,
  },
  {
    name: "پوستر کلاس درس",
    icon: FaRegNewspaper,
  },
  {
    name: "پوستر کلاس درس",
    icon: FaRegNewspaper,
  },
  {
    name: "پوستر کلاس درس",
    icon: FaRegNewspaper,
  },
];

const ResourcesBox = () => {
  return (
    <div className="w-full px-1 py-2 md:px-9 md:py-4">
      <div className="grid grid-cols-1 w-max place-items-center text-center justify-center bg-gray-300 mx-auto px-4 py-2 rounded-xl text-gray-500 text-sm font-extrabold md:grid-cols-3">
        <span className="ml-4">دسته بندی بر اساس پایه تحصیلی</span>
        <div className=" w-full h-[2px] my-2 bg-gray-100 md:hidden" />
        <span className="md:border-x-2 border-gray-200 px-4">
          دسته بندی بر اساس موضوع
        </span>
        <div className=" w-full h-[2px] my-2 bg-gray-100 md:hidden" />
        <span className="text-purple-400 mr-6 after:w-full after:h-[2px] after:bg-purple-400 after:block after:mt-1">
          بهترین منابع
        </span>
      </div>
      <div className="w-full my-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
        {fakeData.map((item, key) => (
          <ResourceItem key={key} item={item} />
        ))}
      </div>
    </div>
  );
};

const ResourceItem = ({ item }) => {
  return (
    <div className="flex flex-row gap-4 items-center bg-gray-100 px-7 py-4 rounded-lg cursor-pointer transition-colors duration-300 hover:text-purple-400 hover:bg-white">
      <span className="font-extrabold text-xl">{item.name}</span>
      <item.icon className="text-7xl text-purple-400 ml-5" />
    </div>
  );
};

export default ResourcesBox;
