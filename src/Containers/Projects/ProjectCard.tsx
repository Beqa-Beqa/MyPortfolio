import "./projects.css";

const ProjectCard = (props: {
  image: string,
  title: string,
  description: string,
  urls?: {
    live?: string,
    github?: string
  }
}) => {
  const {image, title, description, urls} = props;

  return (
    <div className="card">
      <div className="face face1">
        <div className="content">
          <img src={image} alt="project cover" />
          <h3>{title}</h3>
        </div>
      </div>
      <div className="face face2">
        <div className="content">
          <p>{description}</p>
            {
              urls?.live && <a target="_blank" className="me-2" href={urls.live}>Visit Live</a>
            }
            {
              urls?.github && <a target="_blank" href={urls.github}>Github Repo</a>
            }
        </div>
      </div>
    </div>
  );
}
 
export default ProjectCard;