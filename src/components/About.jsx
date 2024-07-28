import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "./styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rouned-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}> Overview. </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        My name is Kira Yoshikage. I'm 33 years old. My house is in the
        northeast section of Morioh, where all the villas are, and I am not
        married. I work as an employee for the Kame Yu department stores, and I
        get home every day by 8 PM at the latest. I don't smoke, but I
        occasionally drink. I'm in bed by 11 PM, and make sure I get eight hours
        of sleep, no matter what. After having a glass of warm milk and doing
        about twenty minutes of stretches before going to bed, I usually have no
        problems sleeping until morning. Just like a baby, I wake up without any
        fatigue or stress in the morning. I was told there were no issues at my
        last check-up. I'm trying to explain that I'm a person who wishes to
        live a very quiet life. I take care not to trouble myself with any
        enemies, like winning and losing, that would cause me to lose sleep at
        night. That is how I deal with society, and I know that is what brings
        me happiness. Although, if I were to fight I wouldn't lose to anyone
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
