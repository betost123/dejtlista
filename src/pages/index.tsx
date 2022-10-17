import * as React from "react";
import type { HeadFC } from "gatsby";
import styled from "styled-components";
import fastighetBild from "../images/Fastighet.png";
import fastighet2 from "../images/fastighet2.png";
import fastighet3 from "../images/fastighet3.png";
import SkyscrpaersImage from "../images/skyscrapers.png";
import ScrollCursor from "../components/icons/scroll_cursor.svg";
import { motion } from "framer-motion";
import { Col, Container, Row } from "react-grid-system";
import { Body, Headline, SmallHeadline } from "../components/typography";
import { HorizontalSpacer } from "../components/spacers";
import Button from "../components/Button";
import { ArrowRightIcon } from "../components/icons/ArrowRightIcon";
import { contactInformation, MediaQuery } from "../utils/styling-helpers";
import TextInput from "../components/TextInput";
import CallToActionImageButton from "../components/CallToActionImageButton";

const HeroImage = styled.img`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  margin-top: -1rem;

  ${MediaQuery.XS} {
    height: 70vh;
  }
`;

const ButtonContainer = styled.div`
  width: 40%;

  ${MediaQuery.XS} {
    width: 100%;
  }
`;

const IndexPage = () => {
  return (
    <main>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <HeroImage
          src={fastighetBild}
          style={{ cursor: `url(${ScrollCursor}), auto` }}
        />
        <HorizontalSpacer spacing={6} />

        <div style={{ backgroundColor: "#F0EEEE", justifyContent: "center" }}>
          <HorizontalSpacer spacing={6} />
          <Container>
            <motion.div
              initial={{ opacity: 0, y: "15vh" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <Col md={8}>
                <Headline>Beräkna din årspremie!</Headline>
                <HorizontalSpacer spacing={2} />
                <Body>
                  Slipp krånglet och frigör ditt kapital med Zertify.
                  Bankdepositionen är en börda, vi låter dig jobba med ditt
                  kapital. Få ditt pris med våran automatiserade beräkning
                  baserad på dagens marknadsvärde.
                </Body>
                <HorizontalSpacer spacing={2} />
                <Row justify='center'>
                  <Col md={6}>
                    <TextInput
                      title='Deposition'
                      endAdornmentText='SEK'
                      placeholder='300 000'
                    />
                  </Col>
                  <Col md={6}>
                    <TextInput
                      title='Årlig premie'
                      endAdornmentText='SEK'
                      placeholder='8 000'
                      hintText='priset ovan är endast riktpriser, alla ansökningar kommer att beräknas unikt'
                    />
                  </Col>
                </Row>
                <HorizontalSpacer spacing={2} />

                <ButtonContainer>
                  <Button title='Ansök' icon={<ArrowRightIcon />} />
                </ButtonContainer>
              </Col>
            </motion.div>
            <HorizontalSpacer spacing={6} />
          </Container>
        </div>
        <HorizontalSpacer spacing={6} />

        <Container>
          <Row gutterWidth={16}>
            <Col md={4}>
              <CallToActionImageButton
                imgSrc={SkyscrpaersImage}
                title='Hyresgäster'
                subtitle='Avtal anpassade för hyresgästen'
                ctaText='Läs mer'
              />
            </Col>
            <Col md={4}>
              <CallToActionImageButton
                imgSrc={fastighet2}
                title='Hyresvärd'
                subtitle='Avtal anpassade för hyresvärden'
                ctaText='Läs mer'
              />
            </Col>
            <Col md={4}>
              <CallToActionImageButton
                imgSrc={fastighet3}
                title='Bli kund hos oss'
                subtitle='Registrera dig på 3 minuter'
                ctaText='Registrera dig'
              />
            </Col>
          </Row>

          <Col md={8}>
            <HorizontalSpacer spacing={12} />
            <Headline>Kontakta oss</Headline>
            <HorizontalSpacer spacing={2} />
            <Body>
              Har du frågor kring hyreslöften? Ring oss eller skriv ett
              meddelande så hjälper vi dig.
            </Body>
            <HorizontalSpacer spacing={4} />

            <Row>
              <Col md={6}>
                <SmallHeadline>Ring oss</SmallHeadline>
                <HorizontalSpacer spacing={1} />
                <a
                  style={{ textDecoration: "none" }}
                  href={`tel:${contactInformation.phone.value}`}
                >
                  <Body color='#3A3A3A'>{contactInformation.phone.title}</Body>
                </a>
              </Col>
              <Col md={6}>
                <SmallHeadline>Mejla oss</SmallHeadline>
                <HorizontalSpacer spacing={1} />
                <a
                  style={{ textDecoration: "none" }}
                  href={`mailto:${contactInformation.email.value}`}
                >
                  <Body color='#3A3A3A'>{contactInformation.email.title}</Body>
                </a>
              </Col>
            </Row>

            <HorizontalSpacer spacing={2} />
            <SmallHeadline>Besöksaddress</SmallHeadline>
            <HorizontalSpacer spacing={1} />
            <Body color='#3A3A3A'>Suhrtevägen 12</Body>
            <Body color='#3A3A3A'>415 29 Göteborg</Body>

            <HorizontalSpacer spacing={2} />
            <Row>
              <Col md={6}>
                <Body color='#3A3A3A'>Måndag - Fredag</Body>
                <Body color='#3A3A3A'>08.00 - 20.00</Body>
              </Col>
              <Col md={6}>
                <Body color='#3A3A3A'>Helgdagar</Body>
                <Body color='#3A3A3A'>06.00 - 16.00</Body>
              </Col>
            </Row>
          </Col>
        </Container>
      </motion.div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Zertified</title>;
