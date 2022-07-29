import React from "react";
import Accordion from "react-bootstrap/Accordion";

import styled from "styled-components";

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
  margin: 160px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  & .accordion {
    width: 100%;
    & .accordion-header button {
      color: ${ColorTer};
      text-transform: uppercase;
      font-weight: 500;
      &:focus {
        box-shadow: none;
      }
      &:not(.collapsed) {
        background-color: #90be3e;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%2318191A' stroke-width='10.7' stroke-opacity='0.06' %3E%3Ccircle fill='%2390BE3E' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%2390BE3E' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
        background-attachment: fixed;
        background-size: cover;
        color: ${ColorSec};

        &::after {
          background-image: var(--bs-accordion-btn-icon);
        }
      }
    }
    & .accordion-item {
      background: none;
      color: ${ColorSec};
      margin: 5px;
    }
  }
`;
const Icon = styled.p`
  color: green;
  font-size: 40px;
`;
const Title = styled.h1`
  color: ${ColorSec};
  border-bottom: 5px solid ${ColorPrim};
  text-transform: uppercase;
  margin: 30px 0 30px 0;
`;

const About = () => {
  return (
    <Wrapper>
      <Container>
        <Title>A propos</Title>
        <Accordion defaultActiveKey="0" className="accordion">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Comment nos services fonctionnent ?
            </Accordion.Header>
            <Accordion.Body>
              Dev Engine prend en compte vos questions et vos inquiétudes en
              premier lieu si vous hésitez sur l'une de nos formules. Nous
              saurons vous répondre et vous guider sur ce qui vous convient le
              mieux sans vous pousser à l'achat forcé. Tout notre système
              fonctionne par devis et par échange avec vous.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Services proposés ?</Accordion.Header>
            <Accordion.Body>
              - Site vitrine <br />
              - Site e-commerce <br />- Assistance
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Avons nous accès aux fichiers sources ?
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Avez vous la possibilité de gérer l'hébergement ?
            </Accordion.Header>
            <Accordion.Body>
              Oui nous pouvons nous occuper d'héberger votre site, en revanche
              nous ne payons aucun hébergement mais nous proposons une formule
              d'abonnement. Disponible dans les services
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Services proposés ?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </Wrapper>
  );
};

export default About;
