import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { FaReact, FaNode, FaPython } from "react-icons/fa"; // Example icons
import { styles } from "../styles";

const technologies = [
   { name: "React", icon: <FaReact />, color: "#61DAFB" }, // React logo color
  { name: "Node.js", icon: <FaNode />, color: "#68A063" }, // Node.js color
  { name: "Python", icon: <FaPython />, color: "#306998" }, 
  // Add other technologies as needed
];

const Tech = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-16">
      <h2 className={`${styles.sectionHeadText} text-center mb-8`}>Skills</h2>
      <div className="overflow-x-auto flex flex-wrap justify-center gap-10 px-4">
        {technologies.map((technology) => (
          <div
            className="w-24 h-24 sm:w-28 sm:h-28 flex justify-center items-center"
            key={technology.name}
          >
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
