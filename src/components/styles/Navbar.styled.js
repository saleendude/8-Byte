import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import BasementGro from "../../fonts/basement_grotesque/BasementGrotesque-Black_v1.202.otf";
import NostroRegular from "../../fonts/NostromoOutline/NostromoRegular-Bold.otf";
import Freedom from "../../fonts/FreedomForever/ForeverFreedomRegular.otf";
import Satoshi from "../../fonts/Satoshi_Complete/Fonts/OTF/Satoshi-Bold.otf";

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 2rem;
  position: sticky;
  top: 0;
  background-color: transparent;
  z-index: 3;

  @font-face {
    font-family: BasementGro;
    src: url(${BasementGro}) format("opentype");
  }
  @font-face {
    font-family: NostroRegular;
    src: url(${NostroRegular}) format("opentype");
  }
  @font-face {
    font-family: Freedom;
    src: url(${Freedom}) format("opentype");
  }
  @font-face {
    font-family: Satoshi;
    src: url(${Satoshi}) format("opentype");
  }
`;

export const LogoContainer = styled(LinkR)`
  margin-left: 5rem;
  img {
    max-width: 7%;
    opacity: 0.8;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 8rem;
  ul {
    list-style: " ";
  }

  li {
    line-height: 1.2rem;
  }
`;

export const NavLinks = styled(LinkS)`
  text-decoration: none;
  font-family: Satoshi;
  font-size: 1.8vh;
  &:active {
    color: #d11928;
  }
  &:hover {
    cursor: pointer;
    color: #d11928;
  }
`;
