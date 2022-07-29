import React from "react";
import styled from "styled-components";

import { Footer, Slider, Homepage } from "../components";

const ColorPrim = "#90be3e";
const ColorSec = "#18191a";
const ContainerSlide = styled.div`
  background: ${ColorSec};
  border-bottom: 5px solid ${ColorPrim};
  margin-top: 115px;
`;
const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${ColorSec};
`;
const Home = () => {
  return (
    <>
      <ContainerSlide>
        <Slider />
      </ContainerSlide>
      <ContainerHome>
        <Homepage />
      </ContainerHome>
    </>
  );
};

export default Home;
