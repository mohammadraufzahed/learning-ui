import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

const OrderPage = () => {
  return (
    <div>
      <div className="w-full h-max bg-gray-100 px-1 py-2 md:px-9 md:py-4 rounded-b-4xl flex flex-col justify-center items-center">
        <Navbar />
        <Menu />
      </div>
      <div className="my-5 mx-10">
        <div className="flex flex-row-reverse font-normal">
          <span className="ml-2">حساب کاربری</span>
          <span className="ml-2 text-purple-400">/</span>
          <span>دریافت سفارش محصول</span>
        </div>
        <table dir="rtl" className="table border-2 w-full my-10">
          <thead className="table-header-group  font-bold text-gray-600 text-lg text-center">
            <th className="border-2 p-2">#</th>
            <th className="border-2 p-2">شماره سفارش</th>
            <th className="border-2 p-2">تاریخ ثبت سفارش</th>
            <th className="border-2 p-2">مبلغ پرداخت شده</th>
            <th className="border-2 p-2">جزئیات</th>
            <th className="border-2 p-2">مشخصات خریدار</th>
          </thead>
          <tbody className="text-center font-normal text-gray-600 text-base">
            <tr>
              <td className="border-2 p-2 text-purple-500 font-bold">1</td>
              <td className="border-2 p-2">45432342</td>
              <td className="border-2 p-2">1401/01/01</td>
              <td className="border-2 p-2 text-green-500 cursor-pointer">
                200,000 تومان
              </td>
              <td className="border-2 p-2 text-blue-400 cursor-pointer">
                نمایش جزئیات
              </td>
              <td className="border-2 p-2 text-purple-400 cursor-pointer">
                نمایش مشخصات
              </td>
            </tr>
            <tr>
              <td className="border-2 p-2 text-purple-500 font-bold">1</td>
              <td className="border-2 p-2">45432342</td>
              <td className="border-2 p-2">1401/01/01</td>
              <td className="border-2 p-2 text-green-500 cursor-pointer">
                200,000 تومان
              </td>
              <td className="border-2 p-2 text-blue-400 cursor-pointer">
                نمایش جزئیات
              </td>
              <td className="border-2 p-2 text-purple-400 cursor-pointer">
                نمایش مشخصات
              </td>
            </tr>
            <tr>
              <td className="border-2 p-2 text-purple-500 font-bold">2</td>
              <td className="border-2 p-2">45432342</td>
              <td className="border-2 p-2">1401/01/01</td>
              <td className="border-2 p-2 text-green-500 cursor-pointer">
                200,000 تومان
              </td>
              <td className="border-2 p-2 text-blue-400 cursor-pointer">
                نمایش جزئیات
              </td>
              <td className="border-2 p-2 text-purple-400 cursor-pointer">
                نمایش مشخصات
              </td>
            </tr>
            <tr>
              <td className="border-2 p-2 text-purple-500 font-bold">3</td>
              <td className="border-2 p-2">45432342</td>
              <td className="border-2 p-2">1401/01/01</td>
              <td className="border-2 p-2 text-green-500 cursor-pointer">
                200,000 تومان
              </td>
              <td className="border-2 p-2 text-blue-400 cursor-pointer">
                نمایش جزئیات
              </td>
              <td className="border-2 p-2 text-purple-400 cursor-pointer">
                نمایش مشخصات
              </td>
            </tr>
            <tr>
              <td className="border-2 p-2 text-purple-500 font-bold">4</td>
              <td className="border-2 p-2">45432342</td>
              <td className="border-2 p-2">1401/01/01</td>
              <td className="border-2 p-2 text-green-500 cursor-pointer">
                200,000 تومان
              </td>
              <td className="border-2 p-2 text-blue-400 cursor-pointer">
                نمایش جزئیات
              </td>
              <td className="border-2 p-2 text-purple-400 cursor-pointer">
                نمایش مشخصات
              </td>
            </tr>
            <tr>
              <td className="border-2 p-2 text-purple-500 font-bold">5</td>
              <td className="border-2 p-2">45432342</td>
              <td className="border-2 p-2">1401/01/01</td>
              <td className="border-2 p-2 text-green-500 cursor-pointer">
                200,000 تومان
              </td>
              <td className="border-2 p-2 text-blue-400 cursor-pointer">
                نمایش جزئیات
              </td>
              <td className="border-2 p-2 text-purple-400 cursor-pointer">
                نمایش مشخصات
              </td>
            </tr>
            <tr>
              <td className="border-2 p-2 text-purple-500 font-bold">6</td>
              <td className="border-2 p-2">45432342</td>
              <td className="border-2 p-2">1401/01/01</td>
              <td className="border-2 p-2 text-green-500 cursor-pointer">
                200,000 تومان
              </td>
              <td className="border-2 p-2 text-blue-400 cursor-pointer">
                نمایش جزئیات
              </td>
              <td className="border-2 p-2 text-purple-400 cursor-pointer">
                نمایش مشخصات
              </td>
            </tr>
            <tr>
              <td className="border-2 p-2 text-purple-500 font-bold">7</td>
              <td className="border-2 p-2">45432342</td>
              <td className="border-2 p-2">1401/01/01</td>
              <td className="border-2 p-2 text-green-500 cursor-pointer">
                200,000 تومان
              </td>
              <td className="border-2 p-2 text-blue-400 cursor-pointer">
                نمایش جزئیات
              </td>
              <td className="border-2 p-2 text-purple-400 cursor-pointer">
                نمایش مشخصات
              </td>
            </tr>
            <tr>
              <td className="border-2 p-2 text-purple-500 font-bold">8</td>
              <td className="border-2 p-2">45432342</td>
              <td className="border-2 p-2">1401/01/01</td>
              <td className="border-2 p-2 text-green-500 cursor-pointer">
                200,000 تومان
              </td>
              <td className="border-2 p-2 text-blue-400 cursor-pointer">
                نمایش جزئیات
              </td>
              <td className="border-2 p-2 text-purple-400 cursor-pointer">
                نمایش مشخصات
              </td>
            </tr>
            <tr>
              <td className="border-2 p-2 text-purple-500 font-bold">9</td>
              <td className="border-2 p-2">45432342</td>
              <td className="border-2 p-2">1401/01/01</td>
              <td className="border-2 p-2 text-green-500 cursor-pointer">
                200,000 تومان
              </td>
              <td className="border-2 p-2 text-blue-400 cursor-pointer">
                نمایش جزئیات
              </td>
              <td className="border-2 p-2 text-purple-400 cursor-pointer">
                نمایش مشخصات
              </td>
            </tr>
            <tr>
              <td className="border-2 p-2 text-purple-500 font-bold">10</td>
              <td className="border-2 p-2">45432342</td>
              <td className="border-2 p-2">1401/01/01</td>
              <td className="border-2 p-2 text-green-500 cursor-pointer">
                200,000 تومان
              </td>
              <td className="border-2 p-2 text-blue-400 cursor-pointer">
                نمایش جزئیات
              </td>
              <td className="border-2 p-2 text-purple-400 cursor-pointer">
                نمایش مشخصات
              </td>
            </tr>
            <tr>
              <td className="border-2 p-2 text-purple-500 font-bold">11</td>
              <td className="border-2 p-2">45432342</td>
              <td className="border-2 p-2">1401/01/01</td>
              <td className="border-2 p-2 text-green-500 cursor-pointer">
                200,000 تومان
              </td>
              <td className="border-2 p-2 text-blue-400 cursor-pointer">
                نمایش جزئیات
              </td>
              <td className="border-2 p-2 text-purple-400 cursor-pointer">
                نمایش مشخصات
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex flex-row gap-4 w-max mx-auto items-center justify-between">
          <span className="text-purple-400 text-2xl font-bold cursor-pointer">
            {"<"}
          </span>
          <div className="flex flex-row-reverse gap-2">
            <span className="text-purple-500 bg-gray-300 px-2 py-1 rounded-sm text-center">
              1
            </span>
            <span className="text-gray-500 bg-gray-300 px-2 py-1 rounded-sm text-center">
              1
            </span>
            <span className="text-gray-500 bg-gray-300 px-2 py-1 rounded-sm text-center">
              1
            </span>
            <span className="text-gray-500 bg-gray-300 px-2 py-1 rounded-sm text-center">
              1
            </span>
            <span className="text-gray-500 bg-gray-300 px-2 py-1 rounded-sm text-center">
              1
            </span>
            <span className="text-gray-500 bg-gray-300 px-2 py-1 rounded-sm text-center">
              1
            </span>
          </div>
          <span className="text-purple-400 text-2xl font-bold cursor-pointer">
            {">"}
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderPage;
