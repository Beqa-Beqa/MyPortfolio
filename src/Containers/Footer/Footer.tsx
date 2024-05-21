import { Col, Container, Row, Stack } from "react-bootstrap";
import "./footer.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact">
      <Stack gap={5}>
        <Container fluid>
          <Row>
            <Col>
              <hr className="d-none d-sm-block" />
            </Col>
            <Col>
              <Stack direction="horizontal" className="justify-content-center" gap={5}>
                <a target="_blank" href="https://www.linkedin.com/in/beka-aladashvili-30619525b/" className="icon-wrapper">
                  <FaLinkedin className="icon" />
                </a>
                <a target="_blank" href="https://github.com/Beqa-Beqa" className="icon-wrapper">
                  <FaGithub className="icon" />
                </a>
                <a target="_blank" href="https://www.instagram.com/_bekkaaladashvili_/" className="icon-wrapper">
                  <FaInstagram className="icon" />
                </a>
                <a target="_blank" href="mailto:beka.aladashvili.383@gmail.com?subject=Job%20Offer" className="icon-wrapper">
                  <IoMdMail className="icon" />
                </a>
              </Stack>
            </Col>
            <Col>
              <hr className="d-none d-sm-block" />
            </Col>
          </Row>
        </Container>
        <Stack gap={4}>
          <p style={{fontSize: 18}} className="text-center fs-lg-5 lh-sm fst-italic">If you are looking for a dedicated and skilled developer to bring your project to life, let's connect!<br/>With a passion for coding and a commitment to delivering high-quality solutions,<br/>I am here to help you achieve your goals. Reach out to discuss your ideas and how we can work together to make them a reality.</p>
          <h3 className="display-5 title text-center">Beka Aladashvili</h3>
          <p className="text-center fst-italic">&copy; {currentYear} Beka Aladashvili. All rights reserved.</p>
        </Stack>
      </Stack>
    </section>
  );
}
 
export default Footer;