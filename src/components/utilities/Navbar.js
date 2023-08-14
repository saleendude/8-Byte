import React from "react";
import {
  MainContainer,
  LogoContainer,
  LinksContainer,
  NavLinks,
} from "../styles/Navbar.styled";
import { animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <MainContainer>
      <LogoContainer to={"/"}>
        <img
          //   src={`${process.env.PUBLIC_URL}/assets/images/Logos/8ByteLabs_black_with_border.svg`}
          src={`${process.env.PUBLIC_URL}/assets/images/Logos/8ByteLabs_invert.svg`}
          alt=""
          onClick={toggleHome}
        />
      </LogoContainer>
      <LinksContainer>
        <ul>
          <li>
            <NavLinks
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              activeClass="active"
            >
              HOME
            </NavLinks>{" "}
          </li>
          <li>
            <NavLinks
              to="what"
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
            >
              WHAT WE DO
            </NavLinks>{" "}
          </li>
          <li>
            <NavLinks to="how">HOW WE DO IT</NavLinks>{" "}
          </li>
          <li>
            <NavLinks
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
            >
              PROJECTS
            </NavLinks>{" "}
          </li>
          <li>
            <NavLinks to="mints">MINTS</NavLinks>{" "}
          </li>
          <li>
            <NavLinks to="socials">SOCIALS</NavLinks>{" "}
          </li>
        </ul>
      </LinksContainer>
    </MainContainer>
  );
};

export default Navbar;
