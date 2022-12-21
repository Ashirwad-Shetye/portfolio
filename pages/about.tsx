import Image from "next/image";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const variant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  const image = {
    hidden: {
      opacity: 0,
      x: 30,
    },
    show: {
      x: 0,
      opacity: 1,
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
    <div className="text-black w-screen h-screen snap-center">
      <div className="flex">
        <section className="relative h-full w-2/12">
          <div className="h-screen"></div>
        </section>
        <section className="w-11/12 flex justify-left items-center">
          <motion.div ref={ref} className="grid grid-cols-2 place-items-left">
            <motion.div
              variants={text}
              animate={control}
              initial="hidden"
              className="text-left w-5/6"
            >
              <div className=" text-darkcoffee space-y-6">
                <h1 className="text-7xl font-ginebra">About</h1>
                <h2 className="text-2xl font-raleway tracking-wide">
                  I&apos;m Ashirwad. A focused web developer, designer & a
                  problem solver.
                </h2>
                <div className="space-y-5">
                  <p className="text-md text-darkcoffee font-raleway tracking-wide">
                    As an individual fascinated & drawn towards art & creativity
                    since childhood, I’ve always been involved in different
                    forms of artistic fields like painting sketches & producing
                    music. Learning web development has helped me expand this
                    ability to a different medium.
                  </p>
                  <p className="text-md text-darkcoffee font-raleway tracking-wide">
                    This love towards art & technology has always pushed me to
                    learn new skills, be it photoshop, sketching or web
                    designing & development.
                  </p>
                </div>
                <div className="space-y-5">
                  <p className="text-md text-darkcoffee font-raleway tracking-wide">
                    One of my favourite quote is :
                  </p>
                  <h1 className="font-raleway font-semibold text-midcoffee text-xl">
                    “Technology is best when it brings people together.”
                  </h1>
                  <div className="text-right">
                    <h2 className="italic font-semibold text-darkcoffee tracking-wide">
                      -Matt Mullenweg
                    </h2>
                    <p className="italic text-darkcoffee tracking-wide">
                      Entrepreneur & developer of wordpress
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={image}
              animate={control}
              initial="hidden"
              className="w-4/6 place-self-center overflow-hidden rounded-3xl "
            >
              <Image
                src={"/profileImage.png"}
                alt={"profile"}
                width={614}
                height={819}
                className="hover:scale-105 duration-300"
              />
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}

export default About;
