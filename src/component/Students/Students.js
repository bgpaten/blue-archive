import React, { useEffect, useState } from "react";
import Student from "../Student/Student";
import "./Students.css";
// import AddMovieForm from "../AddMovieForm/AddMovieForm";
import { getStudentList } from "../../api.js";

const Students = () => {
  const [datas, setDatas] = useState([]);

  // Fetch Student data when the component mounts
  useEffect(() => {
    getStudentList().then((result) => {
      setDatas(result);
    });
  }, []);

  return (
    <div>
      <div className="layout">
        {datas.map((data, index) => {
          return (
            <Student
              id={data._id}
              firstName={data.names.firstName}
              lastName={data.names.lastName}
              japanName={data.names.japanName}
              age={data.age}
              height={data.height}
              birthday={data.birthday}
              photo={data.photoUrl}
              school={data.school}
              damage={data.damageType}
              armor={data.armorType}
              background={data.background}
              imageSchool={data.imageSchool}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Students;
