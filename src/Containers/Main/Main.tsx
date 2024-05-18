import { Stack } from "react-bootstrap";
import "./main.css";
import * as Components from "../../Components";

const Main = () => {
  return (
    <Stack>
      <Components.AboutMe />
      <Components.Skills />
      <section id="projects"></section>
      <section id="contact"></section>
    </Stack>
  );
}
 
export default Main;