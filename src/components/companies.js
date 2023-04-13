import React from "react";
import styled from "styled-components";
import one from "../components/reliance.png";
import two from "../components/fairmoney.png";
import thr from "../components/elalan.png";
import fou from "../components/chrisejik.png";
import fiv from "../components/coe.png";
import six from "../components/sbc.png";
import sev from "../components/gb.png";
import eig from "../components/zercom.png";

const Companies = () => {
  return (
    <Container>
      <Wrapper>
        <H1>Companies recruiting from our Talent List</H1>
        <Holder>
          <Image src={one} />
          <Image src={two} />
          <Image src={thr} />
          <Image src={fou} />
          <Image src={fiv} />
          <Image src={six} />
          <Image src={sev} />
          <Image src={eig} />
        </Holder>
      </Wrapper>
    </Container>
  );
};
export default Companies;

const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    height: 140vh;
  }
  @media (max-width: 1024px) {
    height: 90vh;
  }
  @media (max-width: 900px) {
    height: 110vh;
  }
  @media (max-width: 768px) {
    height: 115vh;
  }
  @media (max-width: 400px) {
    height: 140vh;
    /* padding-bottom: 10vh; */
  }
  @media (max-width: 425px) {
    height: 140vh;
  }
  @media (max-width: 360px) {
    height: 140vh;
  }
  @media (max-width: 320px) {
    height: 140vh;
    /* padding-bottom: 10vh; */
  }
`;
const Wrapper = styled.div`
  width: 80%;
  height: 85%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  @media (max-width: 500px) {
    height: 90%;
    width: 90%;
  }
  @media (max-width: 400px) {
    height: 90%;
    width: 90%;
  }
  @media (max-width: 425px) {
    height: 90%;
    width: 90%;
  }
  @media (max-width: 360px) {
    height: 90%;
    width: 90%;
  }
  @media (max-width: 320px) {
    height: 90%;
    width: 90%;
  }
`;
const H1 = styled.div`
  color: #123e7d;
  font-size: 23px;
  font-weight: bold;
  @media (max-width: 320px) {
    font-size: 17px;
  }
  @media (max-width: 360px) {
    font-size: 17px;
  }
  @media (max-width: 375px) {
    font-size: 17px;
  }
`;
const Holder = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  /* justify-content: space-between; */
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 500px) {
    height: 90%;
  }
  @media (max-width: 400px) {
    height: 90%;
  }
  @media (max-width: 360px) {
    height: 90%;
  }
  @media (max-width: 320px) {
    height: 90%;
  }
`;
const Image = styled.img`
  width: 180px;
  height: 85px;
  margin-left: 67px;
  @media (max-width: 320px) {
    margin-right: 10px;
  }
`;
