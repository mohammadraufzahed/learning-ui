import classes from "./style/index.module.scss";
import { FaGoogle } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div className="my-16">
      <div className="flex flex-row gap-3 mx-auto w-max justify-center bg-gray-100 font-bold text-gray-600 px-5 py-2">
        <span className="border-r-2 border-gray-200 pr-3 mr-5">ورود</span>
        <span>ثبت نام</span>
      </div>
      <div className="md:w-1/2 mx-auto">
        <form>
          <div className="text-right flex flex-col px-4 mt-5">
            <label htmlFor="username" className="font-bold text-black">
              نام کاربری
            </label>
            <input
              name="username"
              type="text"
              className="bg-gray-100 rounded-md mt-5 py-2 outline-2 outline-gray-200 outline-double outline-rou"
            />
          </div>
          <div className="text-right flex flex-col px-4 mt-5 relative">
            <label htmlFor="username" className="font-bold text-black">
              رشته تحصیلی
            </label>
            <select className="w-full bg-gray-100 py-3 mt-5">
              <option defaultValue>کاردانی</option>
              <option>کارشناسی</option>
              <option>ارشد</option>
            </select>
          </div>
          <div className="grid grid-cols-2">
            <div className="text-right flex flex-col px-4 mt-5">
              <label htmlFor="password" className="font-bold text-black">
                رمز عبور
              </label>
              <input
                name="password"
                type="password"
                className="bg-gray-100 rounded-md mt-5 py-2 outline-2 outline-gray-200 outline-double outline-rou"
              />
            </div>
            <div className="text-right flex flex-col px-4 mt-5">
              <label
                htmlFor="password_confirm"
                className="font-bold text-black"
              >
                تایید رمز عبور
              </label>
              <input
                name="password_confirm"
                type="password"
                className="bg-gray-100 rounded-md mt-5 py-2 outline-2 outline-gray-200 outline-double outline-rou"
              />
            </div>
          </div>
          <div className="text-right flex flex-row-reverse justify-start px-4 mt-5">
            <label htmlFor="gender" className="font-bold text-black ml-4">
              جنسیت
            </label>
            <div className="flex flex-row justify-end items-center">
              <div className="mr-4">
                <label className="mr-3">مرد</label>
                <input name="gender" id="gender" value="male" type="radio" />
              </div>
              <label className="mr-3">زن</label>
              <input name="gender" id="gender" value="female" type="radio" />
            </div>
          </div>
          <div className="text-right flex flex-row-reverse justify-start px-4 mt-5">
            <label htmlFor="work" className="font-bold text-black ml-4">
              وضعیت شغلی
            </label>
            <div className="flex flex-row justify-end items-center">
              <div className="mr-4">
                <label className="mr-3">محصل</label>
                <input name="work" id="work" value="study" type="radio" />
              </div>
              <div>
                <label className="mr-3">شاغل</label>
                <input name="work" id="work" value="work" type="radio" />
              </div>
              <div>
                <label className="mr-3">فارغ التحصیل</label>
                <input
                  name="work"
                  id="work"
                  value="study_finish"
                  type="radio"
                />
              </div>
            </div>
          </div>
          <button className="w-full bg-purple-500 text-white py-2 mt-5 font-bold text-lg">
            ثبت نام
          </button>
          <button className="w-full bg-white text-black py-2 mt-5 font-bold text-lg flex flex-row-reverse justify-center items-center">
            ثبت نام با گوگل <FaGoogle className="mr-5 bg-rad" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
