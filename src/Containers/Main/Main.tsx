import { Stack } from "react-bootstrap";
import "./main.css";
import * as Components from "../../Components";

const Main = () => {
  return (
    <Stack>
      <Components.AboutMe />
      <Components.Skills />
      <Components.Projects />
    </Stack>
  );
}
 
export default Main;