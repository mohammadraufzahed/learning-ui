import Image from "next/image";
import { FaShareAlt } from "react-icons/fa";
import { GiCartwheel } from "react-icons/gi";
import Stars from "../Stars";
import classes from "./style/index.module.scss";
const fakeData = [
  {
    name: "نام محصول",
    picture: "/svg/public-store.svg",
    storeName: "نام فروشگاه",
    type: "نوع فایل",
    category: "دسته بندی",
    resource: "منابع",
    level: "مناسب برای پایه",
    price: 1200000,
    rate: 4,
  },
  {
    name: "نام محصول",
    picture: "/svg/public-store.svg",
    storeName: "نام فروشگاه",
    type: "نوع فایل",
    category: "دسته بندی",
    resource: "منابع",
    level: "مناسب برای پایه",
    price: 1200000,
    rate: 4,
  },
  {
    name: "نام محصول",
    picture: "/svg/public-store.svg",
    storeName: "نام فروشگاه",
    type: "نوع فایل",
    category: "دسته بندی",
    resource: "منابع",
    level: "مناسب برای پایه",
    price: 1200000,
    rate: 4,
  },
  {
    name: "نام محصول",
    picture: "/svg/public-store.svg",
    storeName: "نام فروشگاه",
    type: "نوع فایل",
    category: "دسته بندی",
    resource: "منابع",
    level: "مناسب برای پایه",
    price: 1200000,
    rate: 4,
  },
];

const ProductsPrize = () => {
  return (
    <div className="w-full px-1 py-2 md:px-9 md:py-4 mt-14">
      <div className="flex flex-row-reverse justify-center gap-6 font-bold bg-gray-300 w-max mx-auto px-4 py-2 rounded-xl text-gray-500">
        <span className="text-purple-400 after:w-full after:h-[2px] after:bg-purple-400 after:block after:mt-1">
          محصولات قرعه کشی
        </span>
        <span className="border-r-2 border-gray-200 px-4">
          محصولات با تخفیف ویژه
        </span>
      </div>
      <div className="w-full my-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
        {fakeData.map((item, key) => (
          <ProductsPrizeItem key={key} item={item} />
        ))}
      </div>
    </div>
  );
};

const ProductsPrizeItem = ({ item }) => {
  return (
    <div className="flex flex-col text-right shadow-md shadow-purple-400 rounded-xl pb-6">
      <Image src={item.picture} width={393} height={269} alt={item.name} />
      <div className="flex flex-col gap-5 text-gray-600 font-bold pr-4">
        <span className="mt-5">{item.name}</span>
        <span>{item.storeName}</span>
      </div>
      <div className="grid grid-cols-2 text-center gap-y-5 mt-6">
        <span>{item.category}</span>
        <span className="text-purple-400">{item.type}</span>
        <span>{item.resource}</span>
        <span>{item.level}</span>
      </div>
      <hr className="my-5" />
      <div className="w-full grid grid-cols-2 px-4 gap-y-5 justify-center auto-cols-max auto-rows-max">
        <GiCartwheel className="text-purple-400 text-2xl" />
        <span className="place-self-end">{item.price} تومان</span>
        <Stars stars={item.rate} />
        <FaShareAlt className="text-purple-400 text-xl place-self-end" />
      </div>
    </div>
  );
};

export default ProductsPrize;
