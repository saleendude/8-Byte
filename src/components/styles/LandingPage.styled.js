import styled from "styled-components";
import NostroHeavy from "../../fonts/NostromoOutline/NostromoOutline-HeavyOblique.otf";
import NostroRegular from "../../fonts/NostromoOutline/NostromoRegular-Heavy.otf";
import BasementGro from "../../fonts/basement_grotesque/BasementGrotesque-Black_v1.202.otf";
import Satoshi from "../../fonts/Satoshi_Complete/Fonts/OTF/Satoshi-Regular.otf";

export const HomepageContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;

  @font-face {
    font-family: NostroHeavy;
    src: url(${NostroHeavy}) format("opentype");
  }
  @font-face {
    font-family: NostroRegular;
    src: url(${NostroRegular}) format("opentype");
  }
  @font-face {
    font-family: BasementGro;
    src: url(${BasementGro}) format("opentype");
  }
  @font-face {
    font-family: Satoshi;
    src: url(${Satoshi}) format("opentype");
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const NavbarContainer = styled.div`
  margin-top: 3rem;
  margin-left: 1.5rem;
  padding: 0.1rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  img {
    max-width: 8%;
    padding: 0.2rem;
    filter: invert(100%);
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-left: 0;
    margin-top: 1rem;
    top: 0vh;
    left: 35vw;
    img {
      max-width: 50%;
      filter: invert(100%);
    }
  }
`;

export const HeroSection = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    &:after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: "";
      background: rgb(8, 13, 17);
      background: linear-gradient(
        180deg,
        rgba(8, 13, 17, 0) 10%,
        rgba(8, 11, 14, 1) 100%
      );
    }
  }
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  //   -o-object-fit: fill;
  //   object-fit: fill;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const TextContainer = styled.div`
  // display: flex;
  // font-family: Barcode, sans-serif;

  position: absolute;
  left: 0;
  top: 60vh;
  max-width: 40%;
  margin-left: 1.5rem;
  margin-bottom: 1rem;

  p {
    font-size: 8vh;
    color: white;
  }

  h1 {
    font-family: NostroHeavy;
    font-size: 9vh;
    font-style: italic;
    color: rgba(255, 255, 255, 0.7);
    text-shadow: -2px 2px 3px rgba(0, 0, 0, 1);
    span {
      color: #fff;
      font-size: 9vh;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    max-width: 100%;
    // margin-left: 0.2rem;

    left: 0vw;
    top: 60vh;

    h1 {
      font-size: 5vh;
      font-family: NostroRegular;
      color: white;
      // text-align: center;
      span {
        font-size: 5vh;
      }
    }
  }
`;

export const ModelContainer = styled.div`
  // border: 1px solid green;
  z-index: 2;
  // max-width: 12%;
  height: 50vh;
  width: 18vw;
  //   width: auto;
  position: absolute;
  top: 4vh;
  left: 43vw;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;
export const ModelWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
