import "./navLinks.css";
import { Nav } from "react-bootstrap";

const NavLinks = (props: {
  clickAction: (id: string) => void,
  gap: number,
  direction: string
}) => {
  const {clickAction, gap, direction} = props;

  return (
    <Nav variant="underline" className={`fs-5 gap-${gap} ${direction === "column" && "flex-column"}`}>
      <Nav.Link onClick={() => clickAction("about-me")}>About me</Nav.Link>
      <Nav.Link onClick={() => clickAction("skills")}>Skills</Nav.Link>
      <Nav.Link onClick={() => clickAction("projects")}>Projects</Nav.Link>
      <Nav.Link onClick={() => clickAction("contact")}>Contact</Nav.Link>
    </Nav>
  );
}
 
export default NavLinks;