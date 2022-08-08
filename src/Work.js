import React from "react";

const Work = ({ image, text, link }) => {
  return (
    <a href={link}>
      <img
        src={image}
        alt={text}
        style={{
          width: "400px",
          height: "240px",
          margin: "15px",
          display: "block",
        }}
      />
    </a>
  );
};

export default Work;
