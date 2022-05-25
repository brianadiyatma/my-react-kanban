import React from "react";
import styled from "@emotion/styled";

const MetaTitle = styled.h6`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`;
const MetaContent = styled.p`
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  color: #5e5e7a;
`;

const Meta = () => {
  return (
    <>
      <MetaTitle>Not Started</MetaTitle>
      <MetaContent>Way To Town of Colors</MetaContent>
    </>
  );
};

export default Meta;
