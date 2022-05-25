import styled from "@emotion/styled";
import React from "react";

const Line = styled.hr`
  border: 1px solid #dcdcff;
`;

const Separator = () => {
  return (
    <div style={{ marginTop: 15, marginBottom: 15, paddingRight: 30 }}>
      <Line align="left"></Line>
    </div>
  );
};

export default Separator;
