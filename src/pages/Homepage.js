import React from "react";
import LandingPage from "../components/pageComponents/LandingPage";
import SecondPage from "../components/pageComponents/SecondPage";
import ThirdPage from "../components/pageComponents/ThirdPage";
import FourthPage from "../components/pageComponents/FourthPage";
import Mints from "../components/pageComponents/Mints";
import ContactUs from "../components/pageComponents/ContactUs";
import Roadmap from "../components/pageComponents/Roadmap";
const Homepage = () => {
  return (
    <>
      {/* <Navbar></Navbar> */}
      {/* <BasicFirstPage></BasicFirstPage> */}
      <LandingPage></LandingPage>
      <SecondPage></SecondPage>
      <ThirdPage></ThirdPage>
      <FourthPage></FourthPage>
      <Mints></Mints>
      <Roadmap></Roadmap>
      <ContactUs></ContactUs>
    </>
  );
};

export default Homepage;
