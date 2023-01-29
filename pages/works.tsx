import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Works() {
  const control = useAnimation();
  const [textRef, textInView] = useInView();
  const [projectRef, projectInView] = useInView();

  const variant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
        duration: 2,
      },
    },
  };

  const slider = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const project = {
    hidden: {
      opacity: 0,
      x: 20,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2,
      },
    },
  };

  useEffect(() => {
    if (textInView) {
      control.start("show");
    }
    if (projectInView) {
      control.start("show");
    }
  }, [control, textInView, projectInView]);

  return (
    <div className=" w-screen min-h-[720px] h-fit lg:h-screen">
      <div className="flex flex-col md:flex-row items-center">
        <section className=" relative w-full h-32 md:h-full md:w-[200px]">
          <div className="h-screen"></div>
        </section>
        <section className=" w-10/12 flex justify-center md:justify-left items-center">
          <div className="space-y-16 w-full">
            <motion.div
              ref={textRef}
              animate={control}
              initial="hidden"
              variants={variant}
              className="text-left"
            >
              <motion.h1
                variants={text}
                initial="hidden"
                animate="show"
                className="text-7xl text-darkcoffee font-ginebra"
              >
                Projects / Work
              </motion.h1>
            </motion.div>
            <motion.div
              ref={projectRef}
              variants={slider}
              initial="hidden"
              animate="show"
              className="flex mb-20 md:mb-0 w-full overflow-x-scroll scrollbar-none"
            >
              <motion.div
                variants={project}
                initial="hidden"
                animate="show"
                className="project one m-10 md:w-[350px] md:h-[400px] hover:shadow-lg"
              >
                <div
                  className="w-full bg-midcoffee h-full opacity-0 hover:opacity-90 duration-300
                flex items-center"
                >
                  <div className="flex flex-col font-raleway space-y-5 justify-center items-center w-full">
                    <h1 className="text-center mx-5">
                      Goalie is a Fullstack goal management platform built using
                      MERN stack
                    </h1>
                    <h1 className="text-center mx-5">
                      Tech: ReactJs, Redux, Mongodb, Tailwindcss, Express,
                      Flowbite
                    </h1>
                    <div className="w-full py-5 flex justify-around">
                      <button className="h-10 text-coffee font-raleway px-2 rounded-xl border-2 border-coffee hover:bg-coffee hover:text-darkcoffee ">
                        Website
                      </button>
                      <button className="h-10 text-coffee font-raleway px-2 rounded-xl border-2 border-coffee hover:bg-coffee hover:text-darkcoffee ">
                        GitHub
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={project}
                initial="hidden"
                animate="show"
                className="project two m-10 md:w-[350px] md:h-[400px] hover:shadow-lg"
              >
                <div
                  className="w-full bg-midcoffee h-full opacity-0 hover:opacity-90 duration-300
                flex items-center"
                >
                  <div className="flex flex-col font-raleway space-y-5 justify-center items-center w-full">
                    <h1 className="text-center mx-5">
                      Goalie is a Fullstack goal management platform built using
                      MERN stack
                    </h1>
                    <h1 className="text-center mx-5">
                      Tech: ReactJs, Redux, Mongodb, Tailwindcss, Express,
                      Flowbite
                    </h1>
                    <div className="w-full py-5 flex justify-around">
                      <button className="h-10 text-coffee font-raleway px-2 rounded-xl border-2 border-coffee hover:bg-coffee hover:text-darkcoffee ">
                        Website
                      </button>
                      <button className="h-10 text-coffee font-raleway px-2 rounded-xl border-2 border-coffee hover:bg-coffee hover:text-darkcoffee ">
                        GitHub
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={project}
                initial="hidden"
                animate="show"
                className="project three m-10 md:w-[350px] md:h-[400px] hover:shadow-lg"
              >
                <div
                  className="w-full bg-midcoffee h-full opacity-0 hover:opacity-90 duration-300
                flex items-center"
                >
                  <div className="flex flex-col font-raleway space-y-5 justify-center items-center w-full">
                    <h1 className="text-center mx-5">
                      Goalie is a Fullstack goal management platform built using
                      MERN stack
                    </h1>
                    <h1 className="text-center mx-5">
                      Tech: ReactJs, Redux, Mongodb, Tailwindcss, Express,
                      Flowbite
                    </h1>
                    <div className="w-full py-5 flex justify-around">
                      <button className="h-10 text-coffee font-raleway px-2 rounded-xl border-2 border-coffee hover:bg-coffee hover:text-darkcoffee ">
                        Website
                      </button>
                      <button className="h-10 text-coffee font-raleway px-2 rounded-xl border-2 border-coffee hover:bg-coffee hover:text-darkcoffee ">
                        GitHub
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={project}
                initial="hidden"
                animate="show"
                className="project four m-10 md:w-[350px] md:h-[400px] hover:shadow-lg"
              >
                <div
                  className="w-full bg-midcoffee h-full opacity-0 hover:opacity-90 duration-300
                flex items-center"
                >
                  <div className="flex flex-col font-raleway space-y-5 justify-center items-center w-full">
                    <h1 className="text-center mx-5">
                      Goalie is a Fullstack goal management platform built using
                      MERN stack
                    </h1>
                    <h1 className="text-center mx-5">
                      Tech: ReactJs, Redux, Mongodb, Tailwindcss, Express,
                      Flowbite
                    </h1>
                    <div className="w-full py-5 flex justify-around">
                      <button className="h-10 text-coffee font-raleway px-2 rounded-xl border-2 border-coffee hover:bg-coffee hover:text-darkcoffee ">
                        Website
                      </button>
                      <button className="h-10 text-coffee font-raleway px-2 rounded-xl border-2 border-coffee hover:bg-coffee hover:text-darkcoffee ">
                        GitHub
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Works;
