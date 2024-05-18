import { Stack } from "react-bootstrap";
import "./header.css";
import { useCallback, useContext, useState } from "react";
import { GeneralContext } from "../../Contexts";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { NavLinks } from "../../Components";

const Header = () => {
  // screen width
  const { screenWidth } = useContext(GeneralContext);
  // burger menu state
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false);

  // navbar links generator
  const navLinks = useCallback(
    (direction: "row" | "column" = "row", gap: number = 3) => {
      // close burger menu and scroll to element with id smoothly
      const clickAction = (id: string) => {
        setIsBurgerMenuOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      };

      return (
        <NavLinks clickAction={clickAction} direction={direction} gap={gap} />
      );
    },
    []
  );

  return (
    <Stack
      direction="horizontal"
      className="navbar text-center text-lg-start justify-content-between position-fixed top-0 start-0 w-100 px-xl-5 px-md-4 px-sm-2 px-1 py-2"
    >
      <div
        style={{ filter: "blur(100px)" }}
        className="w-100 position-absolute top-0 start-0"
      />
      <div className="tracking-in-expand align-self-start">
        <h1 className="title display-5">Beka Aladashvili</h1>
      </div>
      {screenWidth <= 768 ? (
        <>
          <RxHamburgerMenu
            onClick={() => setIsBurgerMenuOpen(true)}
            className="icon"
          />
          <div className={`burger-menu pt-2 ${isBurgerMenuOpen && "active"}`}>
            <MdClose
              onClick={() => setIsBurgerMenuOpen(false)}
              className="icon mt-2 me-3 position-absolute end-0"
            />
            <div className="text-start px-3 pt-1 mt-4">
              {navLinks("column")}
            </div>
          </div>
        </>
      ) : (
        navLinks("row", 5)
      )}
    </Stack>
  );
};

export default Header;
