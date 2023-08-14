import React from "react";
import {
  MainContainer,
  ModelContainer,
  GradientContainer,
  CardContainer,
  Card,
  CardDetailsContainer,
  CardTextContainer,
  SocialsContainer,
  SocialButton,
} from "../styles/ContactUs.styled";
import ContactUsModelViewer from "../modelViewers/ContactUsModelViewer";
const ContactUs = () => {
  return (
    <MainContainer>
      <GradientContainer />
      <CardContainer>
        <Card>
          <h1>COLLABS</h1>
          <CardDetailsContainer>
            <ModelContainer>
              <ContactUsModelViewer></ContactUsModelViewer>
            </ModelContainer>
            <CardTextContainer>
              <p>
                Whether you're an NFT OG that wants an{" "}
                <span>old collection converted to AR</span> or an aspiring
                artist looking to <span>launch a new NFT series</span>, we would
                love to work with you!
              </p>
              <p>Reach out to us on our socials here:</p>
            </CardTextContainer>
            <SocialsContainer>
              <a
                href="https://twitter.com/8byteLabs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialButton social="twitter" mright="true">
                  Twitter
                </SocialButton>
              </a>

              <a
                href="https://discord.gg/9Rs5zHR3hg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialButton social="discord" mright="true">
                  Discord
                </SocialButton>
              </a>

              <a
                href="https://medium.com/@8bytelab"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialButton social="medium">Medium</SocialButton>
              </a>
            </SocialsContainer>
          </CardDetailsContainer>
        </Card>
      </CardContainer>
    </MainContainer>
  );
};

export default ContactUs;
