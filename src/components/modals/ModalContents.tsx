import * as React from "react";
import { Col, Row } from "react-grid-system";
import styled from "styled-components";
import Button from "../Button";
import { ArrowRightIcon } from "../icons/ArrowRightIcon";
import { CrossWhiteIcon } from "../icons/InfoIcons";
import { HorizontalSpacer } from "../spacers";
import TextInput from "../TextInput";
import { Body, Headline } from "../typography";

const ContentContainer = styled.div`
  padding: 2rem;
  background-color: #ded8d2;
`;

interface Props {
  handleClose?: () => void;
}

export const ApplyContent: React.FunctionComponent<Props> = ({
  handleClose,
}) => {
  return (
    <ContentContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Headline>Ansök om hyreslöfte</Headline>
        <div style={{ cursor: "pointer" }} onClick={handleClose}>
          <CrossWhiteIcon color='black' />
        </div>
      </div>
      <HorizontalSpacer spacing={1} />
      <Col md={8} xs={12}>
        <Body>
          Vid en ansökning kommer en identifiering med BankID att behövas. En
          kreditkontroll kommer även att göras. Ett konto kommer att automatisk
          skapas när identifiering görs. Logga in med BankID för att se dina
          ärenden.
        </Body>
      </Col>
      <HorizontalSpacer spacing={4} />

      <Row>
        <Col md={6}>
          <TextInput
            placeholder='300 000'
            title='Desposition'
            endAdornmentText='SEK'
            variant='secondary'
          />
          <HorizontalSpacer spacing={1} />
        </Col>
        <Col md={6}>
          <TextInput
            placeholder='551378-4012'
            title='Organisationsnummer'
            variant='secondary'
          />
          <HorizontalSpacer spacing={1} />
        </Col>
        <Col md={6}>
          <TextInput
            placeholder='cova ab'
            title='Företag'
            variant='secondary'
          />
          <HorizontalSpacer spacing={1} />
        </Col>
        <Col md={6}>
          <TextInput
            placeholder='tommy@cova.se'
            title='Email'
            variant='secondary'
          />
          <HorizontalSpacer spacing={1} />
        </Col>
      </Row>
      <HorizontalSpacer spacing={1} />
      <Col md={6}>
        <Button
          title='Ansök med Bank Id'
          icon={<ArrowRightIcon />}
          variant='secondary'
        />
      </Col>
      <HorizontalSpacer spacing={3} />
      <Col md={8} xs={12}>
        <Body>
          Mer information kring villkor och regler här. Vid ansökning godkänner
          du härmed att gå med en kreditkontroll. Läs mer om våra villkor här
        </Body>
      </Col>
    </ContentContainer>
  );
};
