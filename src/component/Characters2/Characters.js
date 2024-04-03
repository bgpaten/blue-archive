import React, { useEffect, useState } from "react";
import Character from "../Character/Character";
import "./Characters.css";
import { getCharacterList } from "../../api.js";
import AddCharacterForm from "../AddChracterForm/AddCharacterForm.js";

const Characters = () => {
  const [datas, setDatas] = useState([]);

  const addCharacter = (character) => {
    setDatas([...datas, character]);
  };

  // Fetch character data when the component mounts
  useEffect(() => {
    getCharacterList().then((result) => {
      setDatas(result);
    });
  }, []);

  return (
    <div>
      <h1>Character</h1>
      <div className="characters-container">
        {datas.map((data, index) => {
          return (
            <Character
              id={data._id}
              name={data.name}
              birthday={data.birthday}
              photo={data.photoUrl}
              school={data.school}
              damage={data.damageType}
            />
          );
        })}
      </div>
      <AddCharacterForm onAddCharacter={addCharacter}/>
    </div>
  );
};

export default Characters;
