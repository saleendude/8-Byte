import React from "react";
import AwesomeSlider from "react-awesome-slider";
import styles from "react-awesome-slider/src/styles";
import { ARCodeWrapper } from "../styles/WhatWeDo.styled";

const Carousel = () => {
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
      <AwesomeSlider cssModule={styles}>
        {QR_set1.map(({ id, img }) => (
          <ARCodeWrapper key={id}>
            <img src={img} alt="" />
          </ARCodeWrapper>
        ))}
      </AwesomeSlider>
    </>
  );
};

export default Carousel;
