import styled from "styled-components";
import NostroHeavy from "../../fonts/NostromoOutline/NostromoOutline-Heavy.otf";
import Satoshi from "../../fonts/Satoshi_Complete/Fonts/OTF/Satoshi-Regular.otf";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #000;
  @font-face {
    font-family: NostroHeavy;
    src: url(${NostroHeavy}) format("opentype");
  }
  @font-face {
    font-family: Satoshi;
    src: url(${Satoshi}) format("opentype");
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const ContextContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  width: 80%;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    justify-content: center;
    align-items: center;
  }
`;

export const ModelContainer = styled.div`
  // border: 1px solid red;
  width: 100%;
  height: 100%;

  &:hover {
    cursor: pointer;
  }
`;

export const TextContainer = styled.div`
  h1 {
    font-family: NostroHeavy;
    text-align: center;
    font-size: 6vh;
  }
  // border: 1px solid yellow;

  p {
    font-family: Satoshi;
    color: rgba(255, 255, 255, 0.5);
  }
`;
