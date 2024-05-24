import "./navLinks.css";
import { Nav } from "react-bootstrap";

const NavLinks = (props: {
  clickAction: (id: string) => void,
  gap: number,
  direction: string
}) => {
  const {clickAction, gap, direction} = props;

  return (
    <Nav variant="underline" className={`fs-4 gap-${gap} ${direction === "column" && "flex-column"}`}>
      <Nav.Link className="text-center" onClick={() => clickAction("aboutme")}>About me</Nav.Link>
      <Nav.Link className="text-center" onClick={() => clickAction("skills")}>Skills</Nav.Link>
      <Nav.Link className="text-center" onClick={() => clickAction("projects")}>Projects</Nav.Link>
      <Nav.Link className="text-center" onClick={() => clickAction("contact")}>Contact</Nav.Link>
    </Nav>
  );
}
 
export default NavLinks;