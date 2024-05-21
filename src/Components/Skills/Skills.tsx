import { skillsData } from "../../Data";
import SkillCard from "./SkillCard";
import "./skills.css";

const Skills = () => {
  return (
    <section id="skills">
      <h1 className="fs-1 header text-center mb-5">Skills</h1>
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
    </section>
  );
};

export default Skills;
