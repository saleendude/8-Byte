import React from "react";
import {
  MainContainer,
  LeftContainer,
  RightContainer,
  ProjectDetails,
  ProjectImageContainer,
  ProjectImage,
  TitleContainer,
  DescriptionContainer,
  PageTitleContainer,
  ButtonContainer,
  ButtonBlack,
} from "../styles/Mints.styled";

const Mints = () => {
  return (
    <MainContainer id="mints">
      <LeftContainer>
        <PageTitleContainer>
          <p>Mints</p>
        </PageTitleContainer>
        <ProjectDetails>
          <TitleContainer>
            <h1>
              GEORING<span>S</span>
            </h1>
          </TitleContainer>
          <DescriptionContainer>
            <h2>
              Our first mint. Your{" "}
              <span style={{ color: "#DA4753" }}>perpetual</span> mint pass.
            </h2>
            <p>
              A collection of <span style={{ fontWeight: "bold" }}>6,999</span>{" "}
              gorgeous ring NFTs forged on the Ethereum network modelled after
              real world locations, doubling as a mint pass for all future NFT
              releases from our studio and key to our upcoming{" "}
              <span style={{ fontWeight: "bold" }}>AR wallet integration</span>.
              Georings will be the first NFT project to use real-world
              randomness as a key for trait distribution within collection, with
              each Georing specific to the owner's location.
            </p>
            <ButtonContainer>
              <a
                href="https://www.georings.art"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ButtonBlack mright="true">Learn More</ButtonBlack>
              </a>
              <a
                href="https://discord.gg/9Rs5zHR3hg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ButtonBlack mright="true" discord="true">
                  Join Discord
                </ButtonBlack>
              </a>
              <a
                href="https://twitter.com/GeoRings"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ButtonBlack twitter="true">Follow Twitter</ButtonBlack>
              </a>
            </ButtonContainer>
            {/* <ProjectPerks>
              <PerksContainer>
                <PerksTitleContainer>
                  <h2>Utility</h2>
                </PerksTitleContainer>
                <Perks>
                  <Perk>
                    <PerkIconContainer>
                      <IconContext.Provider
                        value={{
                          size: "2rem",
                          color: "#353637",
                        }}
                      >
                        <ImEnter></ImEnter>
                      </IconContext.Provider>
                    </PerkIconContainer>
                    <p>
                      Guaranteed whitelist spots to all future mints from the
                      studio.
                    </p>
                  </Perk>
                  <Perk>
                    <PerkIconContainer>
                      <IconContext.Provider
                        value={{
                          size: "2rem",
                          color: "#353637",
                        }}
                      >
                        <CgListTree />
                      </IconContext.Provider>
                    </PerkIconContainer>
                    <p>
                      Whitelist spots in projects that collaborate with the us
                      or use our AR / conversion libraries.
                    </p>
                  </Perk>
                  <Perk>
                    <PerkIconContainer>
                      <IconContext.Provider
                        value={{
                          size: "2rem",
                          color: "#353637",
                        }}
                      >
                        <RiWallet2Fill></RiWallet2Fill>
                      </IconContext.Provider>
                    </PerkIconContainer>
                    <p>
                      Wallet integration (Q3 2022) where all NFTs in your wallet
                      can be viewed in AR without any input from the original
                      artist, as long as the wallet holds a Georing.
                    </p>
                  </Perk>
                </Perks>
              </PerksContainer>
            </ProjectPerks> */}
          </DescriptionContainer>
        </ProjectDetails>
      </LeftContainer>
      <RightContainer>
        <ProjectImageContainer>
          <ProjectImage>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/BGs/Mexico.jpg`}
              alt=""
            />
          </ProjectImage>
        </ProjectImageContainer>
      </RightContainer>
    </MainContainer>
  );
};

export default Mints;
