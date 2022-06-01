import Image from "next/image";
import Box from "../Box";
import classes from "./style/index.module.scss";

const fakeData = [
  {
    title: "عنوان مطلب",
    picture: "/svg/public-store.svg",
    content: `طراح گرافیک از این متن به عنوان عنصری از ترکیب
        بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری
        و کلی طرح سفارش گرفته شده استفاده می نماید،
        تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت
       .و ظاهر متن باشد`,
    date: "1400/05/21",
  },
  {
    title: "عنوان مطلب",
    picture: "/svg/public-store.svg",
    content: `طراح گرافیک از این متن به عنوان عنصری از ترکیب
        بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری
        و کلی طرح سفارش گرفته شده استفاده می نماید،
        تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت
       .و ظاهر متن باشد`,
    date: "1400/05/21",
  },
  {
    title: "عنوان مطلب",
    picture: "/svg/public-store.svg",
    content: `طراح گرافیک از این متن به عنوان عنصری از ترکیب
        بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری
        و کلی طرح سفارش گرفته شده استفاده می نماید،
        تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت
       .و ظاهر متن باشد`,
    date: "1400/05/21",
  },
  {
    title: "عنوان مطلب",
    picture: "/svg/public-store.svg",
    content: `طراح گرافیک از این متن به عنوان عنصری از ترکیب
        بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری
        و کلی طرح سفارش گرفته شده استفاده می نماید،
        تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت
       .و ظاهر متن باشد`,
    date: "1400/05/21",
  },
];

const BlogPostsBox = () => {
  return (
    <Box title="آخرین مطالب" className="px-1 py-2 md:px-9 md:py-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center gap-y-16">
        {fakeData.map((item, key) => (
          <PostItem key={key} post={item} />
        ))}
      </div>
    </Box>
  );
};

const PostItem = ({ post }) => {
  return (
    <div className="shadow-xl shadow-purple-400 w-max flex flex-col pb-5 rounded-xl">
      <Image src={post.picture} width={393} height={269} alt={post.title} />
      <div className="w-[25vw] max-w-[393px] min-w-[393px] flex flex-col text-right gap-4 mt-6 px-5 text-gray-600">
        <span className="font-bold text-xl">{post.title}</span>
        <span className="font-normal text-base space tracking-wide text-center">
          {post.content}
        </span>
      </div>
      <div className="flex flex-row justify-between px-5 mt-5 text-purple-400 font-bold">
        <span className="cursor-pointer transition-colors duration-300 hover:text-purple-500">
          بیشتر...
        </span>
        <span>{post.date}</span>
      </div>
    </div>
  );
};

export default BlogPostsBox;
