import styled from "@emotion/styled";
import React from "react";
import List from "../Components/List";

const Home = () => {
  const CenterDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
  `;
  return (
    <>
      {/* <h1>My Kanban Board</h1> */}
      <CenterDiv>
        <div style={{ marginRight: 50, marginLeft: 50, display: "flex" }}>
          <List />
          <List />
          <List />
          <List />
        </div>
      </CenterDiv>
    </>
  );
};

export default Home;
