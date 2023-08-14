import React from "react";
import {
  MainContainer,
  LeftContainer,
  RightContainer,
  HeroImgContainer,
  TitleContainer,
} from "../../styles/Basic/BasicFirstPage.styled";

const BasicFirstPage = () => {
  return (
    <MainContainer id="home">
      {/* <LeftContainer>
        
      </LeftContainer>
      <RightContainer>
        <HeroImgContainer>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/BGs/15.png`}
            alt=""
          />
        </HeroImgContainer>
      </RightContainer> */}
      <HeroImgContainer>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/BGs/11.png`}
          alt=""
        />
      </HeroImgContainer>
      <TitleContainer>
        <h1>Your NFT collection.</h1>
        <h1>Now in AR.</h1>
      </TitleContainer>
    </MainContainer>
  );
};

export default BasicFirstPage;
