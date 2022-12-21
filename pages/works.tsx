import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Works() {
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
        duration: 1,
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
        duration: 1,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      control.start("show");
    }
  }, [control, inView]);

  return (
    <div className="">
      <div className="flex">
        <section className="relative h-full w-2/12">
          <div className="h-screen"></div>
        </section>
        <section className="relative w-10/12 flex flex-col justify-center items-start">
          <div className="space-y-16 w-full">
            <motion.div
              ref={ref}
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
                Projects
              </motion.h1>
            </motion.div>
            <motion.div
              variants={slider}
              initial="hidden"
              animate="show"
              className="flex w-full overflow-x-scroll scrollbar-none gap-10"
            >
              <motion.div
                variants={project}
                initial="hidden"
                animate="show"
                className="project"
              >
                asd
              </motion.div>
              <motion.div
                variants={project}
                initial="hidden"
                animate="show"
                className="project"
              >
                asd
              </motion.div>
              <motion.div
                variants={project}
                initial="hidden"
                animate="show"
                className="project"
              >
                asd
              </motion.div>
              <motion.div
                variants={project}
                initial="hidden"
                animate="show"
                className="project"
              >
                asd
              </motion.div>
              <motion.div
                variants={project}
                initial="hidden"
                animate="show"
                className="project mr-20"
              >
                asd
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Works;
