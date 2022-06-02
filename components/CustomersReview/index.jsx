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
    <div className="flex flex-col relative shadow-xl shadow-purple-400 md:flex-row-reverse rounded-3xl">
      <div className={classes.profile_container + " w-14"}>
        <Image
          src={review.picture}
          layout="fill"
          className={classes.profile}
          alt={review.name}
          width={320}
          height={389}
        />
      </div>
      <div className="w-max max-w-[320px] flex flex-col text-right my-6 px-4 text-gray-600 md:px-0 md:mx-6">
        <span className="font-extrabold text-gray-600 text-xl md:mt-10">
          {review.name}
        </span>
        <p className="font-medium text-base text-center mx-auto mt-3 tracking-wide md:mt-5">
          {review.content}
        </p>
      </div>
    </div>
  );
};

export default CustomersReview;
