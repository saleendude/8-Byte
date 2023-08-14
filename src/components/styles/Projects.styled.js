import styled, { keyframes } from "styled-components";
import Rubik from "../../fonts/Rubik/Rubik-VariableFont_wght.ttf";
import MajorMono from "../../fonts/Major_Mono_Display/MajorMonoDisplay-Regular.ttf";
import Barcode from "../../fonts/Libre_Barcode_39_Text/LibreBarcode39Text-Regular.ttf";

export const MainBodyContainer = styled.div`
  @font-face {
    font-family: Rubik;
    src: url(${Rubik}) format("truetype");
  }

  @font-face {
    font-family: MajorMono;
    src: url(${MajorMono}) format("truetype");
  }

  @font-face {
    font-family: Barcode;
    src: url(${Barcode}) format("truetype");
  }

  width: 100%;
  height: 100%;

  h1 {
    font-family: Rubik, sans-serif;
    margin: 0;
  }

  h3 {
    // font-family: Rubik, sans-serif;
    font-family: ui-monospace, monospace;
    margin: 0;
  }

  display: flex;
  flex-direction: column;
  // align-items: center;
  // justify-content: center;
`;

export const TitleContainer = styled.div`
  // border: 1px solid red;
  padding: 1rem;
`;

export const MenuContainer = styled.div`
  //   border: 1px solid green;
  width: 100%;
  display: flex;
  margin-top: 3rem;
  background-color: #f0f0f0;
`;

const fadeInOut = keyframes` 
  from { opacity: 0; }
  to   { opacity: 1; }
`;

export const ProjectInfoContainer = styled.div`
  flex: 1;
  // border: 1px solid blue;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  // margin-left: 2rem;
  font-family: Rubik, sans-serif;
  animation: ${fadeInOut} 1s;

  // background: rgba(255, 255, 255, 1);
  // box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  // backdrop-filter: blur(6.5px);
  // -webkit-backdrop-filter: blur(6.5px);
  // border: 1px solid rgba(255, 255, 255, 0.18);

  @media (max-width: ${({ theme }) => theme.mobile}) {
    // min-height: 100vh;
    height: auto;
  }
`;

export const ProjectInfoCard = styled.div`
  diplay: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 25vw;
  max-height: 35vh;
  border-radius: 10px;
  margin-top: 2vh;
  margin-bottom: 2vh;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;

  background-color: #96c8fb;
  background-image: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(6.5px);
  -webkit-backdrop-filter: blur(6.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  h3 {
    // color: #333333;
    color: white;
    font-size: 4vh;
    margin-bottom: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    max-width: 70vw;
  }
  
  &: hover{
    cursor: pointer;
    background-color: #7f5a83;
    background-image: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);
    -webkit-transform: translateX(10px);
    transform: translateX(10px);
  }
  }
`;

export const ProjectTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 2rem;
      text-align: center;
    }
  }
`;
export const ProjectImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    // border: 1px solid green;
    max-width: 50%;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      max-width: 60%;
    }
  }
`;

//// Sidebar with React Spring:
export const DisplayContainer = styled.div`
  // width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: row;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    // min-height: auto;
    // border: 2px solid red;
  }
`;

export const SideBarContainer = styled.div`
  flex: 0.15;
  display: flex;
  justify-content: center;
  align-items: center;
  // position: relative;
  // border: 1px solid green;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    // border: 3px solid green;
    position: static;
  }
`;

export const TreeContainer = styled.div`
  font-family: ui-monospace, monospace;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  // position: absolute;
  // top: 35vh;
  // left: 1vw;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-left: 4rem;
    margin-top: 4rem;
  }
`;

/// NFT search form
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 2rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  // margin-bottom: 3rem;
  align-items: center;
  // min-width: 100%;

  input {
    // min-width: 100%;
    padding: 1.5vh;
    // background-color: #f7f8fb;
    background-color: #ffffff;
    // border: 1px solid #dde6e7;
    border-bottom: 1px solid black;
    border-top: none;
    border-left: none;
    border-right: none;
    // border-radius: 10px;
    margin-left: 1rem;
    margin-right: 1rem;
  }
  p {
    color: red;
    margin: 0;
  }
`;

export const BuildButton = styled.button`
  color: black;
  background-color: transparent;
  border: 1px solid black;
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
    color: white;
    background-color: black;
    cursor: pointer;
    max-width: 100%;

    span {
      max-width: 7rem;
    }
  }
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  // border: 1px solid red;
  min-width: 60%;
  justify-content: center;
  align-items: center;
`;

export const ARMarkerContainer = styled.div`
  max-width: 30vw;
  height: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  // flex: 1.3;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    max-width: 70vw;
  }
`;

export const DocumentationContainer = styled.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 7vw;
  // background: rgba(255, 255, 255, 1);
  // background-color: #bdcad9;
  // background-image: linear-gradient(315deg, #bdcad9 0%, #e1dada 74%);

  background-color: #fefeff;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(6.5px);
  -webkit-backdrop-filter: blur(6.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  // animation: ${fadeInOut} 1s;

  h3 {
    font-family: ui-monospace, monospace;
    font-size: 6vh;
  }
`;

export const DocumentationTitle = styled.div`
  border-bottom: 2px solid #a6a6a6;
  margin-top: 1rem;
`;

export const DocumentationBody = styled.div`
  ul {
    list-style: "> ";
  }
  p {
    // font-family: ui-monospace, monospace;
    font-family: Rubik, sans-serif;

    font-size: ${(props) => (props.moreInfo ? "2vh" : "2.5vh")};
    line-height: 2rem;
    text-align: ${(props) => (props.moreInfo ? "justify" : "center")};
  }
  li {
    // font-family: ui-monospace, monospace;
    font-family: Rubik, sans-serif;
    font-size: ${(props) => (props.moreInfo ? "2.2vh" : "2.5vh")};
    line-height: 2rem;
    text-align: ${(props) => (props.moreInfo ? "justify" : "")};
    margin-bottom: 1rem;
  }
`;

//Updated Main Title Container
export const MainTitleContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  // border: 1px solid red;
  // padding-right: 4vw;
  // position relative;
  justify-content: center;
  align-items: center;
`;

export const TitleTextContainer = styled.div`
  h1 {
    font-size: 20vh;
    text-align: right;
    padding: none;
    font-family: MajorMono, sans-serif;
    color: #black;
    text-shadow: 0px 2px 0px rgba(0, 0, 0, 0.5);
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 5vh;
      text-align: center;
    }
  }
  margin-right: 1rem;
`;

export const ARMarkerCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 8px 12px 20px -4px rgba(0, 0, 0, 0.81);

  p {
    text-align: center;
    margin: 0;
    padding: 0;
  }
`;

export const ARButton = styled.button`
  color: black;
  background: transparent;
  padding: 0.8rem;
  margin-left: ${(props) => (props.left ? "1rem" : "0")};
  margin-right: ${(props) => (props.right ? "1rem" : "0")};
  border-radius: 5px;
  border: none;
  transition: color 0.2s;
  transition: background-color 0.2s;
  font-family: ui-monospace, monospace;
  // box-shadow: 8px 12px 20px -4px rgba(0, 0, 0, 0.81);
  box-shadow: 1px 5px 10px -2px rgba(0, 0, 0, 0.71);
  -webkit-box-shadow: 1px 5px 10px -2px rgba(0, 0, 0, 0.71);
  -moz-box-shadow: 1px 5px 10px -2px rgba(0, 0, 0, 0.71);

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
    color: white;
    background-color: black;
    cursor: pointer;
    max-width: 100%;

    span {
      max-width: 13vw;
    }
  }
`;
export const ARButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ARLinkContainer = styled.div`
  padding: 0.7rem;
  // border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: ;
  }
`;

export const InstructionsContainer = styled.div`
  // border: 1px solid black;
  // flex: 0.7;
  max-width: 30%;
  min-height: 80%;
  margin-left: 3rem;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;

export const InstructionsText = styled.div`
  h4 {
    font-family: Barcode, sans-serif;
    font-size: 4vh;
    color: #bbbabe;
    text-align: center;
  }
  p {
    font-family: ui-monospace, monospace;
    text-align: justify;
    color: #bbbabe;
  }
  li {
    font-family: ui-monospace, monospace;
    text-align: justify;
    color: #bbbabe;
    margin-bottom: 1rem;
  }
`;
