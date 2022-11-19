import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PageInfo } from "../typing";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" relative flex flex-col h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <Image
        src={urlFor(pageInfo?.profilePic).url()}
        alt="Abdi"
        className="-mb-20 mt-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-[300px] md:h-[256px] xl:w-[600px] xl:h-[500px] xl:mt-[150px]"
        width={1920}
        height={1080}
      />
      <div className="mt-20 space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">Here's a little bit about me</h4>
        <p>{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  );
}
