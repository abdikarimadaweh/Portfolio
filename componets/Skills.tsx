import React from "react";
import Skill from "./Skill";
import { motion } from "framer-motion";
import { Skill as SkillType } from "../typing";

type Props = {
  skills: SkillType[];
};

export default function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative h-screen flex flex-col text-center md:text-left xl:flex-row
    max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h4 className="absolute top-[160px] uppercase tracking-[10px] text-gray-500 text-1xl">
        Hover over each skill for current proffecieny
      </h4>
      <div className="grid grid-cols-3 gap-5">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}

        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
}
