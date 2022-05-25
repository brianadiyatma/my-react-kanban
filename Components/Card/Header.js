import React from "react";
import styled from "@emotion/styled";

const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HeaderContent = styled.div`
  font-weight: 600;
  font-size: 1rem;
`;

const LabelContainer = styled.div`
  background-color: #ffeded;
  border: 1px solid #ffeded;
  padding: 0.3rem;
  border-radius: 0.3rem;
`;
const LabelContent = styled.div`
  font-weight: 600;
  font-size: 10px;
  color: #f56c6c;
`;

const Header = () => {
  return (
    <ContainerHeader>
      <HeaderContent>Not Started</HeaderContent>
      <LabelContainer>
        <LabelContent>Expire on 24th jun</LabelContent>
      </LabelContainer>
    </ContainerHeader>
  );
};

export default Header;
