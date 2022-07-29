import Link from "next/link";
import React from "react";
import styled, { keyframes } from "styled-components";
import {
  BsFacebook,
  BsFillEnvelopeFill,
  BsTelephoneFill,
} from "react-icons/bs";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavItem } from "react-bootstrap";

const ColorPrim = "#90be3e";
const ColorSec = "white";
const ColorTer = "#18191a";
const ColorBg = "#dcdcdc";
const ColorGrey = "#555555";
const textAnimate = keyframes`
  0% {
    background-position: -180px
  }
  60% {
    background-position: 180px
  }
    100% {
    background-position: -180px
    }
    `;

const SocialContainer = styled.div`
  background: ${ColorGrey};
  padding: 10px 50px;
  color: ${ColorPrim};
  display: flex;
  align-items: center;
  & > a {
    margin: 0 10px 0 0;
    transition: all 0.4s ease;
    display: flex;
    &:hover {
      color: ${ColorTer};
    }
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  position: relative;
  padding: 0 50px;
  align-items: center;
  background: ${ColorTer};
  & .navbar {
    margin: 0;
    padding: 0;
  }
  & .navbar .nav .item {
    padding: 25px 10px;
    transition: all 0.4s ease;
    border-top: 5px solid transparent;
    font-weight: 400;
    text-transform: uppercase;
    color: #ffffff8c;
    display: flex;
    align-items: center;
    &:hover {
      background-color: #90be3e;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%2318191A' stroke-width='10.7' stroke-opacity='0.06' %3E%3Ccircle fill='%2390BE3E' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%2390be3e' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%2390BE3E' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
      border-top: 5px solid ${ColorGrey};
      & > a {
        color: ${ColorTer};
      }
    }
  }
`;
const Logo = styled.h1`
  font-family: "Fredoka", sans-serif;
  padding: 0;
  margin: 20px 0;
  font-size: 30px;
  flex: auto;
  font-weight: 600;
  cursor: pointer;
  background: linear-gradient(
    to right,
    #4d4d4d 0,
    ${ColorPrim} 10%,
    #4d4d4d 20%
  );
  background-position: 0;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation-fill-mode: forwards;
  -webkit-text-size-adjust: none;
  animation: ${textAnimate} 4s infinite linear;
`;

const Span = styled.span`
  color: ${(props) => props.color};
  text-transform: uppercase;
`;

const Menu = () => {
  return (
    <>
      <SocialContainer>
        <Link href="https://www.facebook.com/DevEngineNet" target="_blank">
          <a>
            <BsFacebook />
          </a>
        </Link>
        <Link
          href="https://calendly.com/gringed/premier-entretien"
          target="_blank"
        >
          <a>
            <BsTelephoneFill />
          </a>
        </Link>
        <Link href="mailto:contact@devengine.net">
          <a>
            <BsFillEnvelopeFill />
          </a>
        </Link>
      </SocialContainer>
      <Container>
        <Link href="/" className="logo">
          <Logo>
            <Span color={ColorPrim}>Dev</Span>{" "}
            <Span color={ColorGrey}>Engine</Span>
          </Logo>
        </Link>
        <Navbar variant="dark" expand="lg" className="navbar">
          <Container fluid>
            <Navbar.Toggle aria-controls="navbar-dark-example" />
            <Navbar.Collapse id="navbar-dark-example">
              <Nav className="nav">
                <NavItem className="item" id="nav-dropdown-dark-example">
                  {" "}
                  <Link href="/about">A propos</Link>
                </NavItem>
                <NavItem className="item" id="nav-dropdown-dark-example">
                  {" "}
                  <Link href="/services">Services</Link>
                </NavItem>
                <NavItem className="item" id="nav-dropdown-dark-example">
                  {" "}
                  <Link href="/contact">Contact</Link>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </>
  );
};

export default Menu;
