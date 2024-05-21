import "./projects.css";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../../Data";

const Projects = () => {
  return (
    <section id="projects" style={{marginTop: 150}}>
      <h1 className="fs-1 text-end header mb-5">Projects</h1>
      <div className="container">
        {
          projectsData?.length ?
            projectsData.map((data: Project, index: number) => {
              return <ProjectCard
                key={index}
                image={data.image}
                title={data.title}
                description={data.description}
                urls={{
                  github: data.urls?.github,
                  live: data.urls?.live
                }}
              />
            })
          : null
        }
      </div>
    </section>
  );
}
 
export default Projects;