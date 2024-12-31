import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const EducationCard = ({ title, details, coursework, icon }) => (
  <Tilt className="w-full max-w-[600px]">
    <motion.div
      variants={fadeIn("right", "spring", 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-8 px-10 flex flex-col items-start"
      >
        <div className="flex items-center mb-6">
        <img src={icon} alt={title} className="w-16 h-16 object-contain mr-6 rounded-full" />
<h3 className="text-white text-[24px] font-bold">{title}</h3>

        </div>
        <p className="text-secondary text-[16px] mb-4">{details}</p>
        <h4 className="text-white text-[18px] font-semibold mb-2">Coursework:</h4>
        <ul className="text-white text-[14px] list-disc pl-5">
          {coursework.map((course, index) => (
            <li key={index} className="mb-1">{course}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const education = {
    title: "B.Tech at SR University",
    details: "Bachelor’s of Technology in Computer Science, GPA: 9.5/10",
    coursework: ["Database Management Systems", "Operating Systems", "Machine Learning"],
    icon: "/sru.png", // Update with the path to your education icon
  };

  return (
    <section>
      <motion.div variants={textVariant()} className="text-center">
        <h2 className={styles.sectionHeadText}>Education</h2>
      </motion.div>

      <div className="mt-10 flex justify-center">
        <EducationCard {...education} />
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
