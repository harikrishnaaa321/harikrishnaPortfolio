import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-16">
      <h2 className={`${styles.sectionHeadText} text-center mb-8`}>Skills</h2>

      <div className="flex flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28 flex justify-center items-center" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
