import React from "react";
import styled from "styled-components";
import pix from "../components/assessment.png";

const Showcase = () => {
  return (
    <Container>
      <Wrapper>
        <Text>
          <Top>
            <H1>Showcase your talent by taking</H1>
            <H2>our HR-endorsed assessment</H2>
          </Top>
          <P>Pass the online assessment once and for all</P>
          <P2>LEARN MORE</P2>
        </Text>
        <Image src={pix} />
      </Wrapper>
    </Container>
  );
};
export default Showcase;

const Container = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
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
    width: 85%;
  }
  @media (max-width: 900px) {
    width: 95%;
  }
  @media (max-width: 768px) {
    height: 90%;
    width: 90%;
    flex-direction: column;
  }
  @media (max-width: 500px) {
    height: 90%;
    width: 90%;
    flex-direction: column;
  }
`;

const Text = styled.div`
  width: 350px;
  height: 130px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
const Top = styled.div`
  width: 100%;
  /* height: 60px; */
  line-height: 1.5;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
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
const P2 = styled.div`
  color: orange;
  font-size: 13px;
`;
const Image = styled.img`
  width: 500px;
  height: 350px;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
