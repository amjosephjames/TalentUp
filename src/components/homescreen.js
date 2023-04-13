import React from "react";
import styled from "styled-components";
import Header from "../components/header";
import Body from "../components/body";
import Recently from "../components/recently";
import Explore from "../components/explore";
import Companies from "../components/companies";
import Join from "../components/join";
import Usjobs from "../components/usjobs";
import Showcase from "../components/showcase";
import Career from "../components/career";
import Land from "../components/land";
import Footer from "./footer";

const Homescreen = () => {
  return (
    <Container>
      <Header />
      <Body />
      <Recently />
      <Explore />
      <Companies />
      <Join />
      <Usjobs />
      <Showcase />
      <Career />
      <Land />
      <Footer />
    </Container>
  );
};
export default Homescreen;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
