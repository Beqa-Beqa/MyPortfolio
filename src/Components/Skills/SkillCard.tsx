import "./skills.css";

const SkillCard = (props: {
  imgUrl: string,
  text?: string
}) => {
  return (
    <div className="item position-relative" style={{backgroundImage: `url(${props.imgUrl})`}}>
      {props.text && <span style={{bottom: "-35px"}} className="position-absolute fs-5 text-center w-100">{props.text}</span>}
    </div>
  );
}
 
export default SkillCard;