import styled from "@emotion/styled";
import React from "react";
import List from "../Components/List";
import list from "../list";

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
          {list.map((item, i) => (
            <List
              key={i}
              title={item.title}
              description={item.description}
              cover={item.cover}
              cards={item.cards}
            />
          ))}
        </div>
      </CenterDiv>
    </>
  );
};

export default Home;
