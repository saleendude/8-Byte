import React, { useState } from "react";
import {
  MainContainer,
  ModelsContainer,
  TextContainer,
  TitleContainer,
  CarouselContainer,
  CarouselWrapper,
  ModelContainer,
  TextSection,
  ModelTitle,
  ModelDesc,
  FinderFormContainer,
  Form,
  InputContainer,
  BuildButton,
  LoadingDiv,
  ResultContainer,
  CodesContainer,
  Code,
  CodeImageContainer,
  PhoneInstructionsContainer,
  CodeInstructionsContainer,
  CarouselButtonContainer,
  RetrainingContainer,
  RetrainingButton,
  StyledSlide as Slide,
} from "../styles/FourthPage.styled";
import Toadz4883Viewer from "../modelViewers/Toadz285Viewer";
import Noun98Viewer from "../modelViewers/Noun98Viewer";
import SMB1453Viewer from "../modelViewers/SMB1453Viewer";
import FRWC3620Viewer from "../modelViewers/FRWC3620Viewer";
import Zaysan79Viewer from "../modelViewers/Zaysan79Viewer";
import { FaQrcode } from "react-icons/fa";
import {
  CarouselProvider,
  Slider,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const FourthPage = () => {
  // const [isLoading, setLoading] = useState(false);
  // const [isLoaded, setLoaded] = useState(false);
  const [isLoading, setLoading] = useState({});
  const [isLoaded, setLoaded] = useState({});
  const [tokenID, setTokenID] = useState("");
  const [initialData, setInitialData] = useState([{}]);
  const [buttonIsLoading, setButtonIsLoading] = useState(false);
  const [buttonIsLoaded, setButtonIsLoaded] = useState(false);

  const handleSubmit = async (e, i) => {
    console.log(e);
    console.log(i);
    e.preventDefault();
    // setLoading(true);
    setLoading({ [i]: true });

    let data = {
      tokenID: parseInt(tokenID, 10),
      NFT: e.target.NFT.defaultValue,
    };
    console.log(data);
    setInitialData(data);
    console.log(initialData.tokenID);
    // setLoading(false);
    setLoading({ [i]: false });
    // setLoaded(true);
    setLoaded({ [i]: true });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setTokenID(e.target.value);
  };

  let inButtonStyling = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  };

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const retrainButtonState = () => {
    setButtonIsLoaded(false);
    setButtonIsLoading(true);

    setTimeout(() => {
      setButtonIsLoading(false);
      setButtonIsLoaded(true);
    }, randomIntFromInterval(3000, 10000));
  };

  return (
    <MainContainer id="projects">
      <TitleContainer>
        <h1>
          Proof of{" "}
          <span style={{ textDecoration: "line-through" }}>
            &nbsp;Work&nbsp;
          </span>{" "}
          Render
        </h1>
      </TitleContainer>
      <CarouselContainer>
        <CarouselProvider
          // naturalSlideWidth={100}
          // naturalSlideHeight={50}
          totalSlides={5}
          dragEnabled={false}
          touchEnabled={true}
          isIntrinsicHeight={true}
        >
          <Slider>
            <Slide index={0}>
              <CarouselWrapper>
                <ModelsContainer>
                  {!isLoading[0] && !isLoaded[0] && (
                    <ModelContainer>
                      <FRWC3620Viewer></FRWC3620Viewer>
                    </ModelContainer>
                  )}
                  {isLoading[0] && !isLoaded[0] && (
                    <LoadingDiv>
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/GIFs/nouns.gif`}
                        alt=""
                      />
                      <p>&lt;&nbsp;Generating Data&nbsp;&gt;</p>
                    </LoadingDiv>
                  )}
                  {!isLoading[0] && isLoaded[0] && (
                    <ResultContainer>
                      <CodesContainer>
                        <Code>
                          <a
                            href={`https://www.8bytelabs.com/projects/arlib/marker/FRWC/${initialData.tokenID}`}
                          >
                            <CodeImageContainer>
                              <img
                                src={`${process.env.PUBLIC_URL}/ar_files/FRWC/qr_codes/marker/FRWC_${initialData.tokenID}.png`}
                                alt=""
                              />
                            </CodeImageContainer>
                          </a>
                          <CodeInstructionsContainer markerbased={true}>
                            <a
                              href={`https://www.8bytelabs.com/projects/arlib/marker/FRWC/${initialData.tokenID}`}
                            >
                              <h2 marker="true">Marker-Based AR_</h2>
                            </a>
                            <p>
                              The image you see above is a precise combination
                              of a typical QR code and the marker for our AR
                              engine. An approach like this ensures a seamless
                              transition from 2D image to 3D AR in two simple
                              steps:
                            </p>
                            <br />
                            <ul>
                              <li>
                                &nbsp;Open your phone's camera and point it at
                                the image. Most modern phones are able to
                                automatically detect and generate the AR scanner
                                link specific to the NFT's token ID.
                              </li>
                              <li>
                                &nbsp;Clicking on the link takes you to our
                                web-based AR scanner. Just point your phone at
                                the same image and watch your NFT come to life
                                in AR.
                              </li>
                            </ul>
                            <PhoneInstructionsContainer>
                              <p>
                                If you're opening this page on your phone, you
                                can just tap on the QR code to open the scanner!
                              </p>
                            </PhoneInstructionsContainer>
                          </CodeInstructionsContainer>
                        </Code>
                        <Code>
                          <a
                            href={`https://www.8bytelabs.com/projects/arlib/markerless/FRWC/${initialData.tokenID}`}
                          >
                            <CodeImageContainer>
                              <img
                                src={`${process.env.PUBLIC_URL}/ar_files/FRWC/qr_codes/markerless/FRWC_${initialData.tokenID}.png`}
                                alt=""
                              />
                              {/* <CodeTypeContainer>
                              <p>
                                AR Markerless{" "}
                                <span style={{ color: "#D11928" }}>[Beta]</span>{" "}
                              </p>{" "}
                            </CodeTypeContainer> */}
                            </CodeImageContainer>
                          </a>
                          <CodeInstructionsContainer>
                            <a
                              href={`https://www.8bytelabs.com/projects/arlib/markerless/FRWC/${initialData.tokenID}`}
                            >
                              <h2>Markerless AR_</h2>
                            </a>
                            <p>
                              The purest form of Augmented Reality, markerless
                              AR does not confine you to scanning the QR code
                              constantly to see your NFTs in AR. Using flat
                              surface detection and real-life ray casting,
                              you'll be able to view your NFTs anywhere,
                              anytime.
                            </p>
                            <br />
                            <ul>
                              <li>
                                &nbsp;Open your phone's camera and point it at
                                the image. Most modern phones are able to
                                automatically detect and generate the AR scanner
                                link specific to the NFT's token ID.
                              </li>
                              <li>
                                &nbsp;Clicking on the link takes you to our
                                web-based markerless AR scanner. Pointing your
                                phone at any flat surface will spawn your NFT in
                                3D and keep it locked at that location on the
                                detected surface!
                              </li>
                            </ul>
                            <PhoneInstructionsContainer>
                              <p>
                                If you're opening this page on your phone, you
                                can just tap on the QR code to open the scanner!
                              </p>
                            </PhoneInstructionsContainer>
                          </CodeInstructionsContainer>
                        </Code>
                      </CodesContainer>
                    </ResultContainer>
                  )}
                </ModelsContainer>
                <TextContainer>
                  <TextSection>
                    <ModelTitle>
                      <h1>
                        [ <span style={{ color: "#EF9357" }}>c1.</span>FRWC ]
                      </h1>
                    </ModelTitle>
                    <ModelDesc>
                      <ul>
                        <li>
                          <span>_Contract Address</span>:
                          0x521f9C7505005CFA19A8E5786a9c3c9c9F5e6f42
                        </li>
                        <li>
                          <span>_Collection Size</span>: 9,410 pieces
                        </li>
                        <li>
                          <span>_AR Ready</span>: 9,410 / 9,410 pieces
                        </li>
                      </ul>
                    </ModelDesc>
                    <FinderFormContainer>
                      <h1>
                        [&nbsp;Summon_
                        <span style={{ color: "#EF9357" }}>Wizard</span>
                        .exe&nbsp;]_&nbsp;
                      </h1>
                      <Form
                        onSubmit={(e) => {
                          handleSubmit(e, 0);
                        }}
                      >
                        <InputContainer>
                          <label htmlFor="tokenID"></label>
                          <input
                            id="tokenID"
                            type="text"
                            name="tokenID"
                            placeholder="Enter Wizard #"
                            value={tokenID}
                            onChange={handleChange}
                          />
                          <input
                            id="NFT"
                            type="text"
                            name="NFT"
                            placeholder="FRWC"
                            defaultValue={"FRWC"}
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
                    </FinderFormContainer>
                    <RetrainingContainer>
                      <h1>Submit model for retraining?</h1>
                      <p>
                        Mark render as sub-optimal to retrain algorithm for this
                        specific token ID and increase overall collection
                        accuracy.
                      </p>
                      {!isLoaded[0] && !buttonIsLoading && !buttonIsLoaded && (
                        <RetrainingButton disabled={true}>
                          Disabled
                        </RetrainingButton>
                      )}

                      {isLoaded[0] && !buttonIsLoading && !buttonIsLoaded && (
                        <RetrainingButton onClick={retrainButtonState}>
                          Submit_
                        </RetrainingButton>
                      )}
                      {isLoaded[0] && buttonIsLoading && !buttonIsLoaded && (
                        <RetrainingButton
                          onClick={retrainButtonState}
                          style={{ backgroundColor: "rgba(218, 71, 83,1)" }}
                        >
                          Submiting ◔
                        </RetrainingButton>
                      )}
                      {isLoaded[0] && !buttonIsLoading && buttonIsLoaded && (
                        <RetrainingButton
                          onClick={retrainButtonState}
                          style={{ backgroundColor: "rgba(218, 71, 83,1)" }}
                        >
                          Submitted ✅
                        </RetrainingButton>
                      )}
                    </RetrainingContainer>
                  </TextSection>
                </TextContainer>
              </CarouselWrapper>
            </Slide>
            <Slide index={1}>
              <CarouselWrapper>
                <ModelsContainer>
                  {!isLoading[1] && !isLoaded[1] && (
                    <ModelContainer>
                      <SMB1453Viewer></SMB1453Viewer>
                    </ModelContainer>
                  )}
                  {isLoading[1] && !isLoaded[1] && (
                    <LoadingDiv>
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/GIFs/cryptoadz.gif`}
                        alt=""
                      />
                      <p>&lt;&nbsp;Generating SMB Data&nbsp;&gt;</p>
                    </LoadingDiv>
                  )}
                  {!isLoading[1] && isLoaded[1] && (
                    <ResultContainer>
                      <CodesContainer>
                        <Code>
                          <a
                            href={`https://www.8bytelabs.com/projects/arlib/marker/SMB/${initialData.tokenID}`}
                          >
                            <CodeImageContainer>
                              <img
                                src={`${process.env.PUBLIC_URL}/ar_files/SMB/qr_codes/marker/SMB_${initialData.tokenID}.png`}
                                alt=""
                              />

                              {/* <CodeTypeContainer>
                              <p>AR Marker</p>{" "}
                            </CodeTypeContainer> */}
                            </CodeImageContainer>
                          </a>
                          <CodeInstructionsContainer markerbased={true}>
                            <a
                              href={`https://www.8bytelabs.com/projects/arlib/marker/SMB/${initialData.tokenID}`}
                            >
                              <h2>Marker-Based AR_</h2>
                            </a>
                            <p>
                              The image you see above is a precise combination
                              of a typical QR code and the marker for our AR
                              engine. An approach like this ensures a seamless
                              transition from 2D image to 3D AR in two simple
                              steps:
                            </p>
                            <br />
                            <ul>
                              <li>
                                &nbsp;Open your phone's camera and point it at
                                the image. Most modern phones are able to
                                automatically detect and generate the AR scanner
                                link specific to the NFT's token ID.
                              </li>
                              <li>
                                &nbsp;Clicking on the link takes you to our
                                web-based AR scanner. Just point your phone at
                                the same image and watch your NFT come to life
                                in AR.
                              </li>
                            </ul>
                            <PhoneInstructionsContainer>
                              <p>
                                If you're opening this page on your phone, you
                                can just tap on the QR code to open the scanner!
                              </p>
                            </PhoneInstructionsContainer>
                          </CodeInstructionsContainer>
                        </Code>
                        <Code>
                          <a
                            href={`https://www.8bytelabs.com/projects/arlib/markerless/SMB/${initialData.tokenID}`}
                          >
                            <CodeImageContainer>
                              <img
                                // src={`https://cdn.jsdelivr.net/gh/0xDeimos/georings_arlib_assets@main/Toadz/Toadz_${initialData.tokenID}/Toadz_AR_${initialData.tokenID}.png`}
                                src={`${process.env.PUBLIC_URL}/ar_files/SMB/qr_codes/markerless/SMB_${initialData.tokenID}.png`}
                                alt=""
                              />
                            </CodeImageContainer>
                          </a>
                          <CodeInstructionsContainer>
                            <a
                              href={`https://www.8bytelabs.com/projects/arlib/markerless/SMB/${initialData.tokenID}`}
                            >
                              <h2>Markerless AR_</h2>
                            </a>
                            <p>
                              The purest form of Augmented Reality, markerless
                              AR does not confine you to scanning the QR code
                              constantly to see your NFTs in AR. Using flat
                              surface detection and real-life ray casting,
                              you'll be able to view your NFTs anywhere,
                              anytime.
                            </p>
                            <br />
                            <ul>
                              <li>
                                &nbsp;Open your phone's camera and point it at
                                the image. Most modern phones are able to
                                automatically detect and generate the AR scanner
                                link specific to the NFT's token ID.
                              </li>
                              <li>
                                &nbsp;Clicking on the link takes you to our
                                web-based markerless AR scanner. Pointing your
                                phone at any flat surface will spawn your NFT in
                                3D and keep it locked at that location on the
                                detected surface!
                              </li>
                            </ul>
                            <PhoneInstructionsContainer>
                              <p>
                                If you're opening this page on your phone, you
                                can just tap on the QR code to open the scanner!
                              </p>
                            </PhoneInstructionsContainer>
                          </CodeInstructionsContainer>
                        </Code>
                      </CodesContainer>
                    </ResultContainer>
                  )}
                </ModelsContainer>
                <TextContainer>
                  <TextSection>
                    <ModelTitle>
                      <h1>
                        [ <span style={{ color: "#9CCB51" }}>c2.</span>SMB ]
                      </h1>
                    </ModelTitle>
                    <ModelDesc>
                      <ul>
                        <li>
                          <span>_Update Authority</span>:
                          9uBX3ASjxWvNBAD1xjbVaKA74mWGZys3RGSF7DdeDD3F
                        </li>
                        <li>
                          <span>_Collection Size</span>: 5,000 pieces (Gen 2)
                        </li>
                        <li>
                          <span>_AR Ready</span>: 5,000 / 5,000 pieces
                        </li>
                      </ul>
                    </ModelDesc>
                    <FinderFormContainer>
                      <h1>
                        [&nbsp;Monke_
                        <span style={{ color: "#9CCB51" }}>SMB</span>
                        .exe&nbsp;]_&nbsp;
                      </h1>
                      <Form
                        onSubmit={(e) => {
                          handleSubmit(e, 1);
                        }}
                      >
                        <InputContainer>
                          <label htmlFor="tokenID"></label>
                          <input
                            id="tokenID"
                            type="text"
                            name="tokenID"
                            placeholder="Enter SMB #"
                            value={tokenID}
                            onChange={handleChange}
                          />
                          <input
                            id="NFT"
                            type="text"
                            name="NFT"
                            placeholder="SMB"
                            defaultValue={"SMB"}
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
                    </FinderFormContainer>
                    <RetrainingContainer>
                      <h1>Submit model for retraining?</h1>
                      <p>
                        Mark render as sub-optimal to retrain algorithm for this
                        specific token ID and increase overall collection
                        accuracy.
                      </p>
                      {!isLoaded[1] && !buttonIsLoading && !buttonIsLoaded && (
                        <RetrainingButton disabled={true}>
                          Disabled
                        </RetrainingButton>
                      )}

                      {isLoaded[1] && !buttonIsLoading && !buttonIsLoaded && (
                        <RetrainingButton onClick={retrainButtonState}>
                          Submit_
                        </RetrainingButton>
                      )}
                      {isLoaded[1] && buttonIsLoading && !buttonIsLoaded && (
                        <RetrainingButton
                          onClick={retrainButtonState}
                          style={{ backgroundColor: "rgba(218, 71, 83,1)" }}
                        >
                          Submiting ◔
                        </RetrainingButton>
                      )}
                      {isLoaded[1] && !buttonIsLoading && buttonIsLoaded && (
                        <RetrainingButton
                          onClick={retrainButtonState}
                          style={{ backgroundColor: "rgba(218, 71, 83,1)" }}
                        >
                          Submitted ✅
                        </RetrainingButton>
                      )}
                    </RetrainingContainer>
                  </TextSection>
                </TextContainer>
              </CarouselWrapper>
            </Slide>
            <Slide index={2}>
              <CarouselWrapper>
                <ModelsContainer>
                  {!isLoading[2] && !isLoaded[2] && (
                    <ModelContainer>
                      <Zaysan79Viewer></Zaysan79Viewer>
                    </ModelContainer>
                  )}
                  {isLoading[2] && !isLoaded[2] && (
                    <LoadingDiv>
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/GIFs/cryptoadz.gif`}
                        alt=""
                      />
                      <p>&lt;&nbsp;Generating Raptor Data&nbsp;&gt;</p>
                    </LoadingDiv>
                  )}
                  {!isLoading[2] && isLoaded[2] && (
                    <ResultContainer>
                      <CodesContainer>
                        <Code>
                          <a
                            href={`https://www.8bytelabs.com/projects/arlib/marker/Zaysan/${initialData.tokenID}`}
                          >
                            <CodeImageContainer>
                              <img
                                src={`${process.env.PUBLIC_URL}/ar_files/Zaysan/qr_codes/marker/Zaysan_${initialData.tokenID}.png`}
                                alt=""
                              />

                              {/* <CodeTypeContainer>
                              <p>AR Marker</p>{" "}
                            </CodeTypeContainer> */}
                            </CodeImageContainer>
                          </a>
                          <CodeInstructionsContainer markerbased={true}>
                            <a
                              href={`https://www.8bytelabs.com/projects/arlib/marker/Zaysan/${initialData.tokenID}`}
                            >
                              <h2>Marker-Based AR_</h2>
                            </a>
                            <p>
                              The image you see above is a precise combination
                              of a typical QR code and the marker for our AR
                              engine. An approach like this ensures a seamless
                              transition from 2D image to 3D AR in two simple
                              steps:
                            </p>
                            <br />
                            <ul>
                              <li>
                                &nbsp;Open your phone's camera and point it at
                                the image. Most modern phones are able to
                                automatically detect and generate the AR scanner
                                link specific to the NFT's token ID.
                              </li>
                              <li>
                                &nbsp;Clicking on the link takes you to our
                                web-based AR scanner. Just point your phone at
                                the same image and watch your NFT come to life
                                in AR.
                              </li>
                            </ul>
                            <PhoneInstructionsContainer>
                              <p>
                                If you're opening this page on your phone, you
                                can just tap on the QR code to open the scanner!
                              </p>
                            </PhoneInstructionsContainer>
                          </CodeInstructionsContainer>
                        </Code>
                        <Code>
                          <a
                            href={`https://www.8bytelabs.com/projects/arlib/markerless/Zaysan/${initialData.tokenID}`}
                          >
                            <CodeImageContainer>
                              <img
                                // src={`https://cdn.jsdelivr.net/gh/0xDeimos/georings_arlib_assets@main/Toadz/Toadz_${initialData.tokenID}/Toadz_AR_${initialData.tokenID}.png`}
                                src={`${process.env.PUBLIC_URL}/ar_files/Zaysan/qr_codes/markerless/Zaysan_${initialData.tokenID}.png`}
                                alt=""
                              />
                            </CodeImageContainer>
                          </a>
                          <CodeInstructionsContainer>
                            <a
                              href={`https://www.8bytelabs.com/projects/arlib/markerless/Zaysan/${initialData.tokenID}`}
                            >
                              <h2>Markerless AR_</h2>
                            </a>
                            <p>
                              The purest form of Augmented Reality, markerless
                              AR does not confine you to scanning the QR code
                              constantly to see your NFTs in AR. Using flat
                              surface detection and real-life ray casting,
                              you'll be able to view your NFTs anywhere,
                              anytime.
                            </p>
                            <br />
                            <ul>
                              <li>
                                &nbsp;Open your phone's camera and point it at
                                the image. Most modern phones are able to
                                automatically detect and generate the AR scanner
                                link specific to the NFT's token ID.
                              </li>
                              <li>
                                &nbsp;Clicking on the link takes you to our
                                web-based markerless AR scanner. Pointing your
                                phone at any flat surface will spawn your NFT in
                                3D and keep it locked at that location on the
                                detected surface!
                              </li>
                            </ul>
                            <PhoneInstructionsContainer>
                              <p>
                                If you're opening this page on your phone, you
                                can just tap on the QR code to open the scanner!
                              </p>
                            </PhoneInstructionsContainer>
                          </CodeInstructionsContainer>
                        </Code>
                      </CodesContainer>
                    </ResultContainer>
                  )}
                </ModelsContainer>
                <TextContainer>
                  <TextSection>
                    <ModelTitle>
                      <h1 style={{ fontSize: "2.4rem" }}>
                        [ <span style={{ color: "#8c19ff" }}>c3.</span>
                        Zaysan Raptors ]
                      </h1>
                    </ModelTitle>
                    <ModelDesc>
                      <ul>
                        <li>
                          <span>_Update Authority</span>:
                          9r8daTPS2kHMPcNEys5EYCJzjZPVkEC5wVCXCbWRFMSt
                        </li>
                        <li>
                          <span>_Collection Size</span>: 1,555 pieces
                        </li>
                        <li>
                          <span>_AR Ready</span>: 1,545 / 1,555 pieces
                        </li>
                      </ul>
                    </ModelDesc>
                    <FinderFormContainer>
                      <h1>
                        [&nbsp;Spawn_
                        <span style={{ color: "#8c19ff" }}>Raptor</span>
                        .exe&nbsp;]_&nbsp;
                      </h1>
                      <Form
                        onSubmit={(e) => {
                          handleSubmit(e, 2);
                        }}
                      >
                        <InputContainer>
                          <label htmlFor="tokenID"></label>
                          <input
                            id="tokenID"
                            type="text"
                            name="tokenID"
                            placeholder="Enter Raptor #"
                            value={tokenID}
                            onChange={handleChange}
                          />
                          <input
                            id="NFT"
                            type="text"
                            name="NFT"
                            placeholder="Zaysan"
                            defaultValue={"Zaysan"}
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
                    </FinderFormContainer>
                    <RetrainingContainer>
                      <h1>Submit model for retraining?</h1>
                      <p>
                        Mark render as sub-optimal to retrain algorithm for this
                        specific token ID and increase overall collection
                        accuracy.
                      </p>
                      {!isLoaded[2] && !buttonIsLoading && !buttonIsLoaded && (
                        <RetrainingButton disabled={true}>
                          Disabled
                        </RetrainingButton>
                      )}

                      {isLoaded[2] && !buttonIsLoading && !buttonIsLoaded && (
                        <RetrainingButton onClick={retrainButtonState}>
                          Submit_
                        </RetrainingButton>
                      )}
                      {isLoaded[2] && buttonIsLoading && !buttonIsLoaded && (
                        <RetrainingButton
                          onClick={retrainButtonState}
                          style={{ backgroundColor: "rgba(218, 71, 83,1)" }}
                        >
                          Submiting ◔
                        </RetrainingButton>
                      )}
                      {isLoaded[2] && !buttonIsLoading && buttonIsLoaded && (
                        <RetrainingButton
                          onClick={retrainButtonState}
                          style={{ backgroundColor: "rgba(218, 71, 83,1)" }}
                        >
                          Submitted ✅
                        </RetrainingButton>
                      )}
                    </RetrainingContainer>
                  </TextSection>
                </TextContainer>
              </CarouselWrapper>
            </Slide>
            <Slide index={3}>
              <CarouselWrapper>
                <ModelsContainer>
                  {!isLoading[3] && !isLoaded[3] && (
                    <ModelContainer>
                      <Noun98Viewer></Noun98Viewer>
                    </ModelContainer>
                  )}
                  {isLoading[3] && !isLoaded[3] && (
                    <LoadingDiv>
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/GIFs/nouns.gif`}
                        alt=""
                      />
                      <p>&lt;&nbsp;Generating Noun Data&nbsp;&gt;</p>
                    </LoadingDiv>
                  )}
                  {!isLoading[3] && isLoaded[3] && (
                    <ResultContainer>
                      <CodesContainer>
                        <Code>
                          <a
                            href={`https://www.8bytelabs.com/projects/arlib/marker/Nouns/${initialData.tokenID}`}
                          >
                            <CodeImageContainer>
                              <img
                                src={`${process.env.PUBLIC_URL}/ar_files/Nouns/qr_codes/marker/Nouns_${initialData.tokenID}.png`}
                                alt=""
                              />
                              {/* <CodeTypeContainer>
                              <p>AR Marker</p>{" "}
                            </CodeTypeContainer> */}
                            </CodeImageContainer>
                          </a>
                          <CodeInstructionsContainer markerbased={true}>
                            <a
                              href={`https://www.8bytelabs.com/projects/arlib/marker/Nouns/${initialData.tokenID}`}
                            >
                              <h2 marker="true">Marker-Based AR_</h2>
                            </a>
                            <p>
                              The image you see above is a precise combination
                              of a typical QR code and the marker for our AR
                              engine. An approach like this ensures a seamless
                              transition from 2D image to 3D AR in two simple
                              steps:
                            </p>
                            <br />
                            <ul>
                              <li>
                                &nbsp;Open your phone's camera and point it at
                                the image. Most modern phones are able to
                                automatically detect and generate the AR scanner
                                link specific to the NFT's token ID.
                              </li>
                              <li>
                                &nbsp;Clicking on the link takes you to our
                                web-based AR scanner. Just point your phone at
                                the same image and watch your NFT come to life
                                in AR.
                              </li>
                            </ul>
                            <PhoneInstructionsContainer>
                              <p>
                                If you're opening this page on your phone, you
                                can just tap on the QR code to open the scanner!
                              </p>
                            </PhoneInstructionsContainer>
                          </CodeInstructionsContainer>
                        </Code>
                        <Code>
                          <a
                            href={`https://www.8bytelabs.com/projects/arlib/markerless/Nouns/${initialData.tokenID}`}
                          >
                            <CodeImageContainer>
                              <img
                                src={`${process.env.PUBLIC_URL}/ar_files/Nouns/qr_codes/markerless/Nouns_${initialData.tokenID}.png`}
                                alt=""
                              />
                              {/* <CodeTypeContainer>
                              <p>
                                AR Markerless{" "}
                                <span style={{ color: "#D11928" }}>[Beta]</span>{" "}
                              </p>{" "}
                            </CodeTypeContainer> */}
                            </CodeImageContainer>
                          </a>
                          <CodeInstructionsContainer>
                            <a
                              href={`https://www.8bytelabs.com/projects/arlib/markerless/Nouns/${initialData.tokenID}`}
                            >
                              <h2>Markerless AR_</h2>
                            </a>
                            <p>
                              The purest form of Augmented Reality, markerless
                              AR does not confine you to scanning the QR code
                              constantly to see your NFTs in AR. Using flat
                              surface detection and real-life ray casting,
                              you'll be able to view your NFTs anywhere,
                              anytime.
                            </p>
                            <br />
                            <ul>
                              <li>
                                &nbsp;Open your phone's camera and point it at
                                the image. Most modern phones are able to
                                automatically detect and generate the AR scanner
                                link specific to the NFT's token ID.
                              </li>
                              <li>
                                &nbsp;Clicking on the link takes you to our
                                web-based markerless AR scanner. Pointing your
                                phone at any flat surface will spawn your NFT in
                                3D and keep it locked at that location on the
                                detected surface!
                              </li>
                            </ul>
                            <PhoneInstructionsContainer>
                              <p>
                                If you're opening this page on your phone, you
                                can just tap on the QR code to open the scanner!
                              </p>
                            </PhoneInstructionsContainer>
                          </CodeInstructionsContainer>
                        </Code>
                      </CodesContainer>
                    </ResultContainer>
                  )}
                </ModelsContainer>
                <TextContainer>
                  <TextSection>
                    <ModelTitle>
                      <h1>
                        [ <span style={{ color: "#60BDE0" }}>c4.</span>Nouns ]
                      </h1>
                    </ModelTitle>
                    <ModelDesc>
                      <ul>
                        <li>
                          <span>_Contract Address</span>:
                          0x9C8fF314C9Bc7F6e59A9d9225Fb22946427eDC03
                        </li>
                        <li>
                          <span>_Collection Size</span>: 239 pieces (first run)
                        </li>
                        <li>
                          <span>_AR Ready</span>: 239 / 239 pieces
                        </li>
                      </ul>
                    </ModelDesc>
                    <FinderFormContainer>
                      <h1>
                        [&nbsp;Get_
                        <span style={{ color: "#60BDE0" }}>Noun</span>
                        .exe&nbsp;]_&nbsp;
                      </h1>
                      <Form
                        onSubmit={(e) => {
                          handleSubmit(e, 3);
                        }}
                      >
                        <InputContainer>
                          <label htmlFor="tokenID"></label>
                          <input
                            id="tokenID"
                            type="text"
                            name="tokenID"
                            placeholder="Enter Noun #"
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
                    </FinderFormContainer>
                    <RetrainingContainer>
                      <h1>Submit model for retraining?</h1>
                      <p>
                        Mark render as sub-optimal to retrain algorithm for this
                        specific token ID and increase overall collection
                        accuracy.
                      </p>
                      {!isLoaded[3] && !buttonIsLoading && !buttonIsLoaded && (
                        <RetrainingButton disabled={true}>
                          Disabled
                        </RetrainingButton>
                      )}

                      {isLoaded[3] && !buttonIsLoading && !buttonIsLoaded && (
                        <RetrainingButton onClick={retrainButtonState}>
                          Submit_
                        </RetrainingButton>
                      )}
                      {isLoaded[3] && buttonIsLoading && !buttonIsLoaded && (
                        <RetrainingButton
                          onClick={retrainButtonState}
                          style={{ backgroundColor: "rgba(218, 71, 83,1)" }}
                        >
                          Submiting ◔
                        </RetrainingButton>
                      )}
                      {isLoaded[3] && !buttonIsLoading && buttonIsLoaded && (
                        <RetrainingButton
                          onClick={retrainButtonState}
                          style={{ backgroundColor: "rgba(218, 71, 83,1)" }}
                        >
                          Submitted ✅
                        </RetrainingButton>
                      )}
                    </RetrainingContainer>
                  </TextSection>
                </TextContainer>
              </CarouselWrapper>
            </Slide>
            <Slide index={4}>
              <CarouselWrapper>
                <ModelsContainer>
                  {!isLoading[4] && !isLoaded[4] && (
                    <ModelContainer>
                      <Toadz4883Viewer></Toadz4883Viewer>
                    </ModelContainer>
                  )}
                  {isLoading[4] && !isLoaded[4] && (
                    <LoadingDiv>
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/GIFs/cryptoadz.gif`}
                        alt=""
                      />
                      <p>&lt;&nbsp;Generating Toad Data&nbsp;&gt;</p>
                    </LoadingDiv>
                  )}
                  {!isLoading[4] && isLoaded[4] && (
                    <ResultContainer>
                      <CodesContainer>
                        <Code>
                          <a
                            href={`https://www.8bytelabs.com/projects/arlib/marker/Toadz/${initialData.tokenID}`}
                          >
                            <CodeImageContainer>
                              <img
                                src={`${process.env.PUBLIC_URL}/ar_files/Toadz/qr_codes/marker/Toadz_${initialData.tokenID}.png`}
                                alt=""
                              />

                              {/* <CodeTypeContainer>
                              <p>AR Marker</p>{" "}
                            </CodeTypeContainer> */}
                            </CodeImageContainer>
                          </a>
                          <CodeInstructionsContainer markerbased={true}>
                            <a
                              href={`https://www.8bytelabs.com/projects/arlib/marker/Toadz/${initialData.tokenID}`}
                            >
                              <h2>Marker-Based AR_</h2>
                            </a>
                            <p>
                              The image you see above is a precise combination
                              of a typical QR code and the marker for our AR
                              engine. An approach like this ensures a seamless
                              transition from 2D image to 3D AR in two simple
                              steps:
                            </p>
                            <br />
                            <ul>
                              <li>
                                &nbsp;Open your phone's camera and point it at
                                the image. Most modern phones are able to
                                automatically detect and generate the AR scanner
                                link specific to the NFT's token ID.
                              </li>
                              <li>
                                &nbsp;Clicking on the link takes you to our
                                web-based AR scanner. Just point your phone at
                                the same image and watch your NFT come to life
                                in AR.
                              </li>
                            </ul>
                            <PhoneInstructionsContainer>
                              <p>
                                If you're opening this page on your phone, you
                                can just tap on the QR code to open the scanner!
                              </p>
                            </PhoneInstructionsContainer>
                          </CodeInstructionsContainer>
                        </Code>
                        <Code>
                          <a
                            href={`https://www.8bytelabs.com/projects/arlib/markerless/Toadz/${initialData.tokenID}`}
                          >
                            <CodeImageContainer>
                              <img
                                // src={`https://cdn.jsdelivr.net/gh/0xDeimos/georings_arlib_assets@main/Toadz/Toadz_${initialData.tokenID}/Toadz_AR_${initialData.tokenID}.png`}
                                src={`${process.env.PUBLIC_URL}/ar_files/Toadz/qr_codes/markerless/Toadz_${initialData.tokenID}.png`}
                                alt=""
                              />
                            </CodeImageContainer>
                          </a>
                          <CodeInstructionsContainer>
                            <a
                              href={`https://www.8bytelabs.com/projects/arlib/markerless/Toadz/${initialData.tokenID}`}
                            >
                              <h2>Markerless AR_</h2>
                            </a>
                            <p>
                              The purest form of Augmented Reality, markerless
                              AR does not confine you to scanning the QR code
                              constantly to see your NFTs in AR. Using flat
                              surface detection and real-life ray casting,
                              you'll be able to view your NFTs anywhere,
                              anytime.
                            </p>
                            <br />
                            <ul>
                              <li>
                                &nbsp;Open your phone's camera and point it at
                                the image. Most modern phones are able to
                                automatically detect and generate the AR scanner
                                link specific to the NFT's token ID.
                              </li>
                              <li>
                                &nbsp;Clicking on the link takes you to our
                                web-based markerless AR scanner. Pointing your
                                phone at any flat surface will spawn your NFT in
                                3D and keep it locked at that location on the
                                detected surface!
                              </li>
                            </ul>
                            <PhoneInstructionsContainer>
                              <p>
                                If you're opening this page on your phone, you
                                can just tap on the QR code to open the scanner!
                              </p>
                            </PhoneInstructionsContainer>
                          </CodeInstructionsContainer>
                        </Code>
                      </CodesContainer>
                    </ResultContainer>
                  )}
                </ModelsContainer>
                <TextContainer>
                  <TextSection>
                    <ModelTitle>
                      <h1>
                        [ <span style={{ color: "#D11928" }}>c5.</span>Cryptoadz
                        ]
                      </h1>
                    </ModelTitle>
                    <ModelDesc>
                      <ul>
                        <li>
                          <span>_Contract Address</span>:
                          0x1CB1A5e65610AEFF2551A50f76a87a7d3fB649C6
                        </li>
                        <li>
                          <span>_Collection Size</span>: 6,969 pieces (first
                          run)
                        </li>
                        <li>
                          <span>_AR Ready</span>: 6,969 / 6,969 pieces
                        </li>
                      </ul>
                    </ModelDesc>
                    <FinderFormContainer>
                      <h1>
                        [&nbsp;Find_
                        <span style={{ color: "#D11928" }}>!Vibe</span>
                        .exe&nbsp;]_&nbsp;
                      </h1>
                      <Form
                        onSubmit={(e) => {
                          handleSubmit(e, 4);
                        }}
                      >
                        <InputContainer>
                          <label htmlFor="tokenID"></label>
                          <input
                            id="tokenID"
                            type="text"
                            name="tokenID"
                            placeholder="Enter Toad #"
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
                    </FinderFormContainer>
                    <RetrainingContainer>
                      <h1>Submit model for retraining?</h1>
                      <p>
                        Mark render as sub-optimal to retrain algorithm for this
                        specific token ID and increase overall collection
                        accuracy.
                      </p>
                      {!isLoaded[4] && !buttonIsLoading && !buttonIsLoaded && (
                        <RetrainingButton disabled={true}>
                          Disabled
                        </RetrainingButton>
                      )}

                      {isLoaded[4] && !buttonIsLoading && !buttonIsLoaded && (
                        <RetrainingButton onClick={retrainButtonState}>
                          Submit_
                        </RetrainingButton>
                      )}
                      {isLoaded[4] && buttonIsLoading && !buttonIsLoaded && (
                        <RetrainingButton
                          onClick={retrainButtonState}
                          style={{ backgroundColor: "rgba(218, 71, 83,1)" }}
                        >
                          Submiting ◔
                        </RetrainingButton>
                      )}
                      {isLoaded[4] && !buttonIsLoading && buttonIsLoaded && (
                        <RetrainingButton
                          onClick={retrainButtonState}
                          style={{ backgroundColor: "rgba(218, 71, 83,1)" }}
                        >
                          Submitted ✅
                        </RetrainingButton>
                      )}
                    </RetrainingContainer>
                  </TextSection>
                </TextContainer>
              </CarouselWrapper>
            </Slide>
          </Slider>
          <CarouselButtonContainer>
            <ButtonBack className="carousel_btn">&lt;&lt;</ButtonBack>
            <ButtonNext className="carousel_btn">&gt;&gt;</ButtonNext>
          </CarouselButtonContainer>
        </CarouselProvider>
      </CarouselContainer>
    </MainContainer>
  );
};

export default FourthPage;
