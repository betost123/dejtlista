import * as React from "react";
import type { HeadFC } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "../images/pages-background.png";
import { motion } from "framer-motion";
import { Col, Row } from "react-grid-system";
import { Body, Headline, SmallHeadline } from "../components/typography";
import { HorizontalSpacer, Spacer } from "../components/spacers";
import Button from "../components/Button";
import { contactInformation, MediaQuery } from "../utils/styling-helpers";
import TextInput from "../components/TextInput";
import { BankIdIcon } from "../components/icons/BankIdIcon";
import { MessageInfoBox, SubscriptionInfoBox } from "../components/InfoBox";
import { ArrowRightIcon } from "../components/icons/ArrowRightIcon";
import { BuilidngIcon, InfoIcon } from "../components/icons/InfoIcons";

const HeroImage = styled.img`
  object-fit: cover;
  width: 102vw;
  height: 101vh;
  margin-top: -1rem;

  ${MediaQuery.XS} {
    height: 70vh;
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

const MyPages = () => {
  return (
    <div>
      <HeroImage src={BackgroundImage} />
      <ContentContainer>
        <Row style={{ width: "100%" }} gutterWidth={0}>
          <ColumnContent md={4}>
            <TextContainer>
              <Headline>Prenumerationer</Headline>
              <HorizontalSpacer spacing={1} />
              <HiddenContent>
                <motion.div
                  initial={{ opacity: 0, y: "20vh" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "linear" }}
                >
                  <Body color='white'>Du har 1 p??g??ende ??rende</Body>
                  <HorizontalSpacer spacing={2} />
                  <SubscriptionInfoBox
                    link='/'
                    title='P??g??ende'
                    icon={<InfoIcon />}
                    subjectId='A1006B'
                    cost={{ cost: 5600, currency: "SEK" }}
                  />
                  <HorizontalSpacer spacing={1} />
                  <SubscriptionInfoBox
                    link='/'
                    title='G??rdafastigheter AB / G??rdav??gen 10'
                    icon={<BuilidngIcon />}
                    subjectId='10067A'
                    cost={{
                      cost: 7600,
                      currency: "SEK",
                      paymentInterval: "halv??r",
                    }}
                    nextPayment='22-02-07'
                    checked
                  />
                  <HorizontalSpacer spacing={1} />
                  <SubscriptionInfoBox
                    link='/'
                    title='G??teborgs lokaler / Solhusgatan 7'
                    icon={<BuilidngIcon />}
                    subjectId='10889A'
                    cost={{
                      cost: 3800,
                      currency: "SEK",
                      paymentInterval: "m??nad",
                    }}
                    nextPayment='22-02-07'
                    crossed
                  />
                  <HorizontalSpacer spacing={3} />
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Headline
                      textAlign='left'
                      textDecoration='underline'
                      fontSize={16}
                      letterSpacing={1}
                      color='
                      #C99100'
                    >
                      Se alla dina prenumerationer
                    </Headline>
                    <Spacer spacing={1} />
                    <ArrowRightIcon color='#C99100' />
                  </div>
                </motion.div>
              </HiddenContent>
            </TextContainer>
          </ColumnContent>
          <ColumnContent md={4}>
            <TextContainer>
              <Headline>Meddelanden</Headline>
              <HorizontalSpacer spacing={1} />
              <HiddenContent>
                <motion.div
                  initial={{ opacity: 0, y: "20vh" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "linear" }}
                >
                  <Body color='white'>Du har 2 nya meddelanden</Body>
                  <HorizontalSpacer spacing={2} />
                  <MessageInfoBox
                    title='Ladda upp ditt kontrakt f??r G??rdagatan 10'
                    message='Meddelande fr??n ZertifyEr kreditkoll blev godk??nd, kontakta eran hyresv??rd med v??rat hyresl??fte och forts??tt kontraktskrivningen. Forts??tt sedan ??renden med att ladda upp kontraktet. Erat intyg finns tillg??ngligt i det p??g??ende ??rendet h??r.Forts??tt ??rendet h??r.'
                  />
                  <HorizontalSpacer spacing={1} />
                  <MessageInfoBox
                    title='Din betalning f??r solhusgatan 7 misslyckades'
                    message='Du har en missad betalning.'
                  />
                  <HorizontalSpacer spacing={1} />
                  <MessageInfoBox
                    title='V??lkommen till Zertify'
                    message='Du har en missad betalning.'
                    oldMessage
                  />
                  <HorizontalSpacer spacing={3} />
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Headline
                      textAlign='left'
                      textDecoration='underline'
                      fontSize={16}
                      letterSpacing={1}
                      color='
                      #C99100'
                    >
                      Se alla dina meddelanden
                    </Headline>
                    <Spacer spacing={1} />
                    <ArrowRightIcon color='#C99100' />
                  </div>
                  <HorizontalSpacer spacing={3} />
                  <Headline color='white'>Dokument</Headline>
                  <Body color='white'>Du har 1 nytt dokument</Body>
                  <HorizontalSpacer spacing={3} />
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Headline
                      textAlign='left'
                      textDecoration='underline'
                      fontSize={16}
                      letterSpacing={1}
                      color='
                      #C99100'
                    >
                      Se alla dina dokument
                    </Headline>
                    <Spacer spacing={1} />
                    <ArrowRightIcon color='#C99100' />
                  </div>
                  <HorizontalSpacer spacing={3} />
                </motion.div>
              </HiddenContent>
            </TextContainer>
          </ColumnContent>
          <ColumnContent md={4}>
            <TextContainer>
              <Headline>Cova AB</Headline>
              <HorizontalSpacer spacing={1} />

              <HiddenContent>
                <motion.div
                  initial={{ opacity: 0, y: "40vh" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "linear" }}
                >
                  <Headline
                    textAlign='left'
                    textDecoration='underline'
                    fontSize={16}
                    letterSpacing={1}
                    color='white'
                  >
                    Villkor f??r hantering av dina personuppgifter
                  </Headline>
                  <HorizontalSpacer spacing={2} />
                  <Row>
                    <Col md={6} style={{ padding: "1rem" }}>
                      <SmallHeadline color='white'>
                        Organisationsnummer
                      </SmallHeadline>
                      <Body color='white'>551378-4012</Body>
                    </Col>
                    <Col md={6} style={{ padding: "1rem" }}>
                      <SmallHeadline color='white'>F??retag</SmallHeadline>
                      <Body color='white'>cova ab</Body>
                    </Col>
                    <Col md={6} style={{ padding: "1rem" }}>
                      <SmallHeadline color='white'>F??retr??dare</SmallHeadline>
                      <Body color='white'>Tommy Eriksson</Body>
                    </Col>
                    <Col md={6} style={{ padding: "1rem" }}>
                      <SmallHeadline color='white'>Email</SmallHeadline>
                      <Body color='white'>tommy@cova.se</Body>
                    </Col>
                    <Col md={6} style={{ padding: "1rem" }}>
                      <SmallHeadline color='white'>Telefonnummer</SmallHeadline>
                      <Body color='white'>-</Body>
                    </Col>
                  </Row>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Headline
                      textAlign='left'
                      textDecoration='underline'
                      fontSize={16}
                      letterSpacing={1}
                      color='
                      #C99100'
                    >
                      ??ndra kontaktuppgifter
                    </Headline>
                    <Spacer spacing={1} />
                    <ArrowRightIcon color='#C99100' />
                  </div>
                  <HorizontalSpacer spacing={3} />
                  <Headline color='white'>Kortinformation</Headline>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Headline
                      textAlign='left'
                      textDecoration='underline'
                      fontSize={16}
                      letterSpacing={1}
                      color='white'
                    >
                      Villkor f??r hantering av kortinformation
                    </Headline>
                  </div>
                  <HorizontalSpacer spacing={3} />
                  <SmallHeadline color='white'>Kortnummer</SmallHeadline>
                  <Body color='white'>XXXX XXXX XXXX XX24</Body>
                  <HorizontalSpacer spacing={3} />
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Headline
                      textAlign='left'
                      textDecoration='underline'
                      fontSize={16}
                      letterSpacing={1}
                      color='
                      #C99100'
                    >
                      ??ndra kortinformation
                    </Headline>
                    <Spacer spacing={1} />
                    <ArrowRightIcon color='#C99100' />
                  </div>
                </motion.div>
              </HiddenContent>
            </TextContainer>
          </ColumnContent>
        </Row>
      </ContentContainer>
    </div>
  );
};

export default MyPages;

export const Head: HeadFC = () => <title>oskar o betina</title>;
