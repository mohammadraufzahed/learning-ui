import Head from "next/head";
import { FaMoneyBillAlt } from "react-icons/fa";
import AnnouncementBox from "../components/AnnouncementBox";
import CategoriesProduct from "../components/CategoriesProduct";
import Features from "../components/Features";
import Header from "../components/Header";
import ResourcesBox from "../components/ResourcesBox";
import SpecialSellsBox from "../components/SpecialSellsBox";
import TopStoresBox from "../components/TopStoresBox";
import ProductsPrize from "../components/ProductsPrize";
import Box from "../components/Box";
import BlogPostsBox from "../components/BlogPostsBox";
import CustomersReview from "../components/CustomersReview";
import Footer from "../components/Footer";

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
      <AnnouncementBox
        title="اماده پیوستن به ما هستی؟"
        button="ایجاد فروشگاه رایگان"
      />
      <CategoriesProduct />
      <ResourcesBox />
      <div className="px-1 py-2 md:px-9 md:py-4">
        <hr className="w-full mb-16" />
        <div className="transition-all duration-300 grid grid-cols-1 gap-y-5 mb-10 w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-10">
          {fakeData.badges.map((item, key) => (
            <div
              key={key}
              className="flex w-full py-5 mx-auto flex-col justify-center items-center gap-2 shadow-xl shadow-purple-400 sm:w-max sm:px-16 sm:py-5 lg:px-10 lg:py-7"
            >
              <item.icon className="text-purple-400 text-6xl" />
              <span className="font-bold text-lg">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      <AnnouncementBox
        title="تخفیف های یک روزه با 40% تخفیف"
        button="محصولات با تخفیف"
      />
      <ProductsPrize />
      <BlogPostsBox />
      <CustomersReview />
      <Footer />
    </div>
  );
}
