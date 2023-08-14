import React from "react";
import {
  MainContainer,
  GridContainer,
  InfoContainer,
  ARCodeContainer,
  ARCodeWrapper,
} from "../styles/WhatWeDo.styled";
const WhatWeDo = () => {
  const QR_set1 = [
    { id: 1, img: "/assets/images/QRs/Toadz_3681.png" },
    { id: 2, img: "/assets/images/QRs/Nouns_105.png" },
    { id: 3, img: "/assets/images/QRs/Toadz_928.png" },
    { id: 4, img: "/assets/images/QRs/Toadz_4883.png" },
  ];

  const QR_set2 = [
    { id: 5, img: "/assets/images/QRs/Nouns_11.png" },
    { id: 6, img: "/assets/images/QRs/Toadz_5184.png" },
    { id: 7, img: "/assets/images/QRs/Nouns_36.png" },
    { id: 8, img: "/assets/images/QRs/Toadz_6058.png" },
  ];

  return (
    <>
      <MainContainer>
        {/* <GridContainer>
          {QR_set1.map(({ id, img }) => (
            <ARCodeContainer key={id}>
              <ARCodeWrapper>
                <img src={img} alt="" />
              </ARCodeWrapper>
            </ARCodeContainer>
          ))}
        </GridContainer> */}
        <GridContainer>
          <ARCodeContainer></ARCodeContainer>
          <InfoContainer></InfoContainer>
        </GridContainer>
      </MainContainer>
    </>
  );
};

export default WhatWeDo;
