import React from "react";
import Noun69Viewer from "../modelViewers/Noun69Viewer";
import Noun87Viewer from "../modelViewers/Noun87Viewer";
import {
  NavbarContainer,
  HomepageContainer,
  HeroSection,
  VideoBg,
  TextContainer,
  ModelContainer,
} from "../styles/LandingPage.styled";

const LandingPage = () => {
  return (
    <HomepageContainer>
      <NavbarContainer>
        <a href="/">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/Logos/8ByteLabs_logo.svg`}
            alt=""
          />
        </a>
      </NavbarContainer>
      <HeroSection>
        <VideoBg
          autoPlay
          loop
          muted
          src={`${process.env.PUBLIC_URL}/assets/videos/updated_herosection.mp4`}
          type="video/mp4"
        ></VideoBg>
        <ModelContainer>
          <Noun69Viewer />
        </ModelContainer>
        <ModelContainer style={{ top: "8vh", left: "60vw" }}>
          <Noun87Viewer />
        </ModelContainer>
      </HeroSection>
      <TextContainer>
        {/* <GlitchText color1={"#513dff"} color2="#7a334c" component="p">
          <p>
            Bringing your NFTs to Life <br /> ⇓
          </p>
        </GlitchText> */}
        {/* <h1>Your NFT collection.</h1>
        <h1>Now in AR.</h1> */}
        <h1>Your NFT collection.</h1>
        <h1>
          Now in <span>AR_ </span>{" "}
        </h1>
      </TextContainer>
    </HomepageContainer>
  );
};

export default LandingPage;
