import Image from "next/image";
import React from "react";
import img from "../../public/images/cover-01.png";
console.log(img);

const CoverImage = () => {
  return (
    <>
      <Image
        src={img}
        width={350}
        height={150}
        style={{
          borderRadius: "0.5rem",
        }}
      />
    </>
  );
};

export default CoverImage;
