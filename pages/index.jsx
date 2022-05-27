import Head from "next/head";
import CategoriesProduct from "../components/CategoriesProduct";
import Features from "../components/Features";
import Header from "../components/Header";
import SpecialSellsBox from "../components/SpecialSellsBox";
import TopStoresBox from "../components/TopStoresBox";

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
    </div>
  );
}
