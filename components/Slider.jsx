import Carousel from 'react-bootstrap/Carousel';
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import {
  BsFacebook,
  BsFillEnvelopeFill,
  BsTelephoneFill,
} from "react-icons/bs";

const ColorPrim = "#90be3e";
const ColorSec = "white";
const ColorTer = "#18191a";
const ColorBg = "#dcdcdc";
const ColorGrey = "#555555";

const Container = styled.div`
  & .carousel {
    & img {
      width: 50% !important;
      object-fit: cover;
      margin: auto;
    }
  }
  & .carousel .text {
    position: initial;
    & h1 {
      color: ${ColorPrim};
      text-transform: uppercase;
    }
  }
`

const Slider = () => {
  return (
    <Container>
    <Carousel>
      <Carousel.Item className='carousel'>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/Fex5L6Y.png"
          alt="First slide"
        />
        <Carousel.Caption className='text'>
          <h1>Création web</h1>
          <p>Besoin d'un site ? Nous sommes la pour vous aider</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel'>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/wvFNj1t.png"
          alt="Second slide"
        />

        <Carousel.Caption className='text'>
          <h1>Faites nous confiance</h1>
          <p>N'hésitez pas, contactez nous sans tarder</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel'>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/OQ6XdYB.png"
          alt="Third slide"
        />

        <Carousel.Caption className='text'>
          <h1>Equipe à l'écoute</h1>
          <p>
            Une équipe d'indépendants à votre service
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
  );
}

export default Slider;
