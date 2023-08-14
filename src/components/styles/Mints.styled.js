import styled from "styled-components";
// import BasementGro from "../../fonts/basement_grotesque/BasementGrotesque-Black_v1.202.otf";
// import Satoshi from "../../fonts/Satoshi_Complete/Fonts/OTF/Satoshi-Regular.otf";
// import NostroRegular from "../../fonts/NostromoOutline/NostromoRegular-Heavy.otf";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  // border: 1px solid red;
`;

export const RightContainer = styled.div`
  display: flex;
  flex: 1;
  // border: 1px solid blue;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 18vh;
  }
`;

export const ProjectImageContainer = styled.div`
  // border: 1px solid yellow;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProjectImage = styled.div`
  width: 90%;

  img {
    max-width: 100%;
    max-height: 100%;

    box-shadow: 7px 7px 9px 1px rgba(0, 0, 0, 0.65);
    -webkit-box-shadow: 7px 7px 9px 1px rgba(0, 0, 0, 0.65);
    -moz-box-shadow: 7px 7px 9px 1px rgba(0, 0, 0, 0.65);
  }
`;

export const ProjectDetails = styled.div`
  width: 100%;
  // height: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  // border: 1px solid black;

  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.div`
  width: 70%;
  z-index: 100;
  margin-left: -1rem;
  h1 {
    font-family: BasementGro;
    // font-size: 8vh;
    font-size: 19vh;
    // font-size: 14vh;
    font-style: italic;

    span {
      color: white;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 2rem;
    width: auto;
    h1 {
      font-size: 6vh;
      span {
        color: #da4753;
      }
    }
  }
`;

export const DescriptionContainer = styled.div`
  max-width: 80%;
  margin-top: 0.8rem;
  margin-left: 8vw;
  // padding-left: 8vw;
  h2 {
    font-family: BasementGro;
    // font-size: 3.1vh;
    font-size: 4vh;
  }
  p {
    margin-top: 0.5rem;
    font-family: Satoshi;
    text-align: justify;
    font-weight: 700;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-left: 0;
    h2 {
      font-size: 3vh;
    }
  }
`;

export const ProjectPerks = styled.div`
  width: 100%;
  // height: 30%;
  margin-top: 1rem;
  display: flex;
  // border: 1px solid purple;
`;

export const PageTitleContainer = styled.div`
  position: absolute;
  top: 20vh;
  left: -1vw;
  p {
    transform: rotate(180deg);
    writing-mode: vertical-rl;
    font-family: NostroHeavy;
    font-size: 15vh;
    color: rgba(0, 0, 0, 0.1);
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    position: absolute;
    top: 0vh;
    left: 0vw;
    p {
      font-size: 12vh;
      writing-mode: horizontal-tb;
      transform: rotate(0deg);
    }
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 2rem;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
  }
`;

export const ButtonBlack = styled.button`
  background: rgba(0, 0, 0, 1);
  color: white;
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 1);
  border-radius: 5px;
  transition: all 0.2s ease-in;
  font-family: NostroRegular;
  font-style: italic;
  margin-right: ${(props) => (props.mright ? "1rem" : "0rem")};

  a {
    color: white;
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
    color: #fff;
    background-color: ${(props) =>
      props.twitter ? "#00ACEE" : props.discord ? " #738adb" : "#DA4753"};

    border: ${(props) =>
      props.twitter
        ? "1px solid #00ACEE"
        : props.discord
        ? "1px solid #738adb"
        : "1px solid #DA4753"};
    transform: translate(5px, -5px);
  }
`;

export const PerksContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  // margin-left: -5rem;
`;

export const PerksTitleContainer = styled.div`
  // border: 1px solid red;
  display: flex;
  justify-content: center;
  h2 {
    text-align: center;
    font-size: 3.2vh;
    transform: rotate(180deg);
    writing-mode: vertical-rl;
  }
`;

export const Perks = styled.div`
  border-left: 20px solid black;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const Perk = styled.div`
  // transform: skew(10deg);
  // border: 1px solid black;

  flex: 0.33;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(0, 0, 0, 0.5);

  p {
    text-align: left;
  }
`;

export const PerkIconContainer = styled.div`
  width: 100%;
  text-align: center;
`;
