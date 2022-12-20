import Head from "next/head";
import { Inter } from "@next/font/google";
import Intro from "./intro";
import About from "./about";
import Works from "./works";
import Footer from "./footer";
import { IoChevronUpSharp } from "react-icons/io5";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const scrollAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollWork = () => {
    const element = document.getElementById("works");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollContact = () => {
    const element = document.getElementById("footer");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollTop = () => {
    const element = document.getElementById("intro");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="bg-coffee w-screen">
      <Head>
        <title>Ashirwad Shetye - Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="fixed flex items-center justify-center left-0 h-full w-2/12 z-50">
          <div className="relative flex flex-col h-screen">
            <div className="h-80">
              <ul className="text-center text-midcoffee text-md mt-44 space-x-5 font-raleway flex -rotate-90 h-fit">
                <li
                  onClick={scrollContact}
                  className="cursor-pointer h-20 flex items-center px-1 hover:italic duration-300"
                >
                  CONTACT
                </li>
                <li
                  onClick={scrollWork}
                  className="cursor-pointer h-20 flex items-center px-1 hover:italic duration-300"
                >
                  PROJECTS
                </li>
                <li
                  onClick={scrollAbout}
                  className="cursor-pointer h-20 flex items-center px-1 hover:italic duration-300"
                >
                  ABOUT
                </li>
              </ul>
            </div>
            <div className="bg-midcoffee w-0.5 my-16 h-40 mx-auto"></div>
            <div className="absolute bottom-0 w-full h-40 text-center">
              <h1 className="text-lg text-lightcoffee -rotate-90 mt-10 select-none cursor-default">
                @2022
              </h1>
            </div>
          </div>
        </section>
        <section className="snap-both snap-mandatory scroll-smooth">
          <div id="intro">
            <Intro />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="works">
            <Works />
          </div>
          <div id="footer" className="relative">
            <Footer />
            <button
              onClick={scrollTop}
              className="bg-darkcoffee bg-opacity-50 h-12 w-12 rounded-full flex justify-center items-center 
              absolute bottom-10 right-20 z-50 hover:scale-110 duration-200 animate-bounce"
            >
              <IoChevronUpSharp />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
