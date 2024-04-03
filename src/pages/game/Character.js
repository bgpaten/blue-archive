import React from "react";
import Characters from "../../component/Characters/Characters";

const Character = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        marginBottom: "20px",
        padding: "60px",
        paddingLeft: "85px",
      }}
    >
      <h1
        style={{
          color: "#fff",
          fontStyle: "italic",
          webkitTextStroke: "2px #02d3fb",
          fontSize: "4rem",
          marginBottom: "0px",
        }}
      >
        Blue Archive Characters
      </h1>
      <Characters />
    </div>
  );
};

export default Character;
