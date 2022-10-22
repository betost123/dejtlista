import * as React from "react";
import type { HeadFC } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "../images/Background.png";
import { motion } from "framer-motion";
import { Col, Row } from "react-grid-system";
import { Body, Headline, SmallHeadline } from "../components/typography";
import { HorizontalSpacer, Spacer } from "../components/spacers";
import Button from "../components/Button";
import { contactInformation, MediaQuery } from "../utils/styling-helpers";
import TextInput from "../components/TextInput";
import { BankIdIcon } from "../components/icons/BankIdIcon";

const HeroImage = styled.img`
  object-fit: cover;
  width: 102vw;
  height: 101vh;
  margin-top: -1rem;

  ${MediaQuery.XS} {
    height: 80vh;
  }
`;

const ContentContainer = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  width: 100%;

  ${MediaQuery.XS} {
    position: relative;
  }
`;

const ColumnContent = styled(Col)`
  width: 100%;
  display: flex;

  height: 100vh;
  flex-direction: column;
  justify-content: center;

  :hover {
    background-color: #232323;
    > * {
      display: block;
    }
  }

  ${MediaQuery.XS} {
    background-color: #232323;
  }
`;

const TextContainer = styled.div`
  padding: 1rem;
  min-height: 50%;
  :hover {
    background-color: #232323;
    > * {
      display: block;
      color: white;
    }
  }

  ${MediaQuery.XS} {
    > * {
      color: white;
    }
  }
`;

const HiddenContent = styled.div`
  display: none;

  ${MediaQuery.XS} {
    display: block;
  }
`;

const IndexPage = () => {
  return (
    <div>
      <HeroImage src={BackgroundImage} />
      <ContentContainer>
        <Row style={{ width: "100%" }} gutterWidth={0}>
          <ColumnContent md={4}>
            <TextContainer>
              <Headline>Hyresgäst</Headline>
              <HorizontalSpacer spacing={1} />
              <HiddenContent>
                <motion.div
                  initial={{ opacity: 0, y: "20vh" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "linear" }}
                >
                  <Body color='white'>Avtal anpassad för hyresgästen</Body>
                  <HorizontalSpacer spacing={2} />
                  <Headline color='white'>Beräkna din årspremie!</Headline>
                  <Body color='white'>
                    Slipp krånglet och frigör ditt kapital med Zertify.
                    Bankdepositionen är en börda, vi låter dig jobba med ditt
                    kapital. <br />
                    <br />
                    Få ditt pris med våran automatiserade beräkning baserad på
                    dagens marknadsvärde.
                  </Body>
                  <HorizontalSpacer spacing={3} />
                  <Row>
                    <Col md={6}>
                      <TextInput
                        title='Deposition'
                        placeholder='300 000'
                        endAdornmentText='SEK'
                      />
                    </Col>
                    <Col md={6}>
                      <TextInput
                        title='Årlig premie'
                        placeholder='8000'
                        endAdornmentText='SEK*'
                        hintText='*Priset ovan är endast riktpriser, alla ansökningar kommer att beräknas unikt'
                      />
                    </Col>
                    <HorizontalSpacer spacing={8} />
                    <Col md={8}>
                      <Button title='Ansök' />
                    </Col>
                  </Row>
                </motion.div>
              </HiddenContent>
            </TextContainer>
          </ColumnContent>
          <ColumnContent md={4}>
            <TextContainer>
              <Headline>Fastighetsägare</Headline>
              <HorizontalSpacer spacing={1} />
              <HiddenContent>
                <motion.div
                  initial={{ opacity: 0, y: "20vh" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "linear" }}
                >
                  <Body color='white'>Avtal anpassad för fastighetsägaren</Body>
                  <HorizontalSpacer spacing={4} />
                  <Headline color='white'>Bli kund hos oss</Headline>
                  <Body color='white'>
                    Registrera dig på 1 minut, skapa en profil som antingen
                    hyresgäst eller hyresvärd.
                  </Body>
                  <HorizontalSpacer spacing={3} />
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Headline
                      textAlign='left'
                      textDecoration='underline'
                      fontSize={16}
                      letterSpacing={1}
                      color='white'
                    >
                      Registrera med Bank Id
                    </Headline>
                    <Spacer spacing={1} />
                    <BankIdIcon />
                  </div>
                </motion.div>
              </HiddenContent>
            </TextContainer>
          </ColumnContent>
          <ColumnContent md={4}>
            <TextContainer>
              <Headline>Mina sidor</Headline>
              <HorizontalSpacer spacing={1} />

              <HiddenContent>
                <motion.div
                  initial={{ opacity: 0, y: "40vh" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "linear" }}
                >
                  <Body color='white'>
                    Hantera dina ärenden och personliga uppgifter
                  </Body>
                  <HorizontalSpacer spacing={4} />
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Headline
                      textAlign='left'
                      textDecoration='underline'
                      fontSize={16}
                      letterSpacing={1}
                      color='white'
                    >
                      Logga in med Bank Id
                    </Headline>
                    <Spacer spacing={1} />
                    <BankIdIcon />
                  </div>
                  <HorizontalSpacer spacing={3} />
                  <Headline color='white'>Kontakta oss</Headline>
                  <Body color='white'>
                    Har du frågor kring? Ring oss eller skriv ett meddelande så
                    hjälper vi dig så fort vi kan.
                  </Body>
                  <HorizontalSpacer spacing={2} />
                  <SmallHeadline color='white'>Ring oss</SmallHeadline>
                  <a
                    href={`tel:${contactInformation.phone.value}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Body color='white'>{contactInformation.phone.title}</Body>
                  </a>
                  <HorizontalSpacer spacing={1} />
                  <Row>
                    <Col md={6}>
                      <Body color='white'>Måndag - Fredag</Body>
                      <Body color='white'>08.00 - 20.00</Body>
                    </Col>
                    <Col md={6}>
                      <Body color='white'>Helgdagar</Body>
                      <Body color='white'>09.00 - 16.00</Body>
                    </Col>
                  </Row>
                  <HorizontalSpacer spacing={1} />
                  <Row>
                    <Col md={6}>
                      <SmallHeadline color='white'>Mejla oss</SmallHeadline>
                      <a
                        href={`mailto:${contactInformation.email.value}`}
                        style={{ textDecoration: "none" }}
                      >
                        <Body color='white'>
                          {contactInformation.email.title}
                        </Body>
                      </a>
                    </Col>
                    <Col md={6}>
                      <SmallHeadline color='white'>Besöksaddress</SmallHeadline>
                      <Body color='white'>Suhrtevägen 12</Body>
                      <Body color='white'>415 29 Göteborg</Body>
                    </Col>
                  </Row>
                </motion.div>
              </HiddenContent>
            </TextContainer>
          </ColumnContent>
        </Row>
      </ContentContainer>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Zertified</title>;
