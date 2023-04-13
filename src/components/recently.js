import React from "react";
import styled from "styled-components";
import pix from "../components/talentup.jpg";

const Recently = () => {
  return (
    <Container>
      <Wrapper>
        <H1>Recently posted Jobs</H1>
        <Holder>
          <Box>
            <Boxwrap>
              <Image src={pix} />
              <Right>
                <H4>Javascript Developer</H4>
                <H2>TalentUp Africa</H2>
                <P>Remote</P>
                <Down>
                  <Time>2 month ago</Time>
                  <Button>Apply</Button>
                </Down>
              </Right>
            </Boxwrap>
          </Box>
          <Box>
            <Boxwrap>
              <Image src={pix} />
              <Right>
                <H4>Nodejs Developer</H4>
                <H2>TalentUp Africa</H2>
                <P>Remote</P>
                <Down>
                  <Time>2 month ago</Time>
                  <Button>Apply</Button>
                </Down>
              </Right>
            </Boxwrap>
          </Box>

          <Box>
            <Boxwrap>
              <Image src={pix} />
              <Right>
                <H4>Frontend Developer</H4>
                <H2>TalentUp Africa</H2>
                <P>Remote</P>
                <Down>
                  <Time>2 month ago</Time>
                  <Button>Apply</Button>
                </Down>
              </Right>
            </Boxwrap>
          </Box>
        </Holder>
      </Wrapper>
    </Container>
  );
};
export default Recently;

const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    height: 110vh;
  }
  @media (max-width: 400px) {
    height: 115vh;
  }
  @media (max-width: 320px) {
    height: 115vh;
  }
`;
const Wrapper = styled.div`
  width: 72%;
  height: 85%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  /* color:#123e7d; */
  @media (max-width: 1024px) {
    width: 95%;
  }
  @media (max-width: 900px) {
    width: 95%;
  }
  @media (max-width: 500px) {
    width: 90%;
    height: 90%;
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
  /* flex-wrap: wrap; */
  align-items: center;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
const Box = styled.div`
  width: 300px;
  height: 150px;
  display: flex;
  justify-content: center;

  align-items: center;
  /* margin-left: 25px; */
  /* margin-top: 15px; */
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media (max-width: 900px) {
    width: 250px;
  }
  @media (max-width: 768px) {
    width: 230px;
  }
`;

const Boxwrap = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const H4 = styled.div`
  color: #123e7d;
  font-size: 20px;
  @media (max-width: 320px) {
    font-size: 16px;
  }
  @media (max-width: 360px) {
    font-size: 16px;
  }
  @media (max-width: 375px) {
    font-size: 17px;
  }
  @media (max-width: 900px) {
    font-size: 16px;
  }
`;
const H2 = styled.div`
  color: #123e7d;
  font-size: 15px;
`;
const P = styled.div`
  font-size: 12px;
  color: #123e7d;
`;
const Down = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Right = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const Time = styled.div`
  color: orange;
  font-size: 12px;
`;
const Button = styled.div`
  width: 30px;
  height: 50px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid orange; */
  color: orange;
  background: inherit;
  font-size: 12px;
`;
