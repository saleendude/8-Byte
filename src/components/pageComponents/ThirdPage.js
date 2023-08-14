import React from "react";
import {
  MainContainer,
  TextContainer,
  TitleContainer,
  InfoContainer,
  Section,
  ModelContainer,
} from "../styles/ThirdPage.styled";
import ProcessModelViewer from "../modelViewers/ProcessModelViewer";

const ThirdPage = () => {
  return (
    <>
      <MainContainer id="process">
        {/* <VideoBg
          loop
          autoPlay
          muted
          src={`${process.env.PUBLIC_URL}/assets/videos/page3_7c1.webm`}
          type="video/webm"
        ></VideoBg>*/}
        <TextContainer>
          <TitleContainer>
            <h1>
              [ The <span>AR</span> Engine ]
            </h1>
          </TitleContainer>
          <InfoContainer>
            <Section bordered="right">
              <p>
                We've built this library to make it as easy as possible for any
                project to have their collection turned into AR models.
              </p>
              <p>
                The process starts off with finding the metadata for a specific
                token ID in a collection.
              </p>
            </Section>
            <Section bordered="left">
              <p>
                The image source is then extracted from the metadata and sent to
                our ML model built specifically for 8-bit NFTs, which
                preprocceses it before generating a 3D model.
              </p>
            </Section>
            <Section bordered="right">
              <p>
                The ML model isolates the subject from the background as best as
                possible and the 3D geometry is generated using this data. Any
                models with defects can be resubmitted to the ML algorithm for
                retraining and improving accuracy.
              </p>
            </Section>
            <Section bordered="left">
              <p>
                The generated 3D geometries are then used to create a
                ready-to-use Augmented Reality code base for that specific NFT.
                This includes our proprietary AR+QR code seen below, as well as
                fully markerless variants.
              </p>
            </Section>
          </InfoContainer>
        </TextContainer>
        <ModelContainer>
          <ProcessModelViewer></ProcessModelViewer>
        </ModelContainer>
      </MainContainer>
    </>
  );
};

export default ThirdPage;
