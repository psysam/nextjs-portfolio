"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 ">
        <li>
          <span className="font-extrabold text-gray-300 text-lg">
            Programming Language
          </span>
          <br />
          C, C++, Python, HTML, CSS, Java, javascript, React.js, Next.js
          MongoDB, Pug, Express.js, Node.js, Typescript, JWT, Nodemon, Npm.
        </li>
        <li>
          <span className="font-extrabold text-gray-300 text-lg">
            Web Content Management System
          </span>
          <br />
          Wordpress, Figma, Godaddy, Vercel, Netlify, AWS, WOOcommerce,
          Hostinger.
        </li>
        <li>
          <span className="font-extrabold text-gray-300 text-lg">
            IT Security
          </span>
          <br />
          Cyber Security, Reverse Engeneering, DNS Analysis, Network And Port
          Scanning, Social Engeneering, Wireless Attack.
        </li>
        <li>
          <span className="font-extrabold text-gray-300 text-lg">
            {" "}
            operating System
          </span>
          <br />
          Linux, Ubuntu, Windows
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <span className="font-extrabold text-gray-300 text-lg">B.Tech</span>
          <br />
          AKTU university
        </li>
        <li>
          <span className="font-extrabold text-gray-300 text-lg">High School</span>
          <br />
          CBSE Board
        </li>
        <li>
          <span className="font-extrabold text-gray-300 text-lg">Intermediate</span>
          <br />
          Up Board
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Digital Marketing By Google </li>
        <li>Campus Ambassador from MMMUT</li>
        <li>Python</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
        <Image
          className="rounded-2xl"
          src="/images/a1.png"
          alt="About Image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, 
            HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
