import styled from "@emotion/styled";
import React from "react";
import Avatar from "./Avatar";
import Header from "./Header";
import TagList from "./TagList";
import ReactMarkdown from "react-markdown";

const StyledCard = styled.div`
  padding: 0.5rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  width: 300px;
  margin-top: 1rem;
`;
const CardContent = styled.p`
  font-size: 0.8rem;
  color: #5e5e7a;
`;
const Card = (props) => {
  return (
    <StyledCard>
      <div style={{ margin: 10 }}>
        <Header title={props.title} />
        <ReactMarkdown children={props.children} />
        <TagList tags={props.tags} />
        <Avatar avatar={props.avatar} />
      </div>
    </StyledCard>
  );
};

export default Card;
