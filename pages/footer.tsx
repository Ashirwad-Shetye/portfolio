import React from "react";
import { GoMail } from "react-icons/go";
import Image from "next/image";

function Footer() {
  return (
    <div className="w-screen h-screen text-black">
      <div className="flex">
        <section className="relative h-full w-2/12">
          <div className="h-screen"></div>
        </section>
        <section className="w-10/12 flex flex-col justify-center items-start">
          <div>
            <div className="text-left">
              <h1 className="text-7xl text-darkcoffee font-ginebra mb-10">
                Contact
              </h1>
            </div>
            <p className="mb-10 font-raleway">
              Let&apos;s connect through the platforms below
            </p>
            <div className="flex">
              <ul className="space-y-5 text-lg font-raleway text-darkcoffee">
                <li className="hover:scale-110 duration-200 underline hover:line-through">
                  <a
                    href="https://www.linkedin.com/in/ashirwadshetye/"
                    target="_blank"
                    rel="noopener, noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="hover:scale-110 duration-200 underline hover:line-through">
                  <a
                    href="https://github.com/Ashirwad-Shetye"
                    target="_blank"
                    rel="noopener, noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li className="hover:scale-110 duration-200 underline hover:line-through">
                  <a
                    href="https://twitter.com/Ashirwad98"
                    target="_blank"
                    rel="noopener, noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li className="hover:scale-110 duration-200 underline hover:line-through">
                  <a
                    href="https://www.instagram.com/ashirwadshetye/"
                    target="_blank"
                    rel="noopener, noreferrer"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="my-10 text-lg font-raleway text-darkcoffee">
            <h1 className="hover:scale-105 duration-200 ">
              <a
                href="mailto:ashirwadpramodshetye@gmail.com"
                className="flex space-x-5 items-center"
                target="_blank"
                rel="noopener, noreferrer"
              >
                <h1 className="text-2xl">
                  <GoMail />
                </h1>
                <h1 className=" underline hover:line-through">
                  ashirwadpramodshetye@gmail.com
                </h1>
              </a>
            </h1>
          </div>
          <div className="absolute right-40 opacity-20 rotate-[-60deg]">
            <Image
              src={"/flower3.png"}
              alt={"flower"}
              width={500}
              height={500}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;
