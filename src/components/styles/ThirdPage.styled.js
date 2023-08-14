import styled from "styled-components";
// import NostroHeavy from "../../fonts/NostromoOutline/NostromoOutline-HeavyOblique.otf";
// import NostroRegular from "../../fonts/NostromoOutline/NostromoRegular-Heavy.otf";
// import Satoshi from "../../fonts/Satoshi_Complete/Fonts/OTF/Satoshi-Regular.otf";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  position: relative;
  flex-direction: column;

  background-color: #ffffff;
  opacity: 1;
  background-image: radial-gradient(
      #c0c0c0 0.6000000000000001px,
      transparent 0.6000000000000001px
    ),
    radial-gradient(#c0c0c0 0.6000000000000001px, #ffffff 0.6000000000000001px);
  background-size: 24px 24px;
  background-position: 0 0, 12px 12px;

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    background: rgb(0, 0, 0);
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.49093140674238445) 0%,
      rgba(214, 209, 204, 0) 2%
    );
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: auto;
    height: auto;
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
  // position: absolute;
  // bottom: 0;
  // left: 0;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleContainer = styled.div`
  margin-left: 1rem;
  margin-top: 1rem;
  h1 {
    font-family: NostroHeavy;
    font-style: italic;
    font-size: 8vh;
    color: #363537;

    span {
      font-family: NostroRegular;
      font-style: italic;
      // color: ##d11928;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-left: 0;
    margin-top: 1rem;
    h1 {
      font-size: 6vh;
      text-align: center;
      padding: 0;
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  // border: 1px solid red;
  margin-top: 1rem;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    margin-top: 0;
    padding: 1rem;
  }
`;

export const Section = styled.div`
  max-width: 25%;
  border-right: 1px solid rgba(0, 0, 0, 0.5);
  word-wrap: break-word;
  padding-left: 1rem;
  padding-right: 1rem;

  p {
    font-family: Satoshi;
    text-align: justify;
    opacity: 0.8;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    max-width: 100%;

    border-bottom: 2px solid #da4753;
    padding-top: 1rem;
    padding-bottom: 1rem;

    border-right: ${(props) =>
      props.bordered === "right" ? "2px solid #da4753" : "none"};
    border-left: ${(props) =>
      props.bordered === "left" ? "2px solid #da4753" : "none"};
  }
`;

export const ModelContainer = styled.div`
  width: 100vw;
  height: 100vh;
  // border: 1px solid blue;
  z-index: 100;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    // width: 100vw;
    // height: 100vh;
    display: none;
  }
`;
