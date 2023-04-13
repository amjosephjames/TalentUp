import React from "react";
import styled from "styled-components";
import log from "../components/logoblack.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src={log} alt="pfd" />
        <Navigator>
          <Span>Find Job</Span>
          <Span>Coaching</Span>
          <Span>Sign In</Span>
          <Button>For Employers</Button>
        </Navigator>
      </Wrapper>
      <Icons>
        <AiOutlineMenu
          color="orange"
          id="Menu"
          onClick={() => {
            document.getElementById("sidebar").style.width = "260px";
            document.getElementById("Menu").style.display = "none";
            document.getElementById("Close").style.display = "block";
          }}
        />
        <AiOutlineClose
          fontSize="25px"
          color="orange"
          style={{
            display: "none",
          }}
          id="Close"
          onClick={() => {
            document.getElementById("sidebar").style.width = "0";
            document.getElementById("Menu").style.display = "block";
            document.getElementById("Close").style.display = "none";
          }}
        />
      </Icons>
      <Sidebar id="sidebar">
        <Hold>
          <Span>Find Job</Span>
          <Span>Coaching</Span>
          <Span>Sign In</Span>
          <Button>For Employers</Button>
        </Hold>
      </Sidebar>
    </Container>
  );
};
export default Header;

const Container = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  position: fixed;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 15vh;
  }
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 90%;
    align-items: center;
  }
  @media (max-width: 900px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 90%;
  }
`;

const Logo = styled.img`
  width: 130px;
  height: 130px;
`;
const Navigator = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 500px) {
    display: none;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;
const Span = styled.div`
  color: #123e7d;
  font-size: 14px;
`;
const Button = styled.div`
  width: 120px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  border: 1px solid orange;
  color: orange;
  font-size: 14px;
`;
const Icons = styled.div`
  color: orange;
  font-size: 25px;
  font-weight: bolder;
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
  @media (max-width: 900px) {
    display: block;
  }
`;

const Hold = styled.div`
  /* display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center; */
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 50%;
  align-items: center;
`;
const Sidebar = styled.div`
  width: 0;
  height: 100vh;
  /* background-color: white; */
  background-color: white;

  position: fixed;
  display: none;
  z-index: 10;
  transition: all 950ms;
  overflow: hidden;
  top: 0;
  left: 0;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
