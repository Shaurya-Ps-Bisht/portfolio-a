import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import Ball from "./canvas/Ball";
import { isMobile } from "react-device-detect";

import { BallCanvas } from "./canvas";
const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div
          className="w-28 h-28 flex items-center justify-center"
          key={technology.name}
        >
          {isMobile ? (
            <img
              src={technology.icon} // Assuming `technology.icon` is the path to the PNG image
              alt={technology.name}
              className="w-full h-full object-contain"
            />
          ) : (
            <BallCanvas icon={technology.icon} />
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
