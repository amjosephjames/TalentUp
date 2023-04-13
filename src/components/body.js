import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
const Body = () => {
  return (
    <Container>
      <Wrapper>
        <H1>
          Land your dream Job,
          <span color="orange" font-size={30}>
            home
          </span>{" "}
          and{" "}
          <span color="orange" font-size={30}>
            abroad
          </span>
        </H1>
        <P>
          We connect you with top companies hiring professionals in the{" "}
          <span>US</span> and <span>Africa</span>
        </P>

        <Div>
          <Search>
            <Icon>
              <AiOutlineSearch color="lightgrey" font-size={20} />
            </Icon>
            <Input>
              <input type="text" placeholder="Job title" />
            </Input>
          </Search>
          <Button>Search</Button>
        </Div>
        <Unknown></Unknown>
      </Wrapper>
    </Container>
  );
};
export default Body;

const Container = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #123e7d;
  /* margin-top: 100px; */
  padding-top: 100px;
`;
const Wrapper = styled.div`
  width: 600px;
  height: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  @media (max-width: 500px) {
    width: 480px;
  }
  @media (max-width: 425px) {
    width: 380px;
  }
  @media (max-width: 400px) {
    width: 350px;
  }
  @media (max-width: 320px) {
    width: 300px;
  }
`;
const H1 = styled.div`
  color: white;
  font-size: 30px;
  /* font-weight: bold; */
  font-weight: 500;
  span {
    font-weight: bold;
    color: orange;
  }
  @media (max-width: 500px) {
    font-size: 25px;
  }
  @media (max-width: 320px) {
    font-size: 17px;
  }
  @media (max-width: 400px) {
    font-size: 20px;
  }
  @media (max-width: 425px) {
    font-size: 20px;
  }
`;
const P = styled.div`
  /* width: 100%; */
  font-size: 14px;
  color: white;
  span {
    color: orange;
    font-size: 14px;
  }
`;
const Div = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
`;
const Search = styled.div`
  width: 520px;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  @media (max-width: 500px) {
    width: 400px;
  }
  @media (max-width: 425px) {
    width: 300px;
  }
  @media (max-width: 400px) {
    width: 270px;
  }
  @media (max-width: 320px) {
    width: 220px;
  }
`;
const Icon = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.div`
  width: 470px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    width: 95%;
    height: 80%;
    border: none;
    outline: none;
    opacity: none;
    ::placeholder {
      font-size: 10px;
      color: lightgrey;
    }
  }
  @media (max-width: 500px) {
    width: 350px;
  }
  @media (max-width: 320px) {
    width: 170px;
  }
`;
const Button = styled.div`
  width: 80px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
  color: white;
  font-size: 14px;
`;
const Unknown = styled.div`
  width: 100%;
  height: 40px;
  @media (max-width: 320px) {
    height: 5px;
  }
  @media (max-width: 400px) {
    height: 10px;
  }
`;
