import styled from "styled-components";
import BasementGro from "../../fonts/basement_grotesque/BasementGrotesque-Black_v1.202.otf";

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  //   border: 1px solid blue;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333333;

  @font-face {
    font-family: BasementGro;
    src: url(${BasementGro}) format("opentype");
  }
`;

export const ModelContainer = styled.div`
  //   border: 1px solid red;
  width: 50%;
  height: 90%;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    height: 100%;
  }
`;

export const ModelPoster = styled.div`
  width: 100%;
  height: 100%;
  //   border: 1px solid yellow;
  background: #000;
`;

export const ModelButton = styled.button`
  position: absolute;
  padding: 1rem;
  border: 1px solid white;
  color: #333333;
  //   top: 45%;
  //   left: 40%;
  top: 80%;
  left: 31%;
  background: #fff;
  transform: skew(-8deg);

  font-family: BasementGro;
  font-size: 3vh;

  transition: all 0.2s ease-in;

  &:hover {
    cursor: pointer;
    color: white;
    background: transparent;
  }

  &:active {
    color: white;
    background: #db4653;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    top: 60%;
    left: 23%;

    font-size: 2vh;
  }
`;

export const ByteModelWrapper = styled.div`
  //   border: 1px solid pink;
  height: 100%;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 60%;
  }
`;
