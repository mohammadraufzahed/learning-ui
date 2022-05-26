import classes from "./style/index.module.scss";

const Box = ({ title, className, children }) => {
  return (
    <div className={className + " flex flex-col items-center"}>
      <div className={classes.title}>
        <span className="font-extrabold text-2xl text-gray-700">{title}</span>
        <div className="flex flex-row justify-center my-3 gap-[0.1em]">
          <div className="w-3 h-[2px] bg-purple-400"></div>
          <div className="w-5 h-[2px] bg-purple-400"></div>
          <div className="w-7 h-[2px] bg-purple-400"></div>
          <div className={"w-20 h-[2px] bg-gray-400"}></div>
          <div className="w-7 h-[2px] bg-purple-400"></div>
          <div className="w-5 h-[2px] bg-purple-400"></div>
          <div className="w-3 h-[2px] bg-purple-400"></div>
        </div>
      </div>
      <div className="my-5">{children}</div>
    </div>
  );
};
export default Box;
