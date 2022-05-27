import React from "react";
import Header from "./Header";
import Separator from "./Separator";
import Card from "../Card/index";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 350px;
`;

const List = (props) => {
  return (
    <Container>
      <Header
        title={props.title}
        description={props.description}
        cover={props.cover}
      />
      <Separator />
      {props.cards.map((item, i) => (
        <Card key={i} title={item.title} avatar={item.avatar} tags={item.tags}>
          {item.content}
        </Card>
      ))}
    </Container>
  );
};

export default List;
