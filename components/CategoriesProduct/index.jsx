import { FaBoxOpen, FaMedal, FaTrophy } from "react-icons/fa";
import { GiCartwheel } from "react-icons/gi";
import Box from "../Box";
import classes from "./style/index.module.scss";

const fakeData = [
  {
    name: "بهترین فروشنده ها",
    icon: FaTrophy,
  },
  {
    name: "قرعه کشی ها",
    icon: GiCartwheel,
  },
  {
    name: "پرفروش ترین محصولات",
    icon: FaMedal,
  },
  {
    name: "محبوب ترین محصولات رایگان",
    icon: FaBoxOpen,
  },
];

const CategoriesProduct = () => {
  return (
    <Box
      title="دسترسی محصولات بر اساس"
      className="w-full mt-10 px-1 py-2 md:px-9 md:py-4"
    >
      <div className="grid justify-between w-full grid-cols-2 gap-y-16 mt-10 lg:grid-cols-4">
        {fakeData.map((item, key) => (
          <CategoriesItem item={item} key={key} />
        ))}
      </div>
    </Box>
  );
};

const CategoriesItem = ({ item }) => {
  return (
    <div className="flex flex-col items-center gap-3  drop-shadow-2xl">
      {<item.icon className="text-purple-500 text-6xl" />}
      <span className="text-gray-700 font-bold">{item.name}</span>
    </div>
  );
};

export default CategoriesProduct;
