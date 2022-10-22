import { Link } from "gatsby";
import * as React from "react";
import { Col, Container, Row } from "react-grid-system";
import styled from "styled-components";
import { LogoSmallWhite } from "./icons/logo";
import { ActionText, Body } from "./typography";

const ContentContainer = styled.div`
  width: 100vw;
  background-color: black;
  padding: 2rem;
  margin-top: -1.5rem;
`;

const LinkItem = styled(Link)`
  color: white;
  text-decoration: none;
  margin-top: 1rem;
  font-size: 12px;
  font-weight: 200;
`;

const LinkColumnSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
`;

const Footer: React.FunctionComponent = () => (
  <ContentContainer>
    <Container>
      <Row gutterWidth={16} justify='center' align='center'>
        <Col md={4} xs={6}>
          <LinkColumnSection>
            <ActionText color='white' textAlign='left'>
              Om Zertify
            </ActionText>
            <LinkItem to=''>Teamet</LinkItem>
            <LinkItem to=''>Våra kunder</LinkItem>
          </LinkColumnSection>
        </Col>
        <Col md={4} xs={6}>
          <LinkColumnSection>
            <ActionText color='white' textAlign='left'>
              Copyright 2022 @ Zertify AB
            </ActionText>
          </LinkColumnSection>
        </Col>
        <Col md={4} xs={6}>
          <LinkColumnSection>
            <ActionText color='white' textAlign='left'>
              Kundservice
            </ActionText>
            <LinkItem to=''>Kontakta oss</LinkItem>
            <LinkItem to=''>Villkor</LinkItem>
          </LinkColumnSection>
        </Col>
      </Row>
    </Container>
  </ContentContainer>
);

export default Footer;
