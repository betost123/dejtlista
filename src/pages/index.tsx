import * as React from "react";
import type { HeadFC } from "gatsby";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import { Col, Container, Row } from "react-grid-system";
import {
  ActionText,
  Body,
  Headline,
  SmallHeadline,
} from "../components/typography";
import { HorizontalSpacer } from "../components/spacers";

import Modal from "../components/modals/Modal";
import { ApplyContent } from "../components/modals/ModalContents";
import { CheckboxIcon } from "../components/icons/CheckboxIcon";
import { CrownIcon } from "../components/icons/CrownIcon";
import { allTasks } from "../firestore/getTasks";
import { updateTodos } from "../firestore/updateTasks";
import TextInput from "../components/TextInput";
import ImageUpload from "../components/ImageUpload";
import { ChevronDownIcon } from "../components/icons/ChevronDown";
import TaskCard from "../components/TaskCard";

const ContentContainer = styled.div`
  padding: 2rem;
  overflow-x: hidden;
  max-width: 100vw;
`;

const ListItem = styled(Col)`
  padding: 1rem;
  //background-color: rgba(227, 214, 235, 0.288);
  margin: 0.5rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const CheckboxButton = styled.div`
  cursor: pointer;
  :hover {
    filter: brightness(80%);
  }
`;

interface TaskObject {
  id: string;
  title: string;
  checked: boolean;
}

let s4 = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

const IndexPage = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [tasks, setTasks] = React.useState<any>([]);
  const [docId, setDocId] = React.useState("");

  const [newTask, setNewTask] = React.useState("");

  React.useEffect(() => {
    async function fetchMyAPI() {
      const response: any = await allTasks();
      setTasks(response[0].tasks);
      setDocId(response[0].docId);
    }

    fetchMyAPI();
  }, []);

  const onCheckTasks = (index: number) => {
    const task = tasks[index];
    const isChecked = task.checked;

    const copy = [...tasks];

    copy[index].checked = !isChecked;

    setTasks(copy);
    updateTodos(docId, copy);
  };

  const onSubmitTaskImage = (index: number, imageUrl: string) => {
    const task = tasks[index];
    const copy = [...tasks];

    copy[index].imageSrc = imageUrl;

    setTasks(copy);
    updateTodos(docId, copy);
  };

  const completed = tasks.filter((x: TaskObject) => x.checked === true);

  const onWriteNewTask = (event: any) => {
    setNewTask(event.target.value);
  };

  const onClickSaveDate = () => {
    const newDate: TaskObject = { id: s4(), title: newTask, checked: false };
    const copy = [...tasks];
    copy.push(newDate);
    updateTodos(docId, copy);
    setTasks(copy);
    setNewTask("");
  };

  return (
    <div>
      {!modalOpen && (
        <Container>
          <HorizontalSpacer spacing={2} />
          <ContentContainer>
            <Headline color='white'>En riktigt go lista</Headline>
            <HorizontalSpacer spacing={2} />
            <Row>
              <Col
                md={8}
                xs={12}
                style={{ border: "0.5px solid #6E26FC", padding: "1rem" }}
              >
                Lägg till dejt
                <HorizontalSpacer spacing={1} />
                <TextInput onChange={onWriteNewTask} value={newTask} />
                <HorizontalSpacer spacing={1} />
                <Row justify='center'>
                  {newTask.length > 0 && (
                    <CheckboxButton onClick={onClickSaveDate}>
                      <Body color='white'>spara</Body>
                    </CheckboxButton>
                  )}
                </Row>
              </Col>
            </Row>

            <HorizontalSpacer spacing={2} />
            <Row align='center'>
              <Col md={8} xs={12}>
                <Row>
                  {tasks?.map((task: any, index: number) => (
                    <TaskCard
                      key={task.id}
                      index={index}
                      taskTitle={task.title}
                      taskCompleted={task.checked}
                      taskImgSrc={task.imageSrc}
                      onClickChangeCompleted={() => onCheckTasks(index)}
                      onSubmitTaskImage={onSubmitTaskImage}
                    />
                  ))}
                </Row>
              </Col>
              <Col md={4}>
                <Row justify='center'>
                  <SmallHeadline color='#87FF5D'>
                    Avklarat {completed.length} / {tasks?.length}
                  </SmallHeadline>
                </Row>
              </Col>
            </Row>
            <Row justify='center'>
              <Headline color='#87FF5D'>Jag tycker om dig!!!</Headline>
            </Row>
          </ContentContainer>
        </Container>
      )}
      <AnimatePresence initial={false} mode='wait' onExitComplete={() => null}>
        {modalOpen && (
          <Modal
            handleClose={() => setModalOpen(false)}
            modalContent={
              <ApplyContent handleClose={() => setModalOpen(false)} />
            }
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>oskar o betina</title>;
