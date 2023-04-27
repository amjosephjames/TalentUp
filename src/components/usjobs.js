import React from "react";
import styled from "styled-components";
import pix from "../components/usjob.png";

const Usjobs = () => {
  return (
    <Container>
      <Wrapper>
        <Image src={pix} />
        <Text>
          <H1>Get US-based remote Jobs</H1>
          <P>
            Finding your dream remote job just got easier.We curate and deliver
            top remote jobs in the us straight to your inbox
          </P>
          <P1>Find Jobs</P1>
        </Text>
      </Wrapper>
    </Container>
  );
};
export default Usjobs;

const Container = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    height: 90vh;
  }
  @media (max-width: 500px) {
    height: 90vh;
  }
`;
const Wrapper = styled.div`
  width: 65%;
  height: 85%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  @media (max-width: 1024px) {
    width: 82%;
  }
  @media (max-width: 500px) {
    width: 90%;
    height: 90%;
  }
`;
const Text = styled.div`
  width: 350px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media (max-width: 500px) {
    width: 100%;
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
const P = styled.div`
  color: light black;
  font-size: 13px;
`;
const P1 = styled.div`
  color: orange;
  font-size: 13px;
`;
const Image = styled.img`
  width: 500px;
  height: 350px;

  @media (max-width: 1024px) {
    width: 450px;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;
