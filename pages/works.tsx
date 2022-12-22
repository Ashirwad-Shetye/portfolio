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
                Projects
              </motion.h1>
            </motion.div>
            <motion.div
              ref={projectRef}
              variants={slider}
              initial="hidden"
              animate="show"
              className="flex mb-20 md:mb-0 w-full overflow-x-scroll scrollbar-none gap-10"
            >
              <motion.div
                variants={project}
                initial="hidden"
                animate="show"
                className="project md:w-[450px] md:h-[500px]"
              >
                asd
              </motion.div>
              <motion.div
                variants={project}
                initial="hidden"
                animate="show"
                className="project md:w-[450px] md:h-[500px]"
              >
                asd
              </motion.div>
              <motion.div
                variants={project}
                initial="hidden"
                animate="show"
                className="project md:w-[450px] md:h-[500px]"
              >
                asd
              </motion.div>
              <motion.div
                variants={project}
                initial="hidden"
                animate="show"
                className="project md:w-[450px] md:h-[500px]"
              >
                asd
              </motion.div>
              <motion.div
                variants={project}
                initial="hidden"
                animate="show"
                className="project md:w-[450px] md:h-[500px] mr-3 md:mr-20"
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
