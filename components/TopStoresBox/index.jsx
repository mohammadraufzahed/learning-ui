import Image from "next/image";
import Stars from "../Stars";
import Box from "../Box";
import { FaBookmark, FaUser } from "react-icons/fa";

const fakeData = [
  {
    name: "نام فروشگاه",
    picture: "/svg/public-store.svg",
    category: "موضوع مورد فعالیت",
    type: "پایه",
    followers: 29,
    comments: 29,
    products: 27,
    stars: 3,
    rate: 26,
  },
  {
    name: "نام فروشگاه",
    picture: "/svg/public-store.svg",
    category: "موضوع مورد فعالیت",
    type: "پایه",
    followers: 29,
    comments: 29,
    products: 27,
    stars: 5,
    rate: 25,
  },
  {
    name: "نام فروشگاه",
    picture: "/svg/public-store.svg",
    category: "موضوع مورد فعالیت",
    type: "پایه",
    followers: 29,
    comments: 29,
    products: 27,
    stars: 1,
    rate: 25,
  },
  {
    name: "نام فروشگاه",
    picture: "/svg/public-store.svg",
    category: "موضوع مورد فعالیت",
    type: "پایه",
    followers: 29,
    comments: 29,
    products: 27,
    stars: 2,
    rate: 25,
  },
];

const TopStoresBox = () => {
  return (
    <Box
      title="فروشگاه های برتر هفته"
      className="my-7 px-1 py-2 md:px-9 md:py-4"
    >
      <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
        {fakeData.map((item, key) => (
          <TopStoresItem key={key} item={item} />
        ))}
      </div>
    </Box>
  );
};

const TopStoresItem = ({ item }) => {
  return (
    <div className="shadow-sm shadow-purple-300 rounded-b-xl">
      <Image src={item.picture} width={393} height={269} alt={item.name} />
      <div className="text-right py-3">
        <div className="text-base font-normal flex flex-col gap-3 pr-8">
          <span>{item.name}</span>
          <span>{item.category}</span>
          <span>{item.type}</span>
        </div>
        <div className="grid grid-cols-2 text-center mt-4">
          <span>
            نظر <span className="text-purple-500 mr-1">{item.comments}</span>
          </span>
          <span>
            دنبال کننده{" "}
            <span className="text-purple-500 mr-1">{item.followers}</span>
          </span>
          <span>
            محصولات{" "}
            <span className="text-purple-500 mr-1">{item.products}</span>
          </span>
          <span>
            رتبه <span className="text-purple-500 mr-1">{item.rate}</span>
          </span>
        </div>
        <hr className="w-full my-4" />
        <div className="px-2">
          <div className="flex flex-row justify-between">
            <Stars stars={item.stars} />
            <div className="flex flex-row gap-4 text-xl">
              <FaUser className="text-gray-500 transition-colors duration-300 cursor-pointer hover:text-gray-900" />
              <FaBookmark className="text-gray-500 transition-colors duration-300 cursor-pointer hover:text-gray-900" />
            </div>
          </div>
          <button className="bg-purple-500 text-white w-full py-2 mt-5 rounded-md cursor-pointer transition-colors duration-300 hover:bg-purple-700">
            رفتن به فروشگاه
          </button>
        </div>
      </div>
    </div>
  );
};
export default TopStoresBox;
