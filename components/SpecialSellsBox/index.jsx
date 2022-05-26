import Image from "next/image";
import Box from "../Box";
import { FaStar, FaUser } from "react-icons/fa";
import Stars from "../Stars";

const fakeData = [
  {
    name: "نام فروشگاه",
    picture: "/svg/store.svg",
    category: "موضوع مورد فعالیت",
    type: "پایه",
    followers: 29,
    comments: 29,
    products: 27,
    stars: 4,
  },
  {
    name: "نام فروشگاه",
    picture: "/svg/store.svg",
    category: "موضوع مورد فعالیت",
    type: "پایه",
    followers: 29,
    comments: 29,
    products: 27,
    stars: 4,
  },
];

const SpecialSellsBox = () => {
  return (
    <Box title="محصول و فروشگاه ویژه" className="w-full">
      <div className="w-[100vw] h-max rounded-xl justify-center bg-gray-100 grid grid-cols-1 gap-x-10 gap-y-10 px-4 py-10 lg:grid-cols-2 lg:gap-y-0 lg:w-full items-center">
        {fakeData.map((item, key) => (
          <SpecialSellsItem item={item} key={key} />
        ))}
      </div>
    </Box>
  );
};

const SpecialSellsItem = ({ item }) => {
  return (
    <div className="flex flex-row gap-4 mx-auto ">
      <div>
        <div className="flex flex-col text-right text-black font-bold text-base gap-10 py-4 px-4">
          <span>{item.name}</span>
          <span>{item.category}</span>
          <span className="text-purple-400">{item.type}</span>
          <span>
            <span className="text-purple-400">{item.followers}</span>
            &nbsp;دنبال کننده
          </span>
          <span>
            <span className="text-purple-400">{item.comments}</span>
            &nbsp;نظر
          </span>
          <span>
            <span className="text-purple-400">{item.products}</span>
            &nbsp;محصولات
          </span>
        </div>
        <div>
          <div className="flex flex-row justify-between items-center gap-52">
            <Stars stars={item.stars} />
            <div>
              <FaUser className="text-purple-400" />
            </div>
          </div>
          <button className="bg-purple-400 text-white w-full my-10 px-4 py-2 transition-all duration-300 hover:bg-purple-600">
            رفتن به فروشگاه
          </button>
        </div>
      </div>
      <div>
        <Image src={item.picture} width={393} height={475} alt={item.name} />
      </div>
    </div>
  );
};

export default SpecialSellsBox;
