"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Web Dev Compiler",
    description:
      "A HTML,CSS and JavaScript Compiler with Authentication using MERN Stack",
    image: "/images/projects/wd.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/psysam/WD-compiler",
    previewUrl: "https://b_vn0rgbjmlik.v0.build/",
  },

  {
    id: 2,
    title: "Personal AI",
    description: "Made a Gemini Clone Open source AI using ReactJs",
    image: "/images/projects/gemini.jfif",
    tag: ["All", "Front End"],
    gitUrl: "https://github.com/psysam/Gemini-Clone",
    previewUrl: "https://gemini-clone-gilt-two.vercel.app/",
  },

  {
    id: 3,
    title: "Music Player",
    description: "Made Spotify Clone using ReactJs",
    image: "/images/projects/spotify.jfif",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/psysam/spotify-clone",
    previewUrl: "https://musicplayepsy.vercel.app/",
  },

  {
    id: 4,
    title: "Edusity",
    description: "A college website using ReactJs ",
    image: "/images/projects/edusity.jfif",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/psysam/edusity",
    previewUrl: "https://edusitypsy.vercel.app/",
  },

  {
    id: 5,
    title: "Todo App",
    description: " Add tasks with descriptions and deadlines",
    image: "/images/projects/todo.jpg",
    tag: ["All", "Front End"],
    gitUrl: "https://github.com/psysam/todo-app",
    previewUrl: "/",
  },

  {
    id: 6,
    title: "Gym Website",
    description: "Front End Project using HTML,CSS and JavaScript",
    image: "/images/projects/fitlife.jfif",
    tag: ["All", "Front End"],
    gitUrl: "https://github.com/psysam/fitness-website",
    previewUrl: "/",
  },

  {
    id: 7,
    title: "Food Delivery",
    description: "Front End Project using HTML,CSS and JavaScript",
    image: "/images/projects/fasteat.png",
    tag: ["All", "Front End"],
    gitUrl: "https://github.com/psysam/food-delivery",
    previewUrl: "https://food-delivery-delta-murex.vercel.app/",
  },

  {
    id: 8,
    title: "Animated FrontEnd",
    description: "Front End Project using HTML,CSS and JavaScript",
    image: "/images/projects/parallax.png",
    tag: ["All", "Front End"],
    gitUrl: "https://github.com/psysam/parallax-scrolling-website",
    previewUrl: "https://parallax-scrolling-website-gamma.vercel.app/",
  },

  {
    id: 9,
    title: "Login Page UI",
    description: "Front End Project using HTML,CSS and JavaScript",
    image: "/images/projects/login.jfif",
    tag: ["All", "Front End"],
    gitUrl: "https://github.com/psysam/login-form",
    previewUrl: "https://login-form-ten-brown.vercel.app/",
  },

  {
    id: 10,
    title: "Calculator",
    description: "Front End Project using HTML,CSS and JavaScript",
    image: "/images/projects/calci.png",
    tag: ["All", "Front End"],
    gitUrl: "https://github.com/psysam/Calculator",
    previewUrl: "https://calculator-blue-six-35.vercel.app/",
  },

  {
    id: 11,
    title: "Myntra Clone",
    description: "A Full Stack project using ReactJs",
    image: "/images/projects/myntra.jfif",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/psysam/myntra-clone",
    previewUrl: "https://b_vn0rgbjmlik.v0.build/",
  },

  {
    id: 12,
    title: "Contact Form",
    description: "Saves The Users data in Mongo Db",
    image: "/images/projects/mongo.jpg",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/psysam/Contact-Form",
    previewUrl: "/",
  },

  {
    id: 13,
    title: "News Mag",
    description: "Shows The real time news of the world",
    image: "/images/projects/news.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/psysam/news-mag",
    previewUrl: "https://news-mag-amber.vercel.app/",
  },

  {
    id: 14,
    title: "Personal Portfolio",
    description: "Personal Portfolio using HTML,CSS and JavaScript",
    image: "/images/projects/p1.png",
    tag: ["All", "Front End"],
    gitUrl: "https://github.com/psysam/Portfolio",
    previewUrl: "https://portfolio-nu-seven-12.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Front End"
          isSelected={tag === "Front End"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Full Stack"
          isSelected={tag === "Full Stack"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
