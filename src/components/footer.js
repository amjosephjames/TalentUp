import React from "react";
import styled from "styled-components";
// import pix from "../components/talentup.jpg";
import pix from "../components/logoblack.svg";
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <Logo src={pix} />
          <Iconify>
            <FiInstagram size={20} color="#fff" />
            <FiFacebook size={20} color="#fff" />
            <FiTwitter size={20} color="#fff" />
            <FiLinkedin size={20} color="#fff" />
          </Iconify>
          <P>copyrights2020</P>
        </Top>
        <Nav>
          <Spaned>Solutions</Spaned>
          <Span>Join Talent Pool</Span>
          <Span>Find Jobs</Span>
          <Span>Talent Pool</Span>
        </Nav>
        <Nav>
          <Spaned>Company</Spaned>
          <Span>About</Span>
          <Span>Privacy Policy</Span>
          <Span>Terms of Service</Span>
        </Nav>
        <Navs>
          <Spaned>Resources</Spaned>
          <Span>Blog</Span>
        </Navs>
        <Unknown></Unknown>
      </Wrapper>
    </Container>
  );
};
export default Footer;

const Container = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #123e7d;
  @media (max-width: 500px) {
    height: 120vh;
  }
`;
const Wrapper = styled.div`
  width: 80%;
  height: 65%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  @media (max-width: 500px) {
    width: 90%;
    height: 90%;
    flex-direction: column;
    align-items: center;
  }

`;
const Top = styled.div`
  height: 120px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media (max-width: 500px) {
    align-items: center;
  }
`;
const Logo = styled.img`
  width: 100px;
  height: 60px;
`;
const Iconify = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;
const P = styled.div`
  color: white;
  font-size: 13px;
`;
const Nav = styled.div`
  height: 120px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media (max-width: 500px) {
    align-items: center;
  }
`;
const Navs = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media (max-width: 500px) {
    align-items: center;
  }
`;
const Span = styled.div`
  color: white;
  font-size: 13px;
`;
const Spaned = styled.div`
  color: orange;
  font-size: 15px;
`;
const Unknown = styled.div`
  height: 0px;
  width: 0px;
`;
