import React from "react";
import Students from "../../component/Students/Students";

const Student = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        marginBottom: "20px",
        padding: "60px",
        paddingLeft: "5%",
      }}
    >
      <h1
        style={{
          color: "#fff",
          fontStyle: "italic",
          webkitTextStroke: "2px #02d3fb",
          fontSize: "4rem",
          marginBottom: "0rem",
          marginTop: "1.5rem",
        }}
      >
        Blue Archive Students
      </h1>
      <Students />
    </div>
  );
};

export default Student;
