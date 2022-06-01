import Image from "next/image";
import Box from "../Box";
import classes from "./style/index.module.scss";

const fakeData = [
  {
    name: "نام مشتری",
    content: ` طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر
        کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته
        شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و
        اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای
        صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده
       .می‌کنند`,
    picture: "/svg/customer-profile.svg",
  },
];

const CustomersReview = () => {
  return (
    <Box title="نظرات مشتریان" className="mt-10">
      <div className="grid grid-cols-1 place-items-center">
        {fakeData.map((item, key) => (
          <ReviewItem key={key} review={item} />
        ))}
      </div>
    </Box>
  );
};

const ReviewItem = ({ review }) => {
  return (
    <div className="w-[90vw] flex flex-col-reverse shadow-xl md:flex-row md:max-w-[640px] md:max-h-[389px] shadow-purple-400 rounded-xl">
      <div className="px-6 text-right mt-5 text-gray-600">
        <span className="font-extrabold text-xl">{review.name}</span>
        <p className="mt-5 font-normal tracking-wider mb-4">{review.content}</p>
      </div>
      <Image
        className="md:w-[320px] md:h-[389px]"
        src={review.picture}
        width={320}
        height={389}
        alt={review.name}
      />
    </div>
  );
};

export default CustomersReview;
