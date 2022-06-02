import classes from "./style/index.module.scss";

const AnnouncementBox = ({ title, button }) => {
  return (
    <div className="bg-gradient-to-r from-purple-200 to-purple-400 w-full px-1 py-2 md:px-9 md:py-4 text-center flex flex-col gap-16 h-[50vh] items-center justify-center ">
      <span className="font-extrabold text-2xl drop-shadow-2xl text-white md:text-4xl">
        {title}
      </span>
      <button className="mt-10 w-full bg-purple-500 transition-colors duration-300 font-bold text-2xl text-white py-4 hover:bg-purple-700 md:w-[60%]">
        {button}
      </button>
    </div>
  );
};
export default AnnouncementBox;
