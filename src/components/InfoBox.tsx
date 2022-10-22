import { motion } from "framer-motion";
import * as React from "react";
import { Col, Row } from "react-grid-system";
import styled from "styled-components";
import {
  CheckboxGreenIcon,
  ChevronRightIcon,
  CrossRedIcon,
  CrossWhiteIcon,
  InfoIcon,
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
  cursor: pointer;
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

interface MessageProps {
  title: string;
  message: string;
  oldMessage?: boolean;
}

const MessageContainer = styled.div<{ oldMessage?: boolean }>`
  opacity: ${(props) => (props.oldMessage ? 0.5 : 1)};
`;

export const MessageInfoBox: React.FunctionComponent<MessageProps> = ({
  title,
  message,
  oldMessage,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <MessageContainer oldMessage={oldMessage}>
      <Box>
        <TitleContent onClick={() => setIsOpen(!isOpen)}>
          <div style={{ alignItems: "center", display: "flex" }}>
            <InfoIcon />
            <Spacer spacing={1} />
            <SmallHeadline color='white' fontSize={16}>
              {title}
            </SmallHeadline>
          </div>
          <motion.div
            animate={{
              rotate: isOpen ? 0 : 45,
            }}
          >
            <CrossWhiteIcon />
          </motion.div>
        </TitleContent>
        {isOpen && (
          <>
            <Divider />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeIn" }}
            >
              <ContentText>
                <Body color='white' fontSize={14}>
                  {message}
                </Body>
              </ContentText>
            </motion.div>
          </>
        )}
      </Box>
    </MessageContainer>
  );
};
