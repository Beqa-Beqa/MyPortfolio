import SkillCard from "./SkillCard";
import "./skills.css";

const Skills = () => {
  return (
    <section id="skills">
      <h1 className="fs-1 header text-center mb-5">Skills</h1>
      {/* Wave anim below*/}
      <div className="wrapper gap-5 w-lg-100">
        <div className="items mb-3 mb-sm-4 mb-lg-5 mt-lg-4 mt-xxl-5">
          <SkillCard imgUrl="https://miro.medium.com/v2/resize:fit:720/format:webp/1*x0d41ns8PTQZz4a3VbMrBg.png" text="React.js" />
          <SkillCard imgUrl="https://www.workinggears.com/images/services/yuxa9EAfarIcX9EK8Ei1JSjwRnP7e0-metaanMtdHMuanBn-.jpg" text="TS & JS" />
          <SkillCard imgUrl="https://www.w3.org/html/logo/img/html5-topper.png" text="HTML5" />
          <SkillCard imgUrl="https://www.dice.com/binaries/content/gallery/dice/insights/2020/07/Bootstrap.png" text="Bootstrap" />
          <SkillCard imgUrl="https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo.png" text="CSS" />
          <SkillCard imgUrl="https://embed-ssl.wistia.com/deliveries/7a380179c3a5ee2d36d3b8748022ac22e040104b.jpg" text="D3.js" />
        </div>
        <div className="items mt-3 mt-sm-4 mt-xxl-5">
          <SkillCard imgUrl="https://miro.medium.com/v2/resize:fit:720/format:webp/1*mtsk3fQ_BRemFidhkel3dA.png" text="Git & GitHub" />
          <SkillCard imgUrl="https://miro.medium.com/v2/resize:fit:640/format:webp/0*vq-JSMynSHUPXx70" text="Express.js" />
          <SkillCard imgUrl="https://i.pinimg.com/736x/2f/9c/11/2f9c11f9e55efbf1791f12c06d60729b.jpg" text="Python" />
          <SkillCard imgUrl="https://avangelstech.com/wp-content/uploads/2023/09/gcp-firebase.png" text="Firebase" />
          <SkillCard imgUrl="https://cdn-images-1.medium.com/v2/resize:fit:408/1*1inyeCa1-NL7dyLeX1dPzQ.png" text="SQL & NoSQL" />
          <SkillCard imgUrl="https://hayqsystem.am/wp-content/uploads/2024/02/jhgj-4.jpg" text="C# Fundamentals" />
        </div>
      </div>
      {/* Wave anim above*/}
    </section>
  );
}
 
export default Skills;