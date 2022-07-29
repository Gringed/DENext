import React from "react";
import styled from "styled-components";
import Link from "next/link";

import {
  BsFacebook,
  BsFillEnvelopeFill,
  BsInstagram,
  BsLinkedin,
  BsMap,
  BsPhone,
  BsTwitter,
} from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const ColorPrim = "#90be3e";
const ColorSec = "white";
const ColorTer = "#18191a";
const ColorBg = "#dcdcdc";
const ColorGrey = "#555555";

const Container = styled.div`
  display: flex;
  background: ${ColorGrey};
  flex-wrap: wrap;
  padding: 0 50px;
  justify-content: center;
`;
const Left = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LinkMentions = styled.span`
  text-decoration: none;
  color: ${ColorPrim};
  font-weight: bold;
  padding: 5px 0;
  cursor: pointer;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: ${ColorTer};
    transition: width 500ms ease;
  }
  &:hover::after {
    width: 100%;
  }
`;
const SocialContainer = styled.div`
  display: flex;
  margin: 20px 0;
  flex-wrap: wrap;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #${(props) => props.color};
  color: ${ColorSec};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  cursor: pointer;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  color: ${ColorSec};
  border-bottom: 5px solid ${ColorPrim};
  text-transform: uppercase;
  margin: 30px 0 30px 0;
`;
const List = styled.ul`
  margin: 20px 0;
  padding: 10px;
  list-style: none;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  color: ${ColorSec};
`;
const ListItem = styled.li`
  cursor: pointer;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: ${ColorPrim};
    transition: width 500ms ease;
  }
  &:hover::after {
    width: 100%;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactItem = styled.div`
  display: flex;
  margin: 20px 0 5px 0;
  align-items: center;
  color: ${ColorSec};
`;


function Footer() {
  
    return (
      <Container>
        <Left>
          <Title>Dev engine</Title>
          
          <SocialContainer>
            <Link href="https://www.facebook.com/DevEngineNet">
            <a target="_blank">
              <SocialIcon color="3b5998">
                <BsFacebook />
              </SocialIcon>
              </a>
            </Link>
           <Link href="https://www.instagram.com/devenginecorp/">
            <a target="_blank">
            <SocialIcon color="e4405f">
              <BsInstagram />
            </SocialIcon>
            </a>
            </Link>
            <Link href="mailto:contact@devengine.net">
            <a target="_blank">
            <SocialIcon color="00acee">
              <BsFillEnvelopeFill />
            </SocialIcon>
            </a>
            </Link>
            
          </SocialContainer>
        </Left>
        <Center>
        <Title>Liens utiles</Title>
          <List>
            <ListItem>Services web</ListItem>
            <ListItem>Nos avantages</ListItem>
            <ListItem>Foire aux questions</ListItem>
            <ListItem>Conditions d'utilisations</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          
          <ContactItem>
            <BsPhone style={{ marginRight: "10px" }} /> +33 6 66 66 66 66
          </ContactItem>
          <ContactItem>
            <HiOutlineMail style={{ marginRight: "10px" }} /> contact@devengine.net
          </ContactItem>
          
        </Right>
      </Container>
    );
  };


export default Footer;