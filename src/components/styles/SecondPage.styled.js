import styled from "styled-components";
// import NostroHeavy from "../../fonts/NostromoOutline/NostromoOutline-Heavy.otf";
// import NostroLight from "../../fonts/NostromoOutline/NostromoRegular-Light.otf";
// import Satoshi from "../../fonts/Satoshi_Complete/Fonts/OTF/Satoshi-Regular.otf";
// import BasementGro from "../../fonts/basement_grotesque/BasementGrotesque-Black_v1.202.otf";

import { Link as LinkS } from "react-scroll";
export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  display: flex;
  flex-direction: row;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    background-color: #f3f2f3;
    background: url(${process.env.PUBLIC_URL}/assets/images/BGs/metal4.jpg)
      no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: static;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex: 1;
  // border: 1px solid red;
  justify-content: center;
  align-items: center;
`;

export const RightContainer = styled.div`
  display: flex;
  flex: 1;
  // border: 1px solid blue;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

// export const InfoContainer = styled.div`
//   padding: 1rem;
//   // border-left: 1px double white;
//   // border-right: 1px double white;
//   margin-right: 2rem;
//   margin-top: 2rem;

//   h2 {
//     font-family: NostroLight;
//   }
//   p {
//     font-size: 3vh;
//     font-family: Satoshi;
//     text-align: justify;
//     opacity: 1;
//     line-height: 1.8rem;
//   }
// `;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  z-index: -1;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;

export const ImageBG = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

export const HeroSection = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(8, 11, 14, 0) 5%
    );
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    position: static;
  }
`;

export const TitleContainer = styled.div`
  h1 {
    // text-orientation: upright;
    // transform: rotate(180deg);
    // writing-mode: vertical-rl;
    color: #ffffff;
    font-size: 9vh;
    font-family: NostroHeavy;
    position: absolute;
    top: 0;
    right: 5vw;
    margin-top: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    h1 {
      position: static;
      top: auto;
      left: auto;
      margin: 0;
      text-align: center;
    }
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const InfoContainer = styled.div`
  width: 45vw;
  height: 70vh;
  // border: 1px solid pink;

  position: absolute;
  top: 18vh;
  right: 3vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 1rem;
    position: static;
    top: auto;
    left: auto;
    width: auto;
    height: auto;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;

  // border: 1px solid white;
  margin-top: 2rem;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 3rem;
  }
`;

export const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  transform: skew(-8deg);
  // border-left: 18px solid rgba(255, 255, 255, 1);
  // border-top: 18px solid rgba(255, 255, 255, 1);
  // border-bottom: 18px double rgba(255, 255, 255, 0.8);
  padding: 3rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    transform: skew(0deg);
    padding: 0;
  }
`;

export const Description = styled.div`
  transform: skew(2deg);

  p {
    font-family: Satoshi;
    color: #fff;
    font-size: 2.5vh;
    text-align: justify;
    // line-height: 1.8rem;
    line-height: 3.5vh;
    span {
      font-family: BasementGro;
      font-size: 4.8vh;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    transform: skew(0deg);
    p {
      font-size: 2vh;
      line-height: 3vh;

      span {
        font-family: BasementGro;
        font-size: 2.5vh;
      }
    }
  }
`;

export const EmphasisDiv = styled.div`
  p {
    font-family: Satoshi;
    color: #fff;
    font-size: 2.5vh;
    text-align: justify;
    line-height: 3.5vh;

    span {
      font-size: 3vh;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    p {
      font-size: 2vh;
      line-height: 3vh;
      span {
        font-size: 2.5vh;
      }
    }
  }
`;

export const EmphasisText = styled.span`
  color: #da4753;
  font-family: BasementGro;
`;

export const ScrollButton = styled(LinkS)`
  // transform: skew(20deg);
  background: transparent;
  color: white;
  font-family: BasementGro;
  padding: 1rem;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  transition: 0.2s all ease-in;
  margin-left: ${(props) => (props.left ? "1rem" : "0")};
  margin-right: ${(props) => (props.right ? "1rem" : "0")};

  &:hover {
    background: white;
    color: #da4753;
    cursor: pointer;
    transform: translate(5px, -5px);
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    transform: skew(-8deg);
    background: white;
    color: #da4753;
    cursor: pointer;
  }
`;
