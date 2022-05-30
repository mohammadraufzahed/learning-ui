import Head from "next/head";
import { FaMoneyBillAlt } from "react-icons/fa";
import CategoriesProduct from "../components/CategoriesProduct";
import Features from "../components/Features";
import Header from "../components/Header";
import ResourcesBox from "../components/ResourcesBox";
import SpecialSellsBox from "../components/SpecialSellsBox";
import TopStoresBox from "../components/TopStoresBox";

const fakeData = {
  badges: [
    {
      name: "گارانتی بازگشت پول",
      icon: FaMoneyBillAlt,
    },
    {
      name: "گارانتی بازگشت پول",
      icon: FaMoneyBillAlt,
    },
    {
      name: "گارانتی بازگشت پول",
      icon: FaMoneyBillAlt,
    },
    {
      name: "گارانتی بازگشت پول",
      icon: FaMoneyBillAlt,
    },
  ],
};

export default function Home() {
  return (
    <div className="min-h-[100vh] w-full font-iranYekan">
      <Head>
        <title>سامانه خرید و فروش</title>
      </Head>
      <Header />
      <Features />
      <SpecialSellsBox />
      <TopStoresBox />
      <div className="bg-gray-200 w-full px-1 py-2 md:px-9 md:py-4 text-center flex flex-col gap-16 h-[50vh] items-center justify-center ">
        <span className="font-extrabold text-4xl drop-shadow-2xl">
          آماده پیوستن به ما هستی؟
        </span>
        <button className="w-[60%] bg-purple-500 transition-colors duration-300 font-bold text-2xl text-white py-4 hover:bg-purple-700">
          ایجاد فروشگاه رایگان
        </button>
      </div>
      <CategoriesProduct />
      <ResourcesBox />
      <div className="transition-all duration-300 grid grid-cols-1 gap-y-5 mb-10 w-full px-1 py-2 sm:grid-cols-2 md:grid-cols-3 md:px-9 md:py-4 lg:grid-cols-4 lg:gap-x-10">
        {fakeData.badges.map((item, key) => (
          <div
            key={key}
            className="flex w-[50vw] py-5 mx-auto flex-col justify-center items-center gap-2 shadow-xl shadow-purple-400 sm:w-max sm:px-16 sm:py-5 lg:px-10 lg:py-7"
          >
            <item.icon className="text-purple-400 text-6xl" />
            <span className="font-bold text-lg">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
