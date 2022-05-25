import React from "react";
import CoverImage from "./CoverImage";
import Meta from "./Meta";
import styled from "@emotion/styled";

const Header = () => {
  const CardHeader = styled.div`
    padding: 0.5rem;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
    width: 300px;
  `;
  return (
    <CardHeader>
      <CoverImage />
      <Meta />
    </CardHeader>
  );
};

export default Header;
