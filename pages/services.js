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
  justify-content: center;
  align-items: stretch;
  flex-direction: row;
  width: 100%;
  padding: 10px 50px;
  flex-wrap: wrap;
`;
const Package = styled.div`
  width: 50%;
  border: solid 1px rgba(85, 85, 85, 0.28);
  text-align: center;
  transition: all 0.2s ease-in-out;
  margin: 10px 0;
  padding-bottom: 20px;
  &:hover {
    border: solid 1px ${ColorPrim};
  }
  & svg {
    color: ${ColorSec};
  }
`;
const Title = styled.p`
  color: ${ColorSec};
  text-transform: uppercase;
  line-height: 60px;
  height: 60px;
  background-color: #90be3e;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%2318191A' stroke-width='10.7' stroke-opacity='0.06' %3E%3Ccircle fill='%2390BE3E' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%2390BE3E' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  font-weight: 600;
  margin: 0;
`;
const Price = styled.div`
  height: 100px;
  line-height: 100px;
  color: ${ColorBg};
  letter-spacing: -0.7px;
  & span {
    font-size: 25px;
    color: ${ColorPrim};
  }
`;
const List = styled.ul`
  padding: 0;
`;
const ListItem = styled.li`
  list-style-type: none;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 80%;
  margin: auto;
  border-bottom: 1px dotted #ccc;
  color: ${(props) => (props.imp ? ColorPrim : ColorBg)};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & svg {
    margin-right: 5px;
  }
`;
const BlocImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Image = styled.img`
  width: 50%;
`;
const Contacts = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;
const Contact = styled.div`
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
const Text = styled.p`
  color: ${ColorGrey};
`

const Services = () => {
  return (
    <Wrapper>
      <Container>
        <Package>
          <Title>Site vitrine</Title>
          <Price>
            À partir de <span>350€</span>¹ | <span>45€</span>/mois¹ ² HT
          </Price>
          <List>
            <ListItem imp="important">
              <BsCheckLg /> Tutoriel de la gestion du site
            </ListItem>
            <ListItem>
              <BsCheckLg /> Design personnalisé
            </ListItem>
            <ListItem imp="important">
              <BsCheckLg /> Le code vous appartient
            </ListItem>
            <ListItem imp="important">
              <BsCheckLg /> Compatible tout écrans
            </ListItem>
            <ListItem>
              <BsCheckLg /> Suivi par notre équipe
            </ListItem>
            <ListItem>
              <BsCheckLg /> Connexion sécurisée (https)
            </ListItem>
            <ListItem>
              <BsCheckLg /> Mise en conformité RGPD
            </ListItem>
            <ListItem>
              <BsCheckLg /> Conseil et optimisation marketing
            </ListItem>
          </List>
          <BsArrowDown />
        </Package>
        <Package>
          <Title>Site vitrine</Title>
          <Price>
            À partir de <span>1000€</span>¹ | <span>100€</span>/mois¹ ² HT
          </Price>
          <List>
            <ListItem imp="important">
              <BsCheckLg /> Paiement CB et Paypal sécurisé
            </ListItem>
            <ListItem imp="important">
              <BsCheckLg /> Tutoriel de la gestion du site
            </ListItem>
            <ListItem>
              <BsCheckLg /> Design personnalisé
            </ListItem>
            <ListItem imp="important">
              <BsCheckLg /> Le code vous appartient
            </ListItem>
            <ListItem imp="important">
              <BsCheckLg /> Compatible tout écrans
            </ListItem>
            <ListItem>
              <BsCheckLg /> Suivi par notre équipe
            </ListItem>
            <ListItem>
              <BsCheckLg /> Connexion sécurisée (https)
            </ListItem>
            <ListItem>
              <BsCheckLg /> Mise en conformité RGPD
            </ListItem>
            <ListItem>
              <BsCheckLg /> Conseil et optimisation marketing
            </ListItem>
          </List>
          <BsArrowDown />
        </Package>
        <Package>
          <Title>Abonnement Hébergement web</Title>
          <Price>
            À partir de <span>15€</span>/mois¹ ² HT
          </Price>
          <BlocImage>
            <Image src="https://www.joomladay.fr/images/2020/sponsors/planethoster-logo.svg" />
          </BlocImage>
          <List>
            <ListItem>
              <BsCheckLg /> Multi-sites
            </ListItem>
            <ListItem imp="important">
              <BsCheckLg /> Certification SSL
            </ListItem>
            <ListItem>
              <BsCheckLg /> Protection anti-DDoS
            </ListItem>
            <ListItem imp="important">
              <BsCheckLg /> Activation instantanée
            </ListItem>
            <ListItem>
              <BsCheckLg /> Bande passante <b>&nbsp;ILLIMITEE</b>
            </ListItem>
            <ListItem>
              <BsCheckLg /> Espace disque <b>&nbsp;ILLIMITE</b>
            </ListItem>
            <ListItem imp="important">
              <BsCheckLg /> Hébergement stable et renouvelable
            </ListItem>
            <ListItem>
              <BsCheckLg /> Maintenance du site | Jours ouvrables
            </ListItem>
            <ListItem imp="important">
              <BsCheckLg /> Gestion totale de notre équipe
            </ListItem>
          </List>
          <BsArrowDown />
        </Package>
      </Container>
      <Container margin="contact">
        <Contacts>
          <Contact>
            <Link href="https://calendly.com/gringed/premier-entretien" target="_blank">
              <Icon className="icon">
                <BsFillTelephoneFill />
              </Icon>
            </Link>
            <TitleContact>Conférence</TitleContact>
            <Text>Prendre rendez-vous</Text>
          </Contact>
          <Contact>
          <Link href="https://www.facebook.com/DevEngineNet" target="_blank">
              <Icon className="icon">
                <BsFacebook />
              </Icon>
            </Link>
            <TitleContact>Facebook</TitleContact>
            <Text>Commander via Facebook</Text>
          </Contact>
          <Contact>
          <Link href="mailto:contact@devengine.net">
              <Icon className="icon">
                <BsFillEnvelopeFill />
              </Icon>
            </Link>
            <TitleContact>Email</TitleContact>
            <Text>Commandez par email</Text>
          </Contact>
        </Contacts>
      </Container>
    </Wrapper>
  );
};

export default Services;
