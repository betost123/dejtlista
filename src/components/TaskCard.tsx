import * as React from "react";
import { Row } from "react-grid-system";
import styled from "styled-components";
import { CheckboxIcon } from "./icons/CheckboxIcon";
import { ChevronDownIcon, ChevronUpIcon } from "./icons/ChevronDown";
import { CrownIcon } from "./icons/CrownIcon";
import ImageUpload from "./ImageUpload";
import { SlideOutHeight } from "./SlideOutHeight";
import { HorizontalSpacer } from "./spacers";
import { ActionText } from "./typography";

interface Props {
  index: number;
  taskTitle: string;
  taskCompleted: boolean;
  onClickChangeCompleted: () => void;
  taskImgSrc?: string;
  onSubmitTaskImage: (index: number, imageSrc: string) => void;
}

const TaskCardContainer = styled.div`
  width: 100%;
  padding: 1rem 1rem 0.5rem 1rem;
  background-color: #6d26fc51;
  margin-bottom: 1rem;
`;

const TextSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TaskImage = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
`;

const TaskCard: React.FunctionComponent<Props> = ({
  index,
  taskTitle,
  taskCompleted,
  onClickChangeCompleted,
  taskImgSrc,
  onSubmitTaskImage,
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <TaskCardContainer>
      <TextSection>
        <ActionText>{taskTitle}</ActionText>
        <div onClick={onClickChangeCompleted}>
          {taskCompleted ? <CrownIcon /> : <CheckboxIcon />}
        </div>
      </TextSection>
      <HorizontalSpacer spacing={1} />
      {open && (
        <SlideOutHeight>
          {taskImgSrc ? (
            <Row justify='center'>
              <TaskImage src={taskImgSrc} alt='img' />
            </Row>
          ) : (
            <ImageUpload onSuccessfulUpload={onSubmitTaskImage} index={index} />
          )}
          <HorizontalSpacer spacing={1} />
        </SlideOutHeight>
      )}
      <Row justify='center'>
        <div onClick={() => setOpen(!open)}>
          {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </div>
      </Row>
    </TaskCardContainer>
  );
};

export default TaskCard;
