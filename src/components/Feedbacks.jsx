import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  link,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-6 rounded-3xl w-full xs:w-[250px] sm:w-[270px] md:w-[300px] xl:w-[320px]"
  >
    {/* Left Section with Name, Designation, and Company */}
    <div className="flex items-center mb-4">
      <div className="flex-1 flex flex-col">
        <p className="text-white font-medium text-[16px]">
          <span className="blue-text-gradient">@</span> {name}
        </p>
        {/* Uncomment if you want to show designation */}
        {/* <p className="mt-1 text-secondary text-[12px]">
          {designation} of {company}
        </p> */}
      </div>

      {/* Right Section with Logo */}
      <img
        src={image}
        alt={`feedback_by-${name}`}
        className="w-10 h-10 rounded-full object-cover ml-2" // Adjust margin-left here to shift logo left
      />
    </div>

    {/* Testimonial Text */}
    <p className="text-white tracking-wider text-[14px] mb-4">{testimonial}</p>

    {/* Achievements and Certifications Section */}
    <div className="mt-4 text-white text-[14px]">
      <a
        href={link}
        className="text-blue-500 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Link
      </a>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[180px]`}>
        <motion.div variants={textVariant()}>
          {/* <p className={styles.sectionSubText}>What others say</p> */}
          <h2 className={styles.sectionHeadText}>Achievements & Certifications</h2>
        </motion.div>
      </div>

      {/* Container for the cards, ensuring 4 in a row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-7 px-6 pb-14">
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
