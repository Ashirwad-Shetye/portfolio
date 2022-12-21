import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Intro() {
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const image = {
    hidden: { opacity: 0 },
    show: {
      opacity: 0.2,
      transition: {
        duration: 2,
      },
    },
  };

  const text = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className="text-black w-screen h-screen snap-start">
      <div className="flex">
        <section className="relative h-full w-2/12">
          <div className="h-screen"></div>
        </section>
        <motion.section
          variants={variants}
          initial="hidden"
          animate="show"
          className="w-10/12 flex justify-center items-center"
        >
          <motion.div
            variants={image}
            className="absolute left-32 opacity-20 rotate-12"
          >
            <Image
              src={"/flower1.png"}
              alt={"flower"}
              width={400}
              height={400}
            />
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="show"
            className="text-left mt-24 w-4/6"
          >
            <motion.div
              variants={text}
              className="text-7xl text-darkcoffee space-y-5 font-ginebra"
            >
              <h1>Hey!</h1>
              <h1>I&apos;m Ashirwad Shetye</h1>
            </motion.div>
            <motion.h2
              variants={text}
              className="text-3xl text-midcoffee my-6 font-raleway tracking-widest"
            >
              Fullstack Web Developer
            </motion.h2>
            <motion.p
              variants={text}
              className="text-xl text-darkcoffee font-raleway tracking-wide"
            >
              Enthusiastic web developer with multiple skills & a creative
              vision to build beautiful & engaging websites
            </motion.p>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}

export default Intro;
