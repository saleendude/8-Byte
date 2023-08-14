import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  //   width: 100%;
  //   height: 100%;
  position: relative;
`;

export const Overlay = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: transparent;
    z-index: 50;
  }
`;

export const TitleContainer = styled.div`
  margin-top: 15vh;
  h1 {
    font-family: NostroHeavy;
    font-size: 10vh;
    margin: none;
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 5vh;
    h1 {
      font-size: 5.5vh;
    }
  }
`;

export const InnerContainerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column-reverse;
  }
`;

export const LeftContainer = styled.div`
  flex: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const RightContainer = styled.div`
  flex: 1.2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 2rem;
  justify-content: center;
  align-items: center;
`;

export const DescContainer = styled.div`
  p {
    font-family: Satoshi;
    text-align: justify;
    font-size: 2.2vh;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    p {
      font-size: 16px;
    }
  }
`;

export const TimelineContainer = styled.div`
  //   border: 1px solid red;
  font-family: Satoshi;
`;
