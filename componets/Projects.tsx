import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "../typing";
import { urlFor } from "../sanity";
import image from "next/image";

type Props = {
  projects: Project[];
};
function Projects({ projects }: Props) {
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-[50px] uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-[20px] h-screen"
          >
            <Image
              src={urlFor(project?.image).url()}
              alt="Project"
              className="w-[600px] h-[600px] object-contain"
              width={1920}
              height={1080}
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                {project?.title}
              </h4>
              <div className="flex items-center justify-center space-x-8">
                {project?.technologies.map((technology) => (
                  <Image
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt="Technoloy"
                    className="w-[60px] h-[60px] object-contain"
                    width={1920}
                    height={1080}
                  />
                ))}
              </div>
              <p className="text-lg text-center md:text-left">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
}

export default Projects;
