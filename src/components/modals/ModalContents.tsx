import * as React from "react";
import { Col, Row } from "react-grid-system";
import styled from "styled-components";
import Button from "../Button";
import { ArrowRightIcon } from "../icons/ArrowRightIcon";
import { CrossWhiteIcon } from "../icons/InfoIcons";
import { HorizontalSpacer } from "../spacers";
import TextInput from "../TextInput";
import { Body, Headline, SmallHeadline } from "../typography";

const ContentContainer = styled.div`
  padding: 2rem;
  background-color: #ded8d2;
  width: 80%;
`;

interface Props {
  handleClose: () => void;
}

export const ApplyContent: React.FunctionComponent<Props> = ({
  handleClose,
}) => {
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);

  const onChangePassword = (event: any) => {
    setPassword(event.target.value);
  };

  const onClickLogIn = () => {
    if (password.toLowerCase() === "bingo" || password === "jagälskardigg") {
      handleClose();
    } else {
      setError(true);
    }
  };

  return (
    <ContentContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Headline>hej</Headline>
      </div>

      <HorizontalSpacer spacing={4} />

      <Row>
        <Col md={6}>
          <TextInput
            title='Lösenord'
            variant='secondary'
            onChange={onChangePassword}
          />
          <HorizontalSpacer spacing={1} />
        </Col>
      </Row>
      <HorizontalSpacer spacing={3} />
      <Col md={6}>
        <Button
          title='Logga in'
          icon={<ArrowRightIcon />}
          variant='secondary'
          onClick={onClickLogIn}
        />
      </Col>
      <HorizontalSpacer spacing={3} />
      {error && <SmallHeadline>fel lösen</SmallHeadline>}
      <HorizontalSpacer spacing={3} />
    </ContentContainer>
  );
};
