import React from "react";
import "./Character.css";

const Character = (props) => {
  const { name, school, birthday, photo, damage, id } = props;
  return (
    <div className="character">
      <img className="img-c" src={photo} alt="title" />
      <h3 className="title">
        {name}
      </h3>
      <p className="year">{birthday}</p>
      <p className="year">{damage}</p>
      <p className="year">{school}</p>
    </div>
  );
};

export default Character;
