import { Button, Stack } from "react-bootstrap";
import "./aboutMe.css";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { LaptopAnimation } from "../../Animations";
import { useContext, useRef } from "react";
import { GeneralContext } from "../../Contexts";
import { motion } from "framer-motion";
import { pageVariants } from "../../Data";
import { Header } from "../../Components";
import { useNavigate } from "react-router-dom";

const AboutMe = () => {
  // window width
  const { screenWidth } = useContext(GeneralContext);
  const navigate = useNavigate();

  // laptop animation
  const laptopAnimRef = useRef<LottieRefCurrentProps>(null);

  return (
    <motion.section className="section mb-4" id="aboutme" {...pageVariants}>
      <Header title="About Me" />
      <Stack direction={`${screenWidth <= 1366 ? "vertical" : "horizontal"}`}>
        <div style={{ flex: "0.9" }} className="px-5">
          <Stack className="mt-5 fs-4 lh-sm" gap={4}>
            <p>
              Hi there! I'm Beka Aladashvili, a passionate{" "}
              <strong className="fw-bold">Web Developer</strong> based in
              Tbilisi. With a background in Information Techonolgies. I
              Specialize in creating dynamic and responsive web applications. My
              expertise spans across a diverse tech stack including React, Node,
              Express and React Native.
            </p>
            <p>
              I'm a student of Business and Technology University and have
              worked on several projects developing a wide range of applicatons.
              My technical skills also encompass UI/UX design principles,
              enabling me to craft user-friendly interfaces.
            </p>
            <p>
              Beyond Front-End projects, i enjoy solving leetcode problems,
              playing chess and exploring new technologies.
            </p>
            <p>
              Feel free to get in touch if you'd like to collaborate, chat about
              tech, or let's play chess!
            </p>
          </Stack>
          <Stack className="mt-4 justify-content-md-start justify-content-center" direction="horizontal" gap={4}>
            <Button onClick={() => navigate("/MyPortfolio/projects")} size={screenWidth <= 576 ? "sm" : "lg"} variant="outline-primary" className="text-white">
              My Projects
            </Button>
            <Button onClick={() => navigate("/MyPortfolio/contact")} size={screenWidth <= 576 ? "sm" : "lg"} variant="outline-primary" className="text-white">
              Contact
            </Button>
          </Stack>
        </div>
        <Lottie
          style={{ flex: "1" }}
          lottieRef={laptopAnimRef}
          animationData={LaptopAnimation}
        />
      </Stack>
    </motion.section>
  );
};

export default AboutMe;
