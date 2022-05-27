import React from "react";
import Tag from "./Tag";
import styled from "@emotion/styled";

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TagList = (props) => {
  console.log(props);
  return (
    <TagContainer>
      {props.tags.map((item, i) => (
        <Tag color={item.bgClass} fontColor={item.textClass}>
          {item.title}
        </Tag>
      ))}
    </TagContainer>
  );
};

export default TagList;
