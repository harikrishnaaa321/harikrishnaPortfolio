import React from "react";
import { FaPython, FaReact, FaJava, FaHtml5, FaNodeJs, FaCss3Alt } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiJavascript } from 'react-icons/si';
import { SectionWrapper } from "../hoc";
import {styles} from '../styles';

const skillIcons = [
  { name: 'Python', icon: <FaPython size={40} />, color: 'text-yellow-500' },
  { name: 'Java', icon: <FaJava size={40} />, color: 'text-red-500' },
  { name: 'JavaScript', icon: <SiJavascript size={40} />, color: 'text-yellow-600' },
  { name: 'React', icon: <FaReact size={40} />, color: 'text-teal-500' },
  { name: 'HTML', icon: <FaHtml5 size={40} />, color: 'text-orange-500' },
  { name: 'CSS', icon: <FaCss3Alt size={40} />, color: 'text-blue-600' },
  { name: 'Node.js', icon: <FaNodeJs size={40} />, color: 'text-green-600' },
  { name: 'SQL', icon: <SiMysql size={40} />, color: 'text-green-500' },
  { name: 'MongoDB', icon: <SiMongodb size={40} />, color: 'text-green-700' },
  { 
    name: 'Power BI', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
        <path fill="#eda503" d="M38,44H26c-0.552,0-1-0.448-1-1V5c0-0.552,0.448-1,1-1h12c0.552,0,1,0.448,1,1v38	C39,43.552,38.552,44,38,44z"></path>
        <path fill="#ffca28" d="M30,44H18c-0.552,0-1-0.448-1-1V15c0-0.552,0.448-1,1-1h12c0.552,0,1,0.448,1,1v28	C31,43.552,30.552,44,30,44z"></path>
        <path fill="#ffe082" d="M22,44H10c-0.552,0-1-0.448-1-1V25c0-0.552,0.448-1,1-1h12c0.552,0,1,0.448,1,1v18	C23,43.552,22.552,44,22,44z"></path>
      </svg>
    ), 
    color: 'text-indigo-500' 
  },
];

const Tech = () => {
  return (
    <section id="skills" className="py-8 text-black-800">
      <h2 className={`${styles.sectionHeadText} text-center mb-2`}>
        Skills
      </h2>
<br/>
<br/>
      <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {skillIcons.map((skill, index) => (
          <div
            key={index}
            className={`skill-icon ${skill.color} flex flex-col items-center justify-center transform transition-all duration-300 
            hover:scale-110 hover:${skill.color.split('-')[0]}-700 hover:shadow-lg hover:bg-opacity-80 relative`}
          >
            <div className="text-4xl">{skill.icon}</div>
            <h4 className="text-sm mt-2 font-medium">{skill.name}</h4>

            {/* Smoke Effect (blur/box-shadow) */}
            <div className="absolute inset-0 bg-opacity-50 bg-gray-600 blur-lg opacity-0 transition-all duration-300 group-hover:opacity-100"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "");
