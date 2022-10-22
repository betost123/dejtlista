import * as React from "react";
import styled from "styled-components";
import { contactInformation, MediaQuery } from "../utils/styling-helpers";
import BackgroundImage from "../images/Fastighet.png";
import { Headline, SmallHeadline } from "../components/typography";
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
`;

const CustomerServicePage = () => {
  return (
    <div>
      <HeroImage src={BackgroundImage} />
      <Content>
        <Container>
          <TextArea>
            <Headline>Customer Service</Headline>
            <HorizontalSpacer spacing={2} />
            <SmallHeadline>
              Telefon: {contactInformation.phone.title}
            </SmallHeadline>
            <HorizontalSpacer spacing={1} />

            <SmallHeadline>
              Mail: {contactInformation.email.title}
            </SmallHeadline>
          </TextArea>
        </Container>
      </Content>
    </div>
  );
};

export default CustomerServicePage;
