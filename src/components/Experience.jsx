import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const experiences = [
  {
    date: "May 2025 – Jun 2025",
    title: "Summer Intern",
    company_name: "Turtil (Remote)",
    icon: "image.jpeg",
    iconBg: "#e6e6e6",
    points: [
      "Built a DistilBERT-based API service for detecting toxic and abusive language, achieving a micro F1-score of 0.80.",
      "Designed RESTful APIs to classify user-generated content and return real-time moderation actions with structured JSON responses for seamless system integration.",
      "Converted the model to ONNX for offline inference under 1 second.",
      "Delivered structured JSON responses with toxicity scores, classification labels, moderation actions, and violation reasons, supporting real-time classification across 5 content categories.",
    ],
  },
  {
    date: "Jun 2024 – Jul 2024",
    title: "Research Intern",
    company_name: "NIT Warangal, India",
    icon: "nitw.png",
    iconBg: "#f4f4f4",
    points: [
      "Applied SRCNN to enhance low-resolution images from real-world datasets; improved PSNR from 24.8 dB to 30.2 dB and SSIM from 0.72 to 0.87 over baseline bicubic interpolation.",
      "Collaborated with a team of 3 to validate the model’s effectiveness on real-world low-resolution images.",
    ],
  },
];

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
