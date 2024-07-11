"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

import "../components/Styles/Button.css"





const HeroSection = () => {
  return (
    <section className="lg:py-16">
     
      <div className="grid grid-cols-1 sm:grid-cols-12 gradient-background">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-white bg-gradient-to-r from-gray-300 to-neutral-700 bg-clip-text text-transparent ">Hi, I&apos;m{" "} Prince and I'm </span>
            <br></br>
            <TypeAnimation className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              sequence={[
                "",
                1000,
                "Web Developer",
                1000,
                "UI/UX Designer",
                1000,
                "Video Editor",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-t from-gray-50 to-purple-500  text-white hover:to-pink-300  hover:shadow-lg hover:shadow-gray-400 font-extrabold font-sans"
            >
              Hire Me!
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-t from-gray-50 to-purple-500  text-white mt-3 hover:shadow-lg hover:shadow-gray-400 "
            >
              <span className="block bg-[#121212] hover:bg-gradient-to-t from-gray-50 to-purple-500 rounded-full px-5 py-2  font-extrabold font-sans ">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/h1.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
