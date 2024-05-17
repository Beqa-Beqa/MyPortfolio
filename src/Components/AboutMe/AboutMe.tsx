import { Button, Stack } from "react-bootstrap";
import "./aboutMe.css";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { LaptopAnimation } from "../../Animations";
import { useContext, useRef } from "react";
import { GeneralContext } from "../../Contexts";

const AboutMe = () => {
  // window width
  const { screenWidth } = useContext(GeneralContext);

  // laptop animation
  const laptopAnimRef = useRef<LottieRefCurrentProps>(null);

  return (
    <section className="section" id="about-me">
      <Stack direction={`${screenWidth <= 768 ? "vertical" : "horizontal"}`}>
        <div style={{flex: "0.9"}}>
          <h1 className="fs-1 about-me">About me</h1>
          <Stack className="mt-5 fs-4 lh-sm" gap={4}>
            <p>
              Hi there! I'm Beka Aladashvili, a passionate <strong className="fw-bold">Web Developer</strong> based in Tbilisi.
              With a background in Information Techonolgies. I Specialize in creating dynamic and responsive web applications.
              My expertise spans across a diverse tech stack including React, Node, Express and React Native.
            </p>
            <p>
              I'm a student of Business and Technology University and have worked on several projects
              developing a wide range of applicatons. My technical skills also encompass UI/UX design principles, enabling me to craft 
              user-friendly interfaces.
            </p>
            <p>
              Beyond coding, i enjoy playing chess and exploring new technologies.
            </p>
            <p>
            Feel free to get in touch if you'd like to collaborate, chat about tech, or let's play chess!
            </p>
            <Stack className="justify-content-end" direction="horizontal" gap={3}>
              <Button onClick={() => {
                document.getElementById("projects")?.scrollIntoView({behavior: "smooth"});
              }} size="lg" variant="outline-light">
                View My Work
              </Button>
              <Button onClick={() => {
                document.getElementById("contact")?.scrollIntoView({behavior: "smooth"});
              }} size="lg" variant="outline-light">
                Contact Me
              </Button>
            </Stack>
          </Stack>
        </div>
        <Lottie style={{flex: "1"}} lottieRef={laptopAnimRef} animationData={LaptopAnimation} />
      </Stack>
    </section>
  );
};

export default AboutMe;
