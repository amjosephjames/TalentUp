import React from "react";
import styled from "styled-components";
import pix from "../components/talentpool.png";

const Join = () => {
  return (
    <Container>
      <Wrapper>
        <H1>Let`s help you stand out</H1>
        <Holder>
          <Text>
            <H2>Join our Talent List</H2>
            <P>
              Create your professional profile by uploading your CV and filling
              a profile form
            </P>
            <P1>JOIN NOW</P1>
          </Text>
          <Image src={pix} />
        </Holder>
      </Wrapper>
    </Container>
  );
};
export default Join;

const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    height: 90vh;
  }
  @media (max-width: 768px) {
    height: 100vh;
  }
  @media (max-width: 1024px) {
    height: 90vh;
  }
  @media (max-width: 500px) {
    height: 90vh;
    margin-top: 150px;
  }
`;

const Wrapper = styled.div`
  width: 65%;
  height: 85%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    height: 90%;
    width: 90%;
  }
  @media (max-width: 500px) {
    height: 90%;
    width: 90%;
  }

  @media (max-width: 900px) {
    width: 85%;
  }
  @media (max-width: 1024px) {
    width: 82%;
  }
`;
const H1 = styled.div`
  font-size: 23px;
  font-weight: bold;
  color: #123e7d;
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
  height: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    /* background-color: red; */
    display: flex;
    height: 85%;
    justify-content: space-between;
  }
  @media (max-width: 500px) {
    height: 85%;
    flex-direction: column;
  }
`;
const Text = styled.div`
  width: 350px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: 768px) {
    /* width: 350px; */
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;
const H2 = styled.div`
  font-size: 23px;
  font-weight: bold;
  color: #123e7d;
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
const P = styled.div`
  color: light black;
  font-size: 13px;
`;
const P1 = styled.div`
  color: orange;
  /* color: green; */
  font-size: 13px;
`;
const Image = styled.img`
  width: 500px;
  /* width: 300px; */
  height: 350px;

  @media (max-width: 768px) {
    /* width: 350px; */
  }
  @media (max-width: 900px) {
    width: 400px;
  }
  @media (max-width: 1024px) {
    width: 450px;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;
