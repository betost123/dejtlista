import * as React from "react";
import styled from "styled-components";
import { contactInformation, MediaQuery } from "../utils/styling-helpers";
import BackgroundImage from "../images/Fastighet.png";
import CongImage from "../images/skyscrapers.png";
import { Body, Headline, SmallHeadline } from "../components/typography";
import { Col, Container, Row } from "react-grid-system";
import { HorizontalSpacer } from "../components/spacers";

const HeroImage = styled.img`
  object-fit: cover;
  width: 102vw;
  height: 101vh;
  margin-top: -1rem;

  ${MediaQuery.XS} {
    height: 70vh;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 30%;
  justify-content: center;
  display: flex;
  width: 100%;
`;

const TextArea = styled.div`
  background-color: white;
  padding: 1rem;
  min-width: 40vw;
`;

const ProfileImage = styled.img`
  object-fit: cover;
  width: 180px;
  height: 180px;
  border-radius: 50%;
`;

const TeamPage = () => {
  return (
    <div>
      <HeroImage src={BackgroundImage} />
      <Content>
        <Container>
          <TextArea>
            <Headline textAlign='center'>Teamet</Headline>
            <HorizontalSpacer spacing={3} />
            <Row>
              <Col md={4}>
                <ProfileImage src={CongImage} />
              </Col>
              <Col md={8}>
                <SmallHeadline>Cong</SmallHeadline>
                <HorizontalSpacer spacing={1} />

                <Body>cong@cova.se</Body>
              </Col>
            </Row>
          </TextArea>
        </Container>
      </Content>
    </div>
  );
};

export default TeamPage;
