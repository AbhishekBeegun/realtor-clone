import HighlightedArticleBanner from "@/components/Banners/HighlightedArticleBanner";
import CategoriesCard from "@/components/Cards/CategoriesCard";
import LastestArticleCard from "@/components/Cards/LastestArticleCard";
import MainHeading from "@/components/Headings/MainHeading";
import Searchbar from "@/components/Searchbar/Searchbar";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="">
      <section className="relative">
        <img
          className="-z-10 absolute top-0 right-0 object-cover h-[450px]"
          width={"100%"}
          alt="top_img"
          src="https://static.rdc.moveaws.com/images/hero/default/2021-11/jpg/hp-hero-desktop.jpg"
        />
        <div className="container h-[450px]">
          <div className="row justify-center ">
            <h1 className="text-center text-6xl font-bold text-white w-3/4 mt-14">
              The #1 site real estate professionals in Mauritius*
            </h1>

            <div className="flex justify-center items-center w-full text-white gap-10 mt-14 mb-8">
              <Link href={"/buy"}>Buy</Link>
              <Link href={"/sell"}>Sell</Link>
              <Link href={"/sell"}>Rent</Link>
              <Link href={"/sell"}>Mortgage</Link>
              <Link href={"/sell"}>My Home</Link>
              <Link href={"/sell"}>News & Insights</Link>
            </div>

            <div className="flex justify-center w-1/2">
              <Searchbar />
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-14">
        <div className="mb-4">
          <MainHeading Title={"Browse homes in Quatre Bornes"} />
        </div>

        <div className="grid grid-cols-4 gap-3">
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
        </div>
      </section>

      <section className="container mt-14">
        <div className="mb-4">
          <MainHeading Title={"Discover how we can help"} />
        </div>
      </section>

      <HighlightedArticleBanner />

      <section className="container py-14 ">
        <div className="row grid grid-cols-4 gap-3">
          <LastestArticleCard />
          <LastestArticleCard />
          <LastestArticleCard />
          <LastestArticleCard />
        </div>
      </section>
    </main>
  );
}
