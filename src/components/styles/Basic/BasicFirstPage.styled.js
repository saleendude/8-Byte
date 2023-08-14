import styled from "styled-components";
import NostroHeavy from "../../../fonts/NostromoOutline/NostromoOutline-HeavyOblique.otf";
import NostroRegular from "../../../fonts/NostromoOutline/NostromoRegular-Heavy.otf";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  //   border: 1px solid green;

  position: relative;
  @font-face {
    font-family: NostroHeavy;
    src: url(${NostroHeavy}) format("opentype");
  }
  @font-face {
    font-family: NostroRegular;
    src: url(${NostroRegular}) format("opentype");
  }
`;

export const HeroImgContainer = styled.div`
  width: 73vw;
  height: 68vh;

  position: absolute;
  top: 5vh;
  right: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TitleContainer = styled.div`
  z-index: 2;
  position: absolute;
  max-width: 20%;
  top: 25vh;
  left: 4.5vw;

  h1 {
    font-family: BasementGro;
    font-size: 5vh;
    margin-bottom: 1rem;
    color: rgba(0, 0, 0, 0.8);
  }
`;
