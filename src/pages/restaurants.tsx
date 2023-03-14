import { Link } from "gatsby";
import * as React from "react";
import { Col, Container, Row } from "react-grid-system";
import styled from "styled-components";
import { s4 } from ".";
import { HorizontalSpacer } from "../components/spacers";
import TaskCard from "../components/TaskCard";
import TextInput from "../components/TextInput";
import {
  ActionText,
  Body,
  Headline,
  SmallHeadline,
} from "../components/typography";
import { allRestaurants } from "../firestore/getRestaurants";
import { updateRestaurants } from "../firestore/updateRestaurants";

const ContentContainer = styled.div`
  padding: 2rem;
  overflow-x: hidden;
  max-width: 100%;
`;

const SelectButtons = styled.div<{ selected: boolean }>`
  border: ${(props) =>
    props.selected ? "0.5px solid black" : "0.5px solid #87FF5D"};
  padding: 1rem;
  background-color: ${(props) => (props.selected ? "#87FF5D" : undefined)};
  display: flex;
  justify-content: center;
`;

const ReastaurantPage = () => {
  const [restaurants, setRestaurants] = React.useState<any>([]);
  const [docId, setDocId] = React.useState("");

  const [newRestaurant, setNewRestaurant] = React.useState("");

  React.useEffect(() => {
    async function fetchMyAPI() {
      const response: any = await allRestaurants();
      setRestaurants(response[0]?.restaurants ?? []);
      setDocId(response[0].docId);
    }

    fetchMyAPI();
  }, []);

  const onCheckRestaurant = (index: number) => {
    const task = restaurants[index];
    const isChecked = task.checked;

    const copy = [...restaurants];

    copy[index].checked = !isChecked;

    setRestaurants(copy);
    updateRestaurants(docId, copy);
  };

  const onSubmitRestaurantImage = (index: number, imageUrl: string) => {
    const copy = [...restaurants];

    copy[index].imageSrc = imageUrl;

    setRestaurants(copy);
    updateRestaurants(docId, copy);
  };

  const completed = restaurants?.filter((x: any) => x.checked === true);

  const onWriteNewTask = (event: any) => {
    setNewRestaurant(event.target.value);
  };

  const onClickSaveNewResyaurant = () => {
    const newDate: any = { id: s4(), title: newRestaurant, checked: false };
    const copy = [...restaurants];
    copy.push(newDate);
    updateRestaurants(docId, copy);
    setRestaurants(copy);
    setNewRestaurant("");
  };

  return (
    <Container style={{ maxWidth: "100%", overflowX: "hidden" }}>
      <HorizontalSpacer spacing={2} />
      <ContentContainer>
        <Headline color='white'>En riktigt go lista</Headline>
        <HorizontalSpacer spacing={4} />
        <Row justify='between' style={{ margin: -15 }}>
          <Col xs={6}>
            <Link to='/' style={{ textDecoration: "none" }}>
              <SelectButtons selected={false}>
                <ActionText color='#87FF5D'>Dejter</ActionText>
              </SelectButtons>
            </Link>
          </Col>
          <Col xs={6}>
            <SelectButtons selected={true}>
              <ActionText color='black'>Restauranger</ActionText>
            </SelectButtons>
          </Col>
        </Row>
        <HorizontalSpacer spacing={4} />
        <Row>
          <Col
            md={8}
            xs={12}
            style={{ border: "0.5px solid #6E26FC", padding: "1rem" }}
          >
            Lägg till restaurang
            <HorizontalSpacer spacing={1} />
            <TextInput onChange={onWriteNewTask} value={newRestaurant} />
            <HorizontalSpacer spacing={1} />
            <Row justify='center'>
              {newRestaurant.length > 0 && (
                <div onClick={onClickSaveNewResyaurant}>
                  <Body color='white'>spara</Body>
                </div>
              )}
            </Row>
          </Col>
        </Row>

        <HorizontalSpacer spacing={2} />
        <Row align='center'>
          <Col md={8} xs={12}>
            <Row>
              {restaurants?.map((task: any, index: number) => (
                <TaskCard
                  key={task.id}
                  index={index}
                  taskTitle={task.title}
                  taskCompleted={task.checked}
                  taskImgSrc={task.imageSrc}
                  onClickChangeCompleted={() => onCheckRestaurant(index)}
                  onSubmitTaskImage={onSubmitRestaurantImage}
                />
              ))}
            </Row>
          </Col>
          <Col md={4}>
            <Row justify='center'>
              <SmallHeadline color='#87FF5D'>
                Avklarat {completed?.length ?? 0} / {restaurants?.length ?? 0}
              </SmallHeadline>
            </Row>
          </Col>
        </Row>
      </ContentContainer>
    </Container>
  );
};

export default ReastaurantPage;
