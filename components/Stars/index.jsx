import { FaStar } from "react-icons/fa";

const Stars = ({ stars }) => {
  return (
    <div className="flex flex-row gap-1">
      {[0, 1, 2, 3, 4].map((key) => (
        <FaStar
          key={key}
          className={key < stars ? "text-yellow-400" : "text-gray-400"}
        />
      ))}
    </div>
  );
};

export default Stars;
