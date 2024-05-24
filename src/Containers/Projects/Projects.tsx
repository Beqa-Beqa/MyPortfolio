import "./projects.css";
import ProjectCard from "./ProjectCard";
import { pageVariants, projectsData } from "../../Data";
import { motion } from "framer-motion";
import { Header } from "../../Components";

const Projects = () => {
  return (
    <motion.section
      id="projects"
      {...pageVariants}
    >
      <Header title="Projects" />
      <div className="h-100 d-flex align-items-center justify-content-center">
        <div style={{width: projectsData?.length * 350}} className="project-container d-flex gap-5 p-5">
          {projectsData?.length
            ? projectsData.map((data: Project, index: number) => {
                return (
                  <ProjectCard
                    key={index}
                    image={data.image}
                    title={data.title}
                    description={data.description}
                    urls={{
                      github: data.urls?.github,
                      live: data.urls?.live,
                    }}
                    />
                  );
                })
            : null}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
