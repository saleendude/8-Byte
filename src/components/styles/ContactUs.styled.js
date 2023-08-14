import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  background-image: url(${process.env
    .PUBLIC_URL}/assets/images/BGs/COLLABS_1.png);
  // opacity: 0.4;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    justify-content: center;
    align-items: center;
    hright: auto;
    width: auto;
  }
`;

// export const ModelContainer = styled.div`
//   // width: 46vw;
//   width: 80vw;
//   // height: 46vh;
//   height: 80vh;
//   border: 1px solid red;

//   position: absolute;
//   top: 10vh;
//   left: 0vw;
// `;
export const ModelContainer = styled.div`
  width: 80%;
  height: 60%;
`;

export const GradientContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(153, 153, 153, 0) 100%
  );
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    position: absolute;
    top: 0;
    left: 0;

    background: rgb(255, 255, 255);
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(153, 153, 153, 0) 100%
    );
  }
`;

export const TitleContainer = styled.div`
  h1 {
    font-family: NostroRegular;
    color: rgba(0, 0, 0, 0.8);
    font-size: 18vh;
  }
  border: 1px solid red;
`;

export const CardContainer = styled.div`
  // border: 1px solid black;
  position: absolute;
  top: 10vh;
  left: 20vw;
  z-index: 3;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    position: static;
    top: auto;
    left: auto;
  }
`;

export const Card = styled.div`
  height: 80vh;
  width: 60vw;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(24, 24, 24, 1) 100%
  );
  display: flex;
  padding: 1rem;
  border-radius: 10px;

  box-shadow: 2px 36px 18px 1px rgba(0, 0, 0, 0.7);
  -webkit-box-shadow: 2px 36px 18px 1px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 2px 36px 18px 1px rgba(0, 0, 0, 0.7);

  h1 {
    font-size: 8vh;
    font-family: BasementGro;
    font-style: italic;
    transform: rotate(180deg);
    writing-mode: vertical-rl;
    color: white;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    width: 90vw;
    height: auto;
    h1 {
      font-size: 4vh;
      transform: rotate(0deg);
      writing-mode: horizontal-tb;
      text-align: center;
      margin-bottom: 2rem;
    }
  }
`;

export const CardDetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 1px solid rgba(255, 255, 255, 1);
  @media (max-width: ${({ theme }) => theme.mobile}) {
    border: none;
  }
`;

export const CardTextContainer = styled.div`
  width: 80%;
  margin-top: 2rem;

  p {
    font-family: Satoshi;
    color: white;
    font-size: 2.2vh;
    text-align: center;
    line-height: 4.5vh;
    // line-height: 2rem;

    span {
      font-weight: bold;
      color: #da4753;
      font-size: 2.4vh;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    p {
      text-align: justify;
      font-size: 2.2vh;
      line-height: 3.5vh;
    }
  }
`;

export const SocialsContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: skew(-8deg);
  margin-top: 1rem;
`;

export const SocialButton = styled.button`
  border: none;
  color: white;
  padding: 1rem;
  margin-right: ${(props) => (props.mright ? "1rem" : 0)};
  margin-left: ${(props) => (props.mleft ? "1rem" : 0)};
  font-family: BasementGro;
  background-color: ${(props) =>
    props.social === "twitter"
      ? "#00ACEE"
      : props.social === "discord"
      ? "#738adb"
      : props.social === "medium"
      ? "#000"
      : "transparent"};
  transition: all 0.2s ease-in;

  a {
    color: white;
    text-decoration: none;
  }

  &:hover {
    transform: translate(5px);
    cursor: pointer;
    border-radius: 5px;
  }
`;
