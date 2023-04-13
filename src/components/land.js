import React from "react";
import styled from "styled-components";
import pix from "../components/landing.png";
const Land = () => {
  return (
    <Container>
      <Card>
        <Cardwrap>
          <Image src={pix} />
          <Text>
            <H1>Land a dream US remote Job</H1>
            <P>
              Employers are always checking our pool of talent for their next
              hire
            </P>
            <Down>
              <Button>Join Now</Button>
              <Buttoned>Search Job</Buttoned>
            </Down>
          </Text>
          <Unknown></Unknown>
        </Cardwrap>
      </Card>
    </Container>
  );
};
export default Land;

const Container = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    display: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 900px) {
    display: none;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

const Card = styled.div`
  width: 80%;
  height: 200px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #123e7d;
`;
const Cardwrap = styled.div`
  width: 85%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
const Image = styled.img`
  width: 300px;
  height: 250px;
  /* position: absolute; */
  margin-bottom: 55px;
`;
const Text = styled.div`
  width: 400px;
  height: 140px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const H1 = styled.div`
  font-size: 23px;
  color: white;
  font-weight: bold;
`;
const P = styled.div`
  color: white;
  font-size: 13px;
`;
const Down = styled.div`
  width: 330px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Button = styled.div`
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
  color: white;
  font-size: 13px;
  border-radius: 5px;
`;
const Buttoned = styled.div`
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: orange; */
  background: inherit;
  border: 1px solid orange;
  color: orange;
  font-size: 13px;
  border-radius: 5px;
`;
const Unknown = styled.div`
  width: 0px;
  height: 0px;
`;
