import { Link } from "gatsby";
import * as React from "react";
import { Col, Container, Row } from "react-grid-system";
import styled from "styled-components";
import { LogoSmallWhite } from "./icons/logo";
import { ActionText, Body } from "./typography";

const ContentContainer = styled.div`
  width: 100vw;
  background-color: rgba(58, 58, 58, 1);
  padding: 2rem;
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
      <Row gutterWidth={16} justify='between'>
        <Col md={3} xs={6}>
          <LogoSmallWhite />
        </Col>
        <Col md={3} xs={6}>
          <LinkColumnSection>
            <ActionText color='white' textAlign='left'>
              Om Zertify
            </ActionText>
            <LinkItem to=''>Contact us</LinkItem>
            <LinkItem to=''>Investors</LinkItem>
            <LinkItem to=''>Sustainability</LinkItem>
            <LinkItem to=''>Work with us</LinkItem>
          </LinkColumnSection>
        </Col>
        <Col md={3} xs={6}>
          <LinkColumnSection>
            <ActionText color='white' textAlign='left'>
              Customer Service
            </ActionText>
            <LinkItem to=''>Payments</LinkItem>
            <LinkItem to=''>Return and Refunds</LinkItem>
            <LinkItem to=''>FAQ</LinkItem>
            <LinkItem to=''>Terms and Conditions</LinkItem>
          </LinkColumnSection>
        </Col>
        <Col md={3} xs={6}>
          <LinkColumnSection>
            <ActionText color='white' textAlign='left'>
              Follow Us
            </ActionText>
            <LinkItem to=''>Instagram</LinkItem>
            <LinkItem to=''>TikTok</LinkItem>
            <LinkItem to=''>Newsletter</LinkItem>
          </LinkColumnSection>
        </Col>
      </Row>
    </Container>
  </ContentContainer>
);

export default Footer;
