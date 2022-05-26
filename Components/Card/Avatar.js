import Image from "next/image";
import React from "react";
import img from "../../public/images/avatar-01.png";
import styled from "@emotion/styled";

const RoundAvatar = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;

const Avatar = (props) => {
  return (
    <Image
      src={props.avatar === null ? "/images/avatar-default.png" : props.avatar}
      width={40}
      height={40}
      style={{ borderRadius: "50%" }}
    ></Image>
  );
};

export default Avatar;
