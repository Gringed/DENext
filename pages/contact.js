import React from "react";
import { BsArrowDown, BsCheckLg, BsFacebook, BsFillEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";
import styled from "styled-components";
import Link from "next/link";

const ColorPrim = "#90be3e";
const ColorSec = "whitesmoke";
const ColorTer = "#18191a";
const ColorBg = "#dcdcdc";
const ColorGrey = "#555555";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${ColorTer};
`;
const Container = styled.div`
  margin: ${(props) => (props.margin === "contact" ? "20px 0" : "160px 0 20px 0")};
  display: flex;
  align-items: stretch;
  flex-direction: column;
  width: 100%;
  padding: 10px 50px;
  flex-wrap: wrap;
`;
const Title = styled.h1`
  color: ${ColorSec};
  text-transform: uppercase;
  line-height: 60px;
  font-size: 30px;
  font-weight: 600;
  margin: 0;
  border-bottom: 5px solid ${ColorPrim};
  width: fit-content;
`;

const Contacts = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;
const ContactDiv = styled.div`
  text-align: center;
    margin-bottom: 40px;
    transition: all 0.2s ease-in-out;
    flex:1;
    &:hover .icon {
      transform: scale(1.1, 1.1);
    }
    &:hover .icon svg {
      transform: rotate(360deg);
      transition: all 0.5s ease-in-out;
    }
`;
const Icon = styled.div`
  display: inline-block;
    width: 80px;
    height: 80px;
    color: ${ColorPrim};
    line-height: 80px;
    border-radius: 40px;
    border: solid 1px ${ColorPrim};
    font-size: 20px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover{
      border: solid 1px ${ColorTer};
      color: ${ColorTer};
      background: ${ColorPrim};
    }
`
const TitleContact = styled.h3`
  color: ${ColorSec};
    text-transform: uppercase;
    line-height: 1.5;
    font-weight: 800;
    letter-spacing: 0.08em;
    margin: 10px 0;
`;
const BlocText = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 20px 0;
`
const Text = styled.p`
  color: #ffffff8c;
  & b {
    color: ${ColorPrim};
  }
`
const Contact = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Besoin d'aide ? Des questions sur Dev Engine ?</Title>
        <BlocText>
            <Text>Vous êtes curieux et avez des questions à notre sujet ou sur le site en lui même ?</Text>
            <Text>Un problème à signaler ?</Text>
        </BlocText>
        <BlocText>
            <Text>Support disponible :</Text>
            <Text>Du lundi au vendredi : <b>10h00 à 17h00</b></Text>
            <Text>Week end et jours fériés : <b>Fermé</b></Text>
        </BlocText>
      </Container>
      <Container margin="contact">
        <Contacts>
          <ContactDiv>
            <Link href="https://calendly.com/gringed/premier-entretien" target="_blank">
              <Icon className="icon">
                <BsFillTelephoneFill />
              </Icon>
            </Link>
            <TitleContact>Conférence</TitleContact>
            <Text>Prendre rendez-vous</Text>
          </ContactDiv>
          <ContactDiv>
          <Link href="https://www.facebook.com/DevEngineNet" target="_blank">
              <Icon className="icon">
                <BsFacebook />
              </Icon>
            </Link>
            <TitleContact>Facebook</TitleContact>
            <Text>Contactez nous via Facebook</Text>
          </ContactDiv>
          <ContactDiv>
          <Link href="mailto:contact@devengine.net">
              <Icon className="icon">
                <BsFillEnvelopeFill />
              </Icon>
            </Link>
            <TitleContact>Email</TitleContact>
            <Text>Contactez nous par email</Text>
          </ContactDiv>
        </Contacts>
      </Container>
    </Wrapper>
  )
}

export default Contact
