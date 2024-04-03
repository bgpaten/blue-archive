import React from "react";
import "./Student.css";
import { Link, NavLink } from "react-router-dom";

const Student = (props) => {
  const {
    firstName,
    lastName,
    japanName,
    age,
    height,
    school,
    birthday,
    photo,
    damage,
    armor,
    background,
    imageSchool,
    id,
  } = props;
  return (
    <section className="about">
      <div className="about-me">
        <img src={photo} alt="" />
        <div className="about-text">
          <h3>
            {firstName} {lastName}
          </h3>
          <h4>{japanName}</h4>
          <div className="aboutMe">
            <div className="aboutText">
              <p>Damage Type : {damage}</p>
              <p>Armor Type : {armor}</p>
              <p>Age : {age}</p>
              <p>Birthday : {birthday}</p>
              <p>Height : {height}</p>
              <p>School : {school}</p>
            </div>
            <img src={imageSchool} alt="" />
          </div>
          <p>{background}</p>
          <p>
            <NavLink className={Link} to={`detail/${id}`}>
              Detail
            </NavLink>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Student;
