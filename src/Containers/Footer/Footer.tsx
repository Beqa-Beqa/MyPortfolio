import { Stack } from "react-bootstrap";
import "./footer.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { motion } from "framer-motion";
import { pageVariants } from "../../Data";
import { Header } from "../../Components";
import AestheticBackground from "../../Assets/Images/Aesthetic-Background.jpg";
import { useContext } from "react";
import { GeneralContext } from "../../Contexts";

const Footer = () => {
  const {screenWidth} = useContext(GeneralContext);
  const currentYear = new Date().getFullYear();

  return (
    <motion.section
      id="footer"
      className="d-flex flex-column pb-5"
      {...pageVariants}
    >
      <Header title="Contact" />
      <Stack direction={screenWidth < 992 ? "vertical" : "horizontal"} gap={3} className="justify-content-center px-5 mt-5">
        <div className="w-100 image-wrapper d-flex flex-column align-items-center justify-content-center">
          <img className="w-100 m-4 px-4" src={AestheticBackground} alt="aesthetic retro style view" />
        </div>
        <Stack className="w-100 justify-content-center" gap={3}>
          <div className="d-flex justify-content-center gap-5 mb-4">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/beka-aladashvili-30619525b/"
              className="contact-icon"
            >
              <FaLinkedin className="contact-icon" />
            </a>
            <a
              target="_blank"
              href="https://github.com/Beqa-Beqa"
              className="contact-icon"
            >
              <FaGithub className="contact-icon" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/_bekkaaladashvili_/"
              className="contact-icon"
            >
              <FaInstagram className="contact-icon" />
            </a>
            <a
              target="_blank"
              href="mailto:beka.aladashvili.383@gmail.com?subject=Job%20Offer"
              className="contact-icon"
            >
              <IoMdMail className="contact-icon" />
            </a>
          </div>
          <p
            style={{ fontSize: 18 }}
            className="d-block text-center fs-lg-5 lh-sm fst-italic mb-5"
          >
            If you are looking for a dedicated and skilled developer to bring
            your project to life, let's connect!
            <br />
            With a passion for coding and a commitment to delivering
            high-quality solutions,
            <br />I am here to help you achieve your goals. Reach out to discuss
            your ideas and how we can work together to make them a reality.
          </p>
          <h3 className="d-block display-5 title text-center">Beka Aladashvili</h3>
          <p className="d-block fs-2 title text-center">Let's Code Together</p>
          <p className="d-block text-center fst-italic">
            &copy; {currentYear} Beka Aladashvili. All rights reserved.
          </p>
        </Stack>  
      </Stack>  
    </motion.section>
  );
};

export default Footer;
