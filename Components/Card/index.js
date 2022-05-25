import styled from "@emotion/styled";
import React from "react";
import Avatar from "./Avatar";
import Header from "./Header";
import TagList from "./TagList";

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
const Card = ({ children }) => {
  return (
    <StyledCard>
      <div style={{ margin: 10 }}>
        <Header />
        <CardContent>{children}</CardContent>
        <TagList />
        <Avatar />
      </div>
    </StyledCard>
  );
};

export default Card;
