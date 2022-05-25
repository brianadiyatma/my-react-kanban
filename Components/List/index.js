import React from "react";
import Header from "./Header";
import Separator from "./Separator";
import Card from "../Card/index";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 350px;
`;

const List = () => {
  return (
    <Container>
      <Header />
      <Separator />
      <Card>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour,
      </Card>
      <Card>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour,
      </Card>
    </Container>
  );
};

export default List;
