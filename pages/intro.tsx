import React from "react";
import Image from "next/image";

function Intro() {
  return (
    <div className="text-black w-screen h-screen snap-start">
      <div className="flex">
        <section className="relative h-full w-2/12">
          <div className="h-screen"></div>
        </section>
        <section className="w-10/12 flex justify-center items-center">
          <div className="absolute left-32 opacity-20 rotate-12">
            <Image
              src={"/flower1.png"}
              alt={"flower"}
              width={400}
              height={400}
            />
          </div>
          <div className="text-left mt-24 w-4/6">
            <div className="text-7xl text-darkcoffee space-y-5 font-ginebra">
              <h1>Hey!</h1>
              <h1>I&apos;m Ashirwad Shetye</h1>
            </div>
            <h2 className="text-3xl text-midcoffee my-6 font-raleway tracking-widest">
              Fullstack Web Developer
            </h2>
            <p className="text-xl text-darkcoffee font-raleway tracking-wide">
              Enthusiastic web developer with multiple skills & a creative
              vision to build beautiful & engaging websites
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Intro;
