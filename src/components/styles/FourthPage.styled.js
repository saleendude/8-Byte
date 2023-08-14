import styled from "styled-components";
// import NostroHeavy from "../../fonts/NostromoOutline/NostromoOutline-Heavy.otf";
// import NostroRegular from "../../fonts/NostromoOutline/NostromoRegular-Heavy.otf";
// import BasementGro from "../../fonts/basement_grotesque/BasementGrotesque-Black_v1.202.otf";
import { Slide } from "pure-react-carousel";
export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color #fff;
  position: relative;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    // border: 5px solid yellow;
    width: auto;
    height: auto;
  }
`;

export const TitleContainer = styled.div`
  margin-left: 0.5rem;
  // border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 5vh;
  left: 0vw;

  h1 {
    font-family: NostroRegular;
    color: rgba(0, 0, 0, 0.8);
    font-style: italic;
    font-size: 5.5vh;
    transform: rotate(180deg);
    writing-mode: vertical-rl;

    span {
      font-family: NostroHeavy;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    position: static;
    h1 {
      margin-top: 1rem;
      margin-left: 0;
      writing-mode: horizontal-tb;
      transform: none;
      font-size: 5vh;
      text-align: center;
      margin-bottom: 1rem;
    }
  }
`;

export const ModelsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex: 1.4;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.div`
  flex: 0.6;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  // border: 1px solid green;

  background-color: #ffffff;
  opacity: 0.8;
  background-image: radial-gradient(
      #c0c0c0 0.6000000000000001px,
      transparent 0.6000000000000001px
    ),
    radial-gradient(#c0c0c0 0.6000000000000001px, #ffffff 0.6000000000000001px);
  background-size: 24px 24px;
  background-position: 0 0, 12px 12px;
`;

export const CarouselContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const CarouselWrapper = styled.div`
  // width: 100%;
  // height: 100%;
  width: 100vw;
  height: 100vh;
  // border: 5px solid yellow;
  display: flex;
  flex-direction: row;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    height: auto;
  }
`;

export const CarouselButtonContainer = styled.div.attrs((props) => ({
  className: props.className,
}))`
  position: absolute;
  // top: 0;
  // right: 0;
  top: -1vw;
  right: 4vw;

  font-family: BasementGro;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  & .carousel_btn {
    background: transparent;
    font-family: BasementGro;
    color: rgba(209, 25, 40, 0.8);
    font-size: 15vh;
    border: none;
    margin-right: 1rem;
    margin-left: 1rem;
    transition: all 0.2s ease-in;

    &:disabled {
      display: none;
      transition: all 0.2s ease-in;
    }

    &:hover {
      color: rgba(209, 25, 40, 1);
      transform: translate(-5px, -5px);
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    // top: 0;
    // right: 0;
    position:static;
    align-items: center;

    & .carousel_btn {
      background: transparent;
      font-family: BasementGro;
      color: rgba(209, 25, 40, 0.8);
      font-size: 12vh;
  }
`;

export const ModelContainer = styled.div`
  height: 100%;
  width: 100%;
  border-bottom: 1px dotted rgba(255, 255, 255, 0.2);
`;

export const TextSection = styled.div`
  height: 100%;
  // flex: 0.5;
  // border: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center;

  // ul {
  //   list-style: "_";
  // }
  // li {
  //   font-family: Satoshi;
  //   font-size: 2.3vh;
  //   // color: rgba(255, 255, 255, 0.5);
  //   color: rgba(0, 0, 0, 0.6);
  //   line-height: 2rem;
  // }
`;

export const ModelTitle = styled.div`
  h1 {
    font-family: BasementGro;
    font-size: 6vh;
    margin-bottom: 1rem;
    color: rgba(0, 0, 0, 0.8);
  }
  border-bottom: 1px dotted rgba(0, 0, 0, 0.3);

  @media (max-width: ${({ theme }) => theme.mobile}) {
    h1 {
      font-size: 4.5vh;
      text-align: center;
    }
  }
`;

export const ModelDesc = styled.div`
  margin-top: 3rem;
  p {
    font-family: Satoshi;
    color: rgba(0, 0, 0, 0.7);
    text-align: center;

    span {
      font-weight: bold;
      font-size: 2.2vh;
    }
  }

  ul {
    list-style: " ";
  }

  li {
    font-family: Satoshi;
    color: rgba(0, 0, 0, 0.7);
    text-align: left;
    line-height: 2rem;
    span {
      font-weight: bold;
      font-size: 2.2vh;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 1rem;

    li {
      font-size: 1.8vh;
    }
  }
`;

export const FinderFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-items: center;
  margin-top: 2rem;
  h1 {
    font-family: NostroRegular;
    font-size: 4vh;
    margin-bottom: 1rem;
    color: rgba(0, 0, 0, 0.8);
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 1rem;
    h1 {
      font-size: 3.5vh;
      text-align: center;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  // justify-content: center;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    justify-content: center;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  input {
    padding: 1.5vh;
    background: rgba(0, 0, 0, 0.08);
    border-radius: 5px;
    // border-bottom: 1px solid rgba(0, 0, 0, 0.8);
    border-bottom: none;
    border-top: none;
    border-left: none;
    border-right: none;
    margin-left: 1rem;
    margin-right: 1rem;
  }
  p {
    color: red;
    margin: 0;
  }
`;

export const BuildButton = styled.button`
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  padding: 0.8rem;
  font-family: ui-monospace, monospace;

  span {
    max-width: 0;
    -webkit-transition: max-width 1s;
    transition: max-width 1s;
    display: inline-block;
    vertical-align: top;
    white-space: nowrap;
    overflow: hidden;
  }

  &:hover {
    color: rgba(0, 0, 0, 0.8);
    background-color: transparent;
    cursor: pointer;
    max-width: 100%;

    span {
      max-width: 7rem;
    }
  }
`;

export const LoadingDiv = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #ffffff;
  opacity: 0.8;
  background-image: radial-gradient(
      #c0c0c0 0.6000000000000001px,
      transparent 0.6000000000000001px
    ),
    radial-gradient(#c0c0c0 0.6000000000000001px, #ffffff 0.6000000000000001px);
  background-size: 24px 24px;
  background-position: 0 0, 12px 12px;
  img {
    width: 50%;
  }

  p {
    margin-top: 1rem;
    font-family: ui-monospace, monospace;
    color: rgba(0, 0, 0, 0.3);
  }
`;

export const ResultContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  // border: 1px solid red;
`;

export const CodesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  // border: 1px solid orange;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const Code = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  // border: 1px solid green;
`;

export const CodeImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 8px 12px 20px -4px rgba(0, 0, 0, 0.81);
  padding: 1rem;
  justify-content: center;
  align-items: center;

  max-width: 45vh;
  height: auto;
  img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
`;
export const CodeTypeContainer = styled.div`
  p {
    font-family: NostroRegular;
    font-style: italic;
    color: rgba(0, 0, 0, 0.9);
    font-size: 2.1vh;
    text-align: center;
  }
`;

export const CodeInstructionsContainer = styled.div`
  margin-top: 2rem;
  width: ${(props) => (props.markerbased ? "80%" : "auto")};
  h2 {
    font-family: NostroRegular;
    color: rgba(0, 0, 0, 0.4);
    text-align: center;
    transition: 0.2s all ease-in;

    &:hover {
      color: ${(props) => (props.marker ? "#60bde0" : "#D11928")};
    }
  }
  p {
    font-family: Satoshi;
    text-align: justify;
    color: #bbbabe;
  }

  ul {
    list-style: "#";
  }

  li {
    font-family: Satoshi;
    text-align: justify;
    color: #bbbabe;
    line-height: 1.6rem;
  }
  a {
    text-decoration: none;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: auto;
  }
`;

export const RetrainingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;

  h1 {
    font-family: NostroRegular;
    font-size: 2.5vh;
    margin-bottom: 0.3rem;
    color: rgba(0, 0, 0, 0.6);
  }
  p {
    color: rgba(0, 0, 0, 0.6);
    font-family: Satoshi;
    text-align: justify;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 2rem;
  }
`;

export const RetrainingButton = styled.button`
  margin-top: 0.8rem;
  font-family: Satoshi;
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  padding: 0.7rem;
  border: none;
  border-radius: 5px;
  max-width: 30%;
  transition: all 0.2s ease-in;

  &:hover {
    background-color: #da4753;
    cursor: pointer;
  }
`;

export const StyledSlide = styled(Slide)`
  display: flex;
  // width: 110px;
  min-width: 110px;
  min-height: 72px;
  .focusRing___1airF.carousel__slide-focus-ring {
    outline: none !important;
  }
`;

export const PhoneInstructionsContainer = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    p {
      font-family: Satoshi;
      text-align: justify;
      // color: #bbbabe;
      // color: rgba(0, 0, 0, 0.8);
      color: #da4753;
    }

    ul {
      list-style: "#";
    }

    li {
      font-family: Satoshi;
      text-align: justify;
      color: #bbbabe;
      line-height: 1.6rem;
    }
    a {
      text-decoration: none;
    }
  }
`;
