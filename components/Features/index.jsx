import {
  FaBookOpen,
  FaChartBar,
  FaHandHoldingUsd,
  FaShareAlt,
} from "react-icons/fa";

const Features = () => {
  return (
    <div className="my-10 px-9 py-4 grid grid-cols-2 gap-y-10 justify-between md:grid-cols-4">
      <div className="flex flex-col gap-4 items-center">
        <FaChartBar className="text-purple-500 text-7xl" />
        <span className="font-bold text-gray-400 shadow-purple-400 drop-shadow-2xl">
          رشد کنید و برند خود را بسازید
        </span>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <FaBookOpen className="text-purple-500 text-7xl" />
        <span className="font-bold text-gray-400 shadow-purple-400 drop-shadow-2xl">
          رشد کنید و برند خود را بسازید
        </span>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <FaHandHoldingUsd className="text-purple-500 text-7xl" />
        <span className="font-bold text-gray-400 shadow-purple-400 drop-shadow-2xl">
          رشد کنید و برند خود را بسازید
        </span>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <FaShareAlt className="text-purple-500 text-7xl" />
        <span className="font-bold text-gray-400 shadow-purple-400 drop-shadow-2xl">
          رشد کنید و برند خود را بسازید
        </span>
      </div>
    </div>
  );
};
export default Features;
