import { motion } from "framer-motion";
import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";

// Icon components
import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si"; // Importing LeetCode icon

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      {/* Container for the entire content */}
      <div
        className={`absolute inset-0 top-0.5/4 max-w-7xl mx-auto ${styles.paddingX} flex flex-col justify-center items-center gap-5`}
      >
        {/* Profile Image */}
        <div className="flex justify-center items-center w-full mb-5">
          <img
            src="harikrishna_battula.jpg"
            alt="Hari Krishna Battula"
            className="w-[100px] h-[100px] sm:w-40 sm:h-40 rounded-full object-cover border-2 border-white"
          />
        </div>

        {/* Text and Social Links */}
        <div className="text-center">
          <h1 className={`text-white text-2xl sm:text-4xl font-bold`}>
            Hi, I'm <span className="text-[#915EFF]">Hari Krishna Battula</span>
          </h1>
          <p className={`mt-2 text-white-100 text-sm sm:text-base`}>
            I'm a passionate developer who is good at building web applications,{" "}
            <br className="sm:block hidden" />
            crafting machine learning models.
          </p>

          {/* Social Links and Resume Button */}
          <div className="mt-5 flex gap-6 flex-wrap justify-center">
            {[
              { href: "https://github.com/harikrishnaaa321", icon: <FaGithub size={30} />, label: "GitHub" },
              { href: "https://www.linkedin.com/in/hari-krishna-battula-788313248/", icon: <FaLinkedin size={30} />, label: "LinkedIn" },
              { href: "https://leetcode.com/u/bharikrishna64/", icon: <SiLeetcode size={30} />, label: "LeetCode" },
              { href: "https://drive.google.com/file/d/1B1B0oIqMB6C3CG3bR3j5smQMo2a7JPRq/view?usp=sharing", icon: <FaFileDownload size={30} />, label: "Resume" },
            ].map(({ href, icon, label }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#0A66C2] z-10"
                key={label}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ComputersCanvas (optional - you can make it smaller on mobile if needed) */}
     
      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[30px] h-[40px] sm:w-[35px] sm:h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
