import React, { useState } from "react";
import {
  MainBodyContainer,
  ProjectInfoContainer,
  ProjectInfoCard,
  ProjectTitleContainer,
  ProjectImageContainer,
  DisplayContainer,
  SideBarContainer,
  TreeContainer,
  FormContainer,
  Form,
  InputContainer,
  ResultContainer,
  ARMarkerContainer,
  BuildButton,
  DocumentationContainer,
  DocumentationTitle,
  DocumentationBody,
  MainTitleContainer,
  TitleTextContainer,
  ARMarkerCard,
  ARLinkContainer,
  ARButtonContainer,
  ARButton,
  InstructionsContainer,
  InstructionsText,
} from "../../components/styles/Projects.styled";

import Tree from "react-animated-tree-v2";
import { FaQrcode } from "react-icons/fa";
import { HiClipboardCheck } from "react-icons/hi";
import { IoPhonePortrait } from "react-icons/io5";
import { IconContext } from "react-icons";
import Typewriter from "typewriter-effect";

const Projects = () => {
  //button styling
  let inButtonStyling = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  };

  // Display Functions
  const treeStyles = {
    color: "black",
    fill: "black",
  };

  const typeStyles = {
    fontSize: "2em",
    verticalAlign: "middle",
  };

  const [showDiv, setShowDiv] = useState({});

  const toggle = (i) => {
    setShowDiv({ [i]: !showDiv[i] });
    setShowTitle(false);
  };

  // Form Functions
  const [isLoading, setLoading] = useState(false);
  const [isLoaded, setLoaded] = useState(false);
  const [tokenID, setTokenID] = useState("");
  const [initialData, setInitialData] = useState([{}]);
  const [showTitle, setShowTitle] = useState(true);
  const [copySuccess, setCopySuccess] = useState("");

  const updateClipboard = (
    newClip = `https://www.georings.art/armodule/${initialData.tokenID}`
  ) => {
    navigator.clipboard.writeText(newClip).then(
      () => {
        setCopySuccess("Copied!");
      },
      () => {
        setCopySuccess("Copy failed!");
      }
    );
  };

  const copyLink = () => {
    navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
      if (result.state === "granted" || result.state === "prompt") {
        updateClipboard();
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const rawData = await fetch("/api/getnftmodel/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tokenID: tokenID,
        NFT: e.target.NFT.defaultValue,
      }),
    });

    let data = await rawData.json();

    setInitialData(data);
    setLoading(false);
    setLoaded(true);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setTokenID(e.target.value);
  };

  return (
    <MainBodyContainer>
      <DisplayContainer>
        <SideBarContainer>
          <TreeContainer>
            <Tree content="Expand" closed style={treeStyles}>
              <Tree
                content="Ethereum"
                closed
                type={<span style={typeStyles}>♦</span>}
              >
                <Tree
                  content="Cryptoadz"
                  itemId={"Cryptoadz"}
                  style={{ cursor: "pointer" }}
                  onItemClick={() => toggle(0)}
                />
                <Tree
                  content="Nouns"
                  itemId={"Nouns"}
                  style={{ cursor: "pointer" }}
                  onItemClick={() => toggle(1)}
                />
              </Tree>
            </Tree>
          </TreeContainer>
        </SideBarContainer>
        {showTitle ? (
          <MainTitleContainer>
            <TitleTextContainer>
              {/* <Typewriter
                options={{
                  strings: [`<h1>《 AR Projects</h1>`],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  cursor: "",
                  pauseFor: 100000,
                }}
              /> */}
            </TitleTextContainer>
          </MainTitleContainer>
        ) : null}
        {showDiv[0] ? (
          <ProjectInfoContainer fromProjects>
            <ProjectInfoCard>
              <ProjectImageContainer>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/GIFs/cryptoadz.gif`}
                  alt=""
                />
              </ProjectImageContainer>
              <ProjectTitleContainer>
                <h3>Crpytoadz By Gremplin</h3>
              </ProjectTitleContainer>
            </ProjectInfoCard>
            <FormContainer>
              <Form onSubmit={handleSubmit}>
                <InputContainer>
                  <label htmlFor="tokenID"></label>
                  <input
                    id="tokenID"
                    type="text"
                    name="tokenID"
                    placeholder="Toad # / 6969"
                    value={tokenID}
                    onChange={handleChange}
                  />
                  <input
                    id="NFT"
                    type="text"
                    name="NFT"
                    placeholder="Cryptoadz"
                    defaultValue={"Cryptoadz"}
                    style={{ display: "None" }}
                  />
                </InputContainer>
                <BuildButton type="submit">
                  {" "}
                  <div style={inButtonStyling}>
                    <span>Build&nbsp;</span> <FaQrcode></FaQrcode>{" "}
                  </div>
                </BuildButton>
              </Form>
            </FormContainer>
            <ResultContainer>
              {isLoading && <div>Loading</div>}
              {!isLoading && isLoaded && (
                <ARMarkerContainer>
                  <ARMarkerCard>
                    <img
                      src={`https://cdn.jsdelivr.net/gh/0xDeimos/georings_arlib_assets@main/Toadz/Toadz_${initialData.tokenID}/Toadz_AR_${initialData.tokenID}.png`}
                      alt=""
                    />
                    <p> View Toadz #{initialData.tokenID} in AR:</p>
                    <ARLinkContainer>
                      <ARButtonContainer>
                        <IconContext.Provider value={{ size: "1.6rem" }}>
                          <ARButton right onClick={copyLink}>
                            <div style={inButtonStyling}>
                              <span>Copy AR link for phone&nbsp;</span>
                              {copySuccess === "Copied!" ? (
                                <HiClipboardCheck></HiClipboardCheck>
                              ) : (
                                <IoPhonePortrait></IoPhonePortrait>
                              )}
                            </div>
                          </ARButton>
                        </IconContext.Provider>
                      </ARButtonContainer>
                    </ARLinkContainer>
                  </ARMarkerCard>
                </ARMarkerContainer>
              )}
              {!isLoading && isLoaded && (
                <InstructionsContainer>
                  <InstructionsText>
                    <h4>Instructions :</h4>
                    <p>
                      The image you see is a precise combination of a typical QR
                      code and the marker for our AR engine. <br /> An approach
                      like this ensures a seamless transition from 2D image to
                      3D AR in two simple steps:
                    </p>
                    <ol>
                      <li>
                        Open your phone's camera and point it at the image. Most
                        modern phones are able to automatically detect and
                        generate the AR scanner link specific to the NFT's token
                        ID.
                      </li>
                      <li>
                        Clicking on the link takes your to our web-based AR
                        scanner. Just point your phone at the image and watch
                        your NFT come to life in AR.
                      </li>
                    </ol>
                    <p
                      style={{
                        fontSize: "1.5vh",
                        fontStyle: "italic",
                        marginTop: "2rem",
                      }}
                    >
                      If your phone was unable to generate the AR scanner link
                      in step 1, click the phone icon below the marker image to
                      copy the link to your clipboard. <br /> This link can then
                      be opened on your phone to initiate the scanner.
                    </p>
                  </InstructionsText>
                </InstructionsContainer>
              )}
            </ResultContainer>
          </ProjectInfoContainer>
        ) : null}
        {showDiv[1] ? (
          <ProjectInfoContainer>
            <ProjectInfoCard>
              <ProjectImageContainer>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/GIFs/nouns.gif`}
                  alt=""
                />
              </ProjectImageContainer>
              <ProjectTitleContainer>
                <h3 style={{ marginTop: "1rem" }}>Nouns</h3>
              </ProjectTitleContainer>
            </ProjectInfoCard>
            <FormContainer>
              <Form onSubmit={handleSubmit}>
                <InputContainer>
                  <label htmlFor="tokenID"></label>
                  <input
                    id="tokenID"
                    type="text"
                    name="tokenID"
                    placeholder="Noun # / 188"
                    value={tokenID}
                    onChange={handleChange}
                  />
                  <input
                    id="NFT"
                    type="text"
                    name="NFT"
                    placeholder="Nouns"
                    defaultValue={"Nouns"}
                    style={{ display: "None" }}
                  />
                </InputContainer>
                <BuildButton type="submit">
                  {" "}
                  <div style={inButtonStyling}>
                    <span>Build&nbsp;</span> <FaQrcode></FaQrcode>{" "}
                  </div>
                </BuildButton>
              </Form>
            </FormContainer>
            <ResultContainer>{isLoading && <div>Loading</div>}</ResultContainer>
          </ProjectInfoContainer>
        ) : null}
        {showDiv[5] ? (
          <DocumentationContainer>
            <DocumentationTitle>
              <h3>&#60; 🧮 AR Model Quality 🧮 &#62;</h3>
            </DocumentationTitle>
            <DocumentationBody moreInfo>
              <ul style={{ marginTop: "2rem" }}>
                <li>
                  Every rendered model of an NFT collection was done using our
                  automated 2D ➡️ 3D conversion engine.
                </li>
                <li>
                  As most NFT collections usually contain upwards of 5,000
                  images, converting those 2D images to 3D models manually would
                  be a monumental task, so we decided to write our own Machine
                  Learning (ML) alogrithm based on an Artifical Neural
                  Networking (ANN) model that simplifies this task.
                </li>
                <li>
                  This type of ML model is the first of it's kind in the NFT
                  space, built mainly for subject recognition in 8-bit image
                  styles!
                </li>
                <li>
                  Using this ML model, the entire collection of Cryptoadz (6969
                  pieces) and Nouns (188 pieces at this time) was converted into
                  fully fledged GLB models in under a day.
                </li>
                <li>
                  What this also means, however, is that there is a margin of
                  error when it comes to results from any Machine Learning
                  algorithm. And that's why we've given the option to report a
                  fauly/defective model render.
                </li>
                <li>
                  Every time a model is marked as faulty render, the ML algo
                  accepts that input and begins re-training itself to produce a
                  more accurate result. This means that, much like most of Web3,
                  users are directly responsible for the quality of the
                  end-product, as it should be!
                </li>
                <li>
                  We believe this approach of involving users and the community
                  in our development process is absolutely crucial. <br />A
                  symbiotic system like this has already been in play in DeFi
                  for ages, so why not NFTs too? Users get a better product, the
                  developers get the required feedback on their code and all
                  projects involved benefit from the added community effort. A
                  win-win-win situation.
                </li>
                <li>
                  If you think the quality of models produced can be improved by
                  some metric, or you'd like help out with other inputs, feel
                  free to come chat with us on Discord or Twitter!
                </li>
              </ul>
            </DocumentationBody>
          </DocumentationContainer>
        ) : null}
      </DisplayContainer>
    </MainBodyContainer>
  );
};

export default Projects;
