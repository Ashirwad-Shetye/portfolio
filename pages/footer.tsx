import React, { useEffect } from "react";
import { GoMail } from "react-icons/go";
import Image from "next/image";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Footer() {
  const control = useAnimation();
  const [ref, inView] = useInView();

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
        duration: 3,
      },
    },
  };

  const text = {
    hidden: {
      opacity: 0,
      x: -30,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      control.start("show");
    }
  }, [control, inView]);

  return (
    <div className="w-screen h-screen text-black">
      <div className="flex">
        <section className="relative h-full w-2/12">
          <div className="h-screen"></div>
        </section>
        <section className="w-10/12 flex flex-col justify-center items-start">
          <motion.div
            ref={ref}
            variants={variants}
            animate={control}
            initial="hidden"
          >
            <motion.div
              variants={text}
              animate={control}
              initial="hidden"
              className="text-left"
            >
              <h1 className="text-7xl text-darkcoffee font-ginebra mb-10">
                Contact
              </h1>
            </motion.div>
            <motion.p
              variants={text}
              animate={control}
              initial="hidden"
              className="mb-10 font-raleway"
            >
              Let&apos;s connect through the platforms below
            </motion.p>
            <div className="flex">
              <ul className="space-y-5 text-lg font-raleway text-darkcoffee">
                <motion.li
                  variants={text}
                  animate={control}
                  initial="hidden"
                  className="hover:scale-110 duration-200 underline hover:line-through"
                >
                  <a
                    href="https://www.linkedin.com/in/ashirwadshetye/"
                    target="_blank"
                    rel="noopener, noreferrer"
                  >
                    LinkedIn
                  </a>
                </motion.li>
                <motion.li
                  variants={text}
                  animate={control}
                  initial="hidden"
                  className="hover:scale-110 duration-200 underline hover:line-through"
                >
                  <a
                    href="https://github.com/Ashirwad-Shetye"
                    target="_blank"
                    rel="noopener, noreferrer"
                  >
                    GitHub
                  </a>
                </motion.li>
                <motion.li
                  variants={text}
                  animate={control}
                  initial="hidden"
                  className="hover:scale-110 duration-200 underline hover:line-through"
                >
                  <a
                    href="https://twitter.com/Ashirwad98"
                    target="_blank"
                    rel="noopener, noreferrer"
                  >
                    Twitter
                  </a>
                </motion.li>
                <motion.li
                  variants={text}
                  animate={control}
                  initial="hidden"
                  className="hover:scale-110 duration-200 underline hover:line-through"
                >
                  <a
                    href="https://www.instagram.com/ashirwadshetye/"
                    target="_blank"
                    rel="noopener, noreferrer"
                  >
                    Instagram
                  </a>
                </motion.li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            variants={text}
            animate={control}
            initial="hidden"
            className="my-10 text-lg font-raleway text-darkcoffee"
          >
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
          </motion.div>
          <motion.div
            variants={image}
            animate={control}
            initial="hidden"
            className="absolute right-40 opacity-20 rotate-[-60deg]"
          >
            <Image
              src={"/flower3.png"}
              alt={"flower"}
              width={500}
              height={500}
            />
          </motion.div>
        </section>
      </div>
    </div>
  );
}

export default Footer;
