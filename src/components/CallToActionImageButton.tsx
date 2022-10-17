import { motion } from "framer-motion";
import * as React from "react";
import styled from "styled-components";
import { HorizontalSpacer } from "./spacers";
import { ActionText, Body, Headline } from "./typography";

interface CTAImageButtonProps {
  onClick?: () => void;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  imgSrc: string;
}

const ImageContainer = styled.img`
  width: 100%;
  height: 540px;
  object-fit: cover;
  position: relative;
  cursor: pointer;
  overflow: hidden;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 1rem;
  padding-top: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80%;
  cursor: pointer;
`;

const CallToActionImageButton: React.FunctionComponent<CTAImageButtonProps> = ({
  onClick,
  title,
  subtitle,
  ctaText,
  imgSrc,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 1 },
      }}
    >
      <ImageContainer src={imgSrc} />
      <TextContainer>
        <div>
          <Headline color='white' textAlign='center'>
            {title}
          </Headline>
          <HorizontalSpacer spacing={1} />
          <Body color='white' textAlign='center'>
            {subtitle}
          </Body>
        </div>
        <ActionText>{ctaText}</ActionText>
      </TextContainer>
    </motion.div>
  );
};

export default CallToActionImageButton;
