import React from "react";
import styled from "@emotion/styled";

const Tag = (props) => {
  const LabelContainer = styled.div`
    background-color: ${props.color};
    border: 1px solid ${props.color};
    padding: 0.3rem;
    border-radius: 0.3rem;
    width: fit-content;
    margin: 0.3rem;
  `;
  const LabelContent = styled.div`
    font-weight: 600;
    font-size: 10px;
    color: ${props.fontColor};
  `;
  return (
    <LabelContainer>
      <LabelContent>{props.children}</LabelContent>
    </LabelContainer>
  );
};

export default Tag;
