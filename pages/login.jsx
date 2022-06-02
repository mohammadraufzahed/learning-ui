import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

const LoginPage = () => {
  return (
    <div>
      <div className="w-full h-max bg-gray-100 px-1 py-2 md:px-9 md:py-4 rounded-b-4xl flex flex-col justify-center items-center">
        <Navbar />
        <Menu />
      </div>
      <LoginForm />
      <Footer />
    </div>
  );
};

export default LoginPage;
