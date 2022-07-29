import Link from "next/link";
import React from "react";
import styled from "styled-components";

const ColorPrim = "#90be3e";
const ColorSec = "white";
const ColorTer = "#18191a";
const ColorBg = "#dcdcdc";
const ColorGrey = "#555555";

const Container = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
`;
const Title = styled.h1`
  color: ${ColorSec};
  margin: 30px;
  border-bottom: 5px solid ${ColorPrim};
`;
const Body = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const Bloc = styled.div`
  display: flex;
  flex-direction: ${(props) => props.row ? props.row : ''};
  margin: 40px 0;
`;
const Left = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  & img {
    width: 50%;
    object-fit: cover;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  & h1 {
    color: ${ColorSec};
  }
`;
const Homepage = () => {
  return (
    <Container>
      <Title>Fonctionnement</Title>
      <Body>
        <Bloc>
        <Left>
          <img
            src="https://i.imgur.com/8Z7XRbG.png"
            alt="Mascotte DE"
          />
        </Left>
        <Right>
          <h1>1. La Maquette</h1>
          <p></p>
        </Right>
        </Bloc>
        <Bloc row="row-reverse">
        <Left>
          <img
            src="https://cdn.pixabay.com/photo/2021/03/27/06/31/code-6127616_960_720.png"
            alt="Code development"
          />
        </Left>
        <Right>
          <h1>2. Développement</h1>
          <p></p>
        </Right>
        </Bloc>
        <Bloc>
        <Left>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1039/1039328.png"
            alt="Tests"
          />
        </Left>
        <Right>
          <h1>3. Les tests</h1>
          <p></p>
        </Right>
        </Bloc>
        <Bloc row="row-reverse">
        <Left>
          <img
            src="https://cdn-icons-png.flaticon.com/512/330/330714.png"
            alt="Cadeau"
          />
        </Left>
        <Right>
          <h1>4. La livraison</h1>
          <p></p>
        </Right>
        </Bloc>
      </Body>
    </Container>
  );
};

export default Homepage;
