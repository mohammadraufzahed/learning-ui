import Image from "next/image";
import classes from "./style/index.module.scss";

const Hero = () => {
  return (
    <div className="container w-full flex flex-col lg:flex-row items-center justify-center">
      <div>
        <Image
          src="/svg/student_header.svg"
          width={625}
          height={417}
          layout="intrinsic"
          alt="Hero student"
        />
      </div>
      <div className="text-center min-h-full">
        <div>
          <strong className="text-purple-500 text-4xl font-extrabold">
            بازار آنلاین برای فروش، خرید و اشتراک منابع آموزشی
          </strong>
        </div>
        <div className="mt-9 flex flex-row w-full">
          <button className="bg-purple-500 text-white p-3 rounded-l-lg">
            جستجو
          </button>
          <input
            type="text"
            name="search"
            className="w-full rounded-r-lg text-center"
            placeholder="آموزش مورد نظر خود را جستجو کنید"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
