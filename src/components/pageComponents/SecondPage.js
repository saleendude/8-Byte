import React from "react";
import {
  MainContainer,
  HeroSection,
  VideoBg,
  TitleContainer,
  InfoContainer,
  ButtonContainer,
  DescContainer,
  Description,
  ScrollButton,
  EmphasisDiv,
  EmphasisText,
} from "../styles/SecondPage.styled";

const SecondPage = () => {
  return (
    <MainContainer>
      <HeroSection>
        <VideoBg
          autoPlay
          loop
          muted
          src={`${process.env.PUBLIC_URL}/assets/videos/page2_4.mp4`}
          type="video/mp4"
        ></VideoBg>
        <TitleContainer>
          <h1>What We Do</h1>
        </TitleContainer>
        <InfoContainer>
          <DescContainer>
            <Description>
              <p>
                <span>8Byte Labs </span> is an NFT design studio and tooling lab
                focusing on getting NFT creators the infrastructure needed to
                bring their art to life.
              </p>
              <br />
              <p>
                Imagine if your NFTs were no longer confined to the 2D realm?
              </p>
              <p>What if they were more than just expensive JPEGs?</p>
              <br />
              <EmphasisDiv>
                <p>
                  As our inital release in the ecosystem we've created the
                  world's first{" "}
                  <EmphasisText>
                    NFT-focused Augmented Reality Engine
                  </EmphasisText>
                  . A library capable of converting entire collections of 2D
                  artwork into intricate 3D models to use in conjunction with
                  our fully cross platform rendering engine.
                </p>
              </EmphasisDiv>
              <br />
            </Description>
            <ButtonContainer>
              <ScrollButton
                to="process"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                activeClass="active"
                right="true"
              >
                AR Engine
              </ScrollButton>
              <ScrollButton
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                activeClass="active"
                right="true"
              >
                AR Projects
              </ScrollButton>
              <ScrollButton
                to="mints"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                activeClass="active"
              >
                Upcoming Mints
              </ScrollButton>
            </ButtonContainer>
          </DescContainer>
        </InfoContainer>
      </HeroSection>
    </MainContainer>
  );
};

export default SecondPage;
