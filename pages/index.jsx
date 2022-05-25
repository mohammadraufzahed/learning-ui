import Head from "next/head";
import Features from "../components/Features";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="min-h-[100vh] w-full font-iranYekan">
      <Head>
        <title>سامانه خرید و فروش</title>
      </Head>
      <Header />
      <Features />
    </div>
  );
}
