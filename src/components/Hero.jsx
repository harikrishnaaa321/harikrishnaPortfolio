import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

// Icon components
import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa"; // Importing only the available icons
import { SiLeetcode } from "react-icons/si"; // Importing LeetCode icon

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      {/* Container for the entire content */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col sm:flex-row items-start gap-5 flex-wrap`}
      >
        {/* Image */}
        <div className="flex flex-col justify-center items-center sm:mr-10 mb-5 sm:mb-0">
          <img
            src="harikrishna_battula.jpg"
            alt="Hari Krishna Battula"
            className="w-[30%] h-[30%] sm:w-40 sm:h-40 rounded-full object-cover border-2 border-white"
          />
        </div>

        {/* Text and Social Links */}
        <div className="flex-1 text-center sm:text-left">
          <h1 className={`text-white text-2xl sm:text-4xl font-bold`}>
            Hi, I'm <span className="text-[#915EFF]">Hari Krishna Battula</span>
          </h1>
          <p className={`mt-2 text-white-100 text-sm sm:text-base`}>
            I'm a passionate developer who is good at building web applications,{" "}
            <br className="sm:block hidden" />
            crafting machine learning models.
          </p>

          {/* Social Links and Resume Button */}
          <div className="mt-5 flex gap-6 flex-wrap justify-center sm:justify-start">
            {[
              { href: "https://github.com/harikrishnaaa321", icon: <FaGithub size={30} />, label: "GitHub" },
              { href: "https://www.linkedin.com/in/hari-krishna-battula-788313248/", icon: <FaLinkedin size={30} />, label: "LinkedIn" },
              { href: "https://leetcode.com/u/bharikrishna64/", icon: <SiLeetcode size={30} />, label: "LeetCode" },
              { href: "https://drive.google.com/file/d/1pNmZCuHqZBRe7oNX3Gq56mx-w9tnBGmk/view?usp=sharing", icon: <FaFileDownload size={30} />, label: "Resume" },
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
<br/>
      {/* ComputersCanvas: Make it smaller on mobile */}
      
  {/* ComputersCanvas: Handle mobile visibility */}
<div className="mt-10">
  <ComputersCanvas />
</div>


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
