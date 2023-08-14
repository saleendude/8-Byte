import React from "react";
import { Chrono } from "react-chrono";
import {
  MainContainer,
  TextContainer,
  TitleContainer,
  InnerContainerWrapper,
  DescContainer,
  TimelineContainer,
  LeftContainer,
  RightContainer,
  Overlay,
} from "../styles/Roadmap.styled";

const Roadmap = () => {
  const items = [
    {
      title: "April 2021 ",
      cardTitle: "Code initiation",
      cardSubtitle:
        "Begin writing our own model conversion libraries. Decide on mint-funded raise. Come up with unique distribution mechanism.",
    },
    {
      title: "Nov 2021 ",
      cardTitle: "Georings Renders Complete.",
      cardSubtitle: "Entire Georings collection renders complete.",
    },
    {
      title: "Dec 2021 ",
      cardTitle: "AR and Conversion libraries complete",
      cardSubtitle: "Released V1 stable build for AR library.",
    },
    {
      title: "Feb 2022 ",
      cardTitle: "Public release.",
      cardSubtitle: " Proof of concept starting with Toadz and Nouns",
    },
    {
      title: "March 2022 ",
      cardTitle: "Georings Mint",
      cardSubtitle: "Finalize Georings Mint.",
    },
    {
      title: "Q3 2022 ",
      cardTitle: "AR wallet integration",
      cardSubtitle:
        "Finish building AR wallet integration for Georing holders.",
    },
  ];
  return (
    <MainContainer>
      <Overlay></Overlay>
      <InnerContainerWrapper>
        <LeftContainer>
          <TimelineContainer>
            <Chrono
              items={items}
              mode="VERTICAL_ALTERNATING"
              hideControls={true}
              activeItemIndex={4}
              theme={{ primary: "#5C5C5C", secondary: "#DA4753" }}
            />
          </TimelineContainer>
        </LeftContainer>
        <RightContainer>
          <TitleContainer>
            <h1>Roadmap</h1>
          </TitleContainer>
          <TextContainer>
            <DescContainer>
              <p>
                Yes, we know. Roadmaps are overrated in our space. And most
                projects don't really bother sticking to one. However most
                projects don't have a product ready before their mint. Some,
                even after the mint.
              </p>
              <br />
              <p>
                By launching our flagship AR and model conversion libraries for
                multiple CC0 projects before our initial mint even happens,
                we've shown that we don't intend on joining them.
              </p>
              <p>
                As an NFT Studio that is open to collaboarations with aspiring
                artists, the timeline shown is not set in stone.
              </p>
              <br />
              <p>
                No, what you see is a generalized plan that will continue to
                evolve with active engagement from the community, as well as our
                ever-growing code bases for future-proof NFT tooling, open to
                all projects collaborating or building alongside us.
              </p>
            </DescContainer>
          </TextContainer>
        </RightContainer>
      </InnerContainerWrapper>
    </MainContainer>
  );
};

export default Roadmap;
