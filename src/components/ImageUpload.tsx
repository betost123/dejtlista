import * as React from "react";
import { Row } from "react-grid-system";
import styled from "styled-components";
import { uploadImagesToTasks } from "../firestore/uploadImages";
import Button from "./Button";
import { BeerIcon } from "./icons/BeerIcon";
import { HorizontalSpacer } from "./spacers";
import { ActionText } from "./typography";

const VisuallyHiddenInput = styled.input`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const UploadCircle = styled.div`
  width: 160px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 1rem;
  flex-direction: column;
  border: 0.5px solid white;
`;

const UploadButton = styled.div`
  border: 0.5px solid white;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white;
  font-size: 12px;
  font-weight: 700;
  border-radius: 32px;
  margin-top: 1rem;

  :hover {
    opacity: 0.5;
  }
`;

interface Props {
  index: number;
  onSuccessfulUpload: (index: number, imageSrc: string) => void;
}

const ImageUpload: React.FunctionComponent<Props> = ({
  onSuccessfulUpload,
  index,
}) => {
  const [file, setFile] = React.useState("");

  const onChangeImage = (event: any) => {
    setFile(event.target.files[0]);
  };

  const onSuccess = (url: string) => {
    console.log("the url: ", url);
    onSuccessfulUpload(index, url);
  };

  const onClickUploadImage = () => {
    if (!file || file.length < 1) {
      console.log("no file");
    } else {
      uploadImagesToTasks(file, onSuccess);
    }
  };

  return (
    <div>
      <VisuallyHiddenInput
        id='fileUpload'
        type='file'
        name='fileUpload'
        onChange={onChangeImage}
      />
      <Row justify='center'>
        <label htmlFor='fileUpload'>
          <UploadCircle>
            <ActionText>Välj bild</ActionText>
            <HorizontalSpacer spacing={2} />
            <BeerIcon />
          </UploadCircle>
        </label>
      </Row>
      {file && (
        <UploadButton onClick={onClickUploadImage}>Ladda upp</UploadButton>
      )}
    </div>
  );
};

export default ImageUpload;
