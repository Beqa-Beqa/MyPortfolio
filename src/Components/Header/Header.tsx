import { Button, Stack } from "react-bootstrap";
import "./header.css";
import { useNavigate } from "react-router-dom";

const Header = (props: {
  title: string
}) => {
  const navigate = useNavigate();

  return (
    <Stack direction="horizontal" className="overflow-bg justify-content-between px-lg-5 px-2 px-md-3 py-2 rounded-bottom-3">
      <Button onClick={() => navigate("/MyPortfolio")} variant="outline-info text-white">
        Homepage
      </Button>
      <h1 className="header fs-4">{props.title}</h1>
    </Stack>
  );
}
 
export default Header;