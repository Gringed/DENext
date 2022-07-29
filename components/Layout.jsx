import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ColorPrim = "#90be3e"

const Container = styled.div``;
const Header = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 3;
  border-bottom: 5px solid ${ColorPrim};
`;
const Main = styled.main``;
const FooterContainer = styled.footer``;

const Layout = ({ children }) => {
  return (
    <Container>
      <Head>
        <title>Dev Engine</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Fredoka&display=swap" rel="stylesheet" />
      </Head>
      <Header>
        <Navbar />
      </Header>
      <Main>{children}</Main>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Container>
  );
};

export default Layout;
