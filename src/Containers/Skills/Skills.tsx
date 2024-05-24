import { Header } from "../../Components";
import { pageVariants, skillsData } from "../../Data";
import SkillCard from "./SkillCard";
import "./skills.css";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.section
      id="skills"
      {...pageVariants}
    >
      <Header title="Skills" />
      {/* Wave anim below*/}
      <div className="wrapper gap-5 w-lg-100">
        {skillsData?.length
          ? skillsData.map((skills: Skill[], index: number) => {
              return (
                <div
                  key={index}
                  className="items mb-3 mb-sm-4 mb-lg-5 mt-lg-4 mt-xxl-5"
                >
                  {skills?.map((skill: Skill, index: number) => {
                    return (
                      <SkillCard
                        key={index}
                        imgUrl={skill.imgUrl}
                        text={skill.text}
                      />
                    );
                  })}
                </div>
              );
            })
          : null}
      </div>
      {/* Wave anim above*/}
    </motion.section>
  );
};

export default Skills;
