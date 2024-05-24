import { Stack } from "react-bootstrap";
import "./header.css";
import { useCallback, useContext } from "react";
import { NavLinks } from "../../Components";
import { GeneralContext } from "../../Contexts";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { pageVariants } from "../../Data";

const Header = () => {
  const { screenWidth } = useContext(GeneralContext);
  const navigate = useNavigate();

  // navbar links generator
  const navLinks = useCallback(
    (direction: "row" | "column" = "row", gap: number = 3) => {
      // Navigate to given page from id
      const clickAction = (path: string) => navigate(path);

      return (
        <NavLinks clickAction={clickAction} direction={direction} gap={gap} />
      );
    },
    [navigate]
  );

  return (
    <motion.section
      id="header"
      className="d-flex align-items-center"
      {...pageVariants}
    >
      <Stack direction={screenWidth < 992 ? "vertical" : "horizontal"} className="w-100 justify-content-between">
        <div className="w-100 h-100 overflow-bg d-flex justify-content-center align-items-center">
          <h1 className="title display-3 text-center">Beka Aladashvili</h1>
        </div>
        <Stack className="w-100 h-100 align-items-center justify-content-center position-relative overflow-hidden" gap={5}>
          <div className="w-100 video-container position-absolute end-0">
            <video className="overflow-hidden" width="100%" preload="auto" autoPlay loop muted>
              <source src="https://videos.pexels.com/video-files/7989667/7989667-hd_1080_1920_25fps.mp4" type="video/mp4" />
            </video>
          </div>
          <h2 className="fst-italic fs-1 text-center mt-5 mt-lg-0">Web Developer</h2>
          {screenWidth < 992 ? navLinks("column", 4) : navLinks("row", 5)}
        </Stack>
      </Stack>
    </motion.section>
  );
};

export default Header;
