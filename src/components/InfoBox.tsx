import * as React from "react";
import { Col, Row } from "react-grid-system";
import styled from "styled-components";
import {
  CheckboxGreenIcon,
  ChevronRightIcon,
  CrossRedIcon,
} from "./icons/InfoIcons";
import { Spacer } from "./spacers";
import { Body, Headline, SmallHeadline } from "./typography";

interface SubscriptionInfoBoxProps {
  link: string;
  icon: React.ReactNode;
  title: string;
  subjectId: string;
  cost: { cost: number; currency: string; paymentInterval?: string };
  nextPayment?: string;
  checked?: boolean;
  crossed?: boolean;
}

const Box = styled.div`
  border: 0.5px solid white;
`;

const Divider = styled.div`
  width: 100%;
  height: 0.5px;
  background-color: white;
`;

const TitleContent = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContentText = styled.div`
  padding: 1rem;
`;

export const SubscriptionInfoBox: React.FunctionComponent<
  SubscriptionInfoBoxProps
> = ({ link, icon, title, subjectId, cost, nextPayment, checked, crossed }) => {
  return (
    <Box>
      <TitleContent>
        <div style={{ alignItems: "center", display: "flex" }}>
          {icon}
          <Spacer spacing={1} />
          <SmallHeadline color='white' fontSize={16}>
            {title}
          </SmallHeadline>
        </div>
        <ChevronRightIcon />
      </TitleContent>
      <Divider />
      <ContentText>
        <Row align='center'>
          <Col md={3}>
            <Body color='white' fontSize={14}>
              Ärende {subjectId}
            </Body>
          </Col>
          <Col md={3}>
            <Body color='white' fontSize={14}>
              {cost.cost}
              {cost.currency}{" "}
              {cost.paymentInterval && `/ ${cost.paymentInterval}`}
            </Body>
          </Col>
          {nextPayment && (
            <Col md={4}>
              <Body color='white' fontSize={14}>
                Nästa betalning {nextPayment}
              </Body>
            </Col>
          )}
          {checked && (
            <Col md={1}>
              <CheckboxGreenIcon />
            </Col>
          )}
          {crossed && (
            <Col md={1}>
              <CrossRedIcon />
            </Col>
          )}
        </Row>
      </ContentText>
    </Box>
  );
};
