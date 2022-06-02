import Image from "next/image";
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";
import classes from "./style/index.module.scss";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 px-1 py-5 pb-0 md:px-9 md:pt-4 text-center bg-gray-200 md:grid-cols-3 ">
      <div className="w-full">
        <strong className="font-extrabold text-xl tracking-wider text-gray-600">
          تماس <span className="text-purple-400">باما</span>
        </strong>
        <div className="flex flex-row w-full justify-center mt-5 text-3xl text-purple-500">
          <FaTelegram className="mr-5" />
          <FaInstagram />
          <FaWhatsapp className="ml-5" />
        </div>
        <div className="px-4 mt-5">
          <div className="flex flex-col w-full font-normal text-base">
            <span className="text-left">شماره تماس</span>
            <span className="text-right text-purple-400">09121234567</span>
          </div>
          <div className="flex flex-col w-full font-normal text-base mt-5">
            <span className="text-left">پست الکترونیکی</span>
            <span className="text-right text-purple-400">
              example@domain.com
            </span>
          </div>
        </div>
      </div>
      <div className="w-full mt-7 md:mt-0">
        <strong className="font-extrabold text-xl tracking-wider text-gray-600">
          لینک های <span className="text-purple-400">دسترسی</span>
        </strong>
        <ul className="list-none px-12 mt-4">
          <li className="font-light cursor-pointer mb-3">خدمات مشتریان</li>
          <li className="font-light cursor-pointer mb-3">خدمات مشتریان</li>
          <li className="font-light cursor-pointer mb-3">خدمات مشتریان</li>
          <li className="font-light cursor-pointer mb-3">خدمات مشتریان</li>
          <li className="font-light cursor-pointer mb-3">خدمات مشتریان</li>
          <li className="font-light cursor-pointer mb-3">خدمات مشتریان</li>
          <li className="font-light cursor-pointer mb-3">خدمات مشتریان</li>
        </ul>
      </div>
      <div className="w-full mt-7 md:mt-0">
        <div>
          <Image src="/svg/logo.svg" width={250} height={250} alt="Logo" />
        </div>
        <strong>بازار آنلاین فروش، خرید و به اشتراک گذاری منابع آموزشی</strong>
        <div className="mt-5 w-max bg-purple-500 flex flex-row text-white py-2 px-5 mx-auto">
          <span className="mr-5 border-r-2 border-white pr-5 cursor-pointer">
            ثبت نام
          </span>
          <span className="cursor-pointer">ایجاد فروشگاه</span>
        </div>
      </div>
      <div className="bg-purple-500 w-full md:col-span-3 py-5 mt-5 rounded-t-[15%] text-white font-extrabold">
        تمامی حقوق برای وب سایت محفوظ می باشد 1401
      </div>
    </div>
  );
};

export default Footer;
