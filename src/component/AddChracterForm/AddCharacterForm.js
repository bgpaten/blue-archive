import React, { useState } from "react";
import "./AddCharacterForm.css";

const AddCharacterForm = ({ onAddCharacter }) => {
  const [formData, setFormData] = useState({
    name: "",
    birthday: "",
    damageType: "",
    school: "",
    photoUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCharacter(formData);
  };

  return (
    <div className="container">
      <section className="form">
        <div className="form-left">
          <img src="https://picsum.photos/200/300" alt="img-form" />
        </div>
        <div className="form-right">
          <h1 className="form-title">Add Character</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-inputgroup">
              <label for="name" className="from-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <div className="form-inputgroup">
              <label for="birthday" className="from-label">
                Birthday
              </label>
              <input
                type="text"
                name="birthday"
                id="birthday"
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <div className="form-inputgroup">
              <label for="damageType" className="from-label">
                Damage Type
              </label>
              <input
                type="text"
                name="damageType"
                id="damageType"
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <div className="form-inputgroup">
              <label for="school" className="from-label">
                School
              </label>
              <select name="school" id="school" onChange={handleChange}>
                <option value="Trinity">Trinity</option>
                <option value="Millennium">Millennium</option>
                <option value="Gehenna">Gehenna</option>
                <option value="Arius">Arius</option>
                <option value="Abydos">Abydos</option>
                <option value="Red Winter">Red Winter</option>
                <option value="Hyakkiyako">Hyakkiyako</option>
                <option value="Valkyrie">Valkyrie</option>
                <option value="Shanhaijing">Shanhaijing</option>
                <option value="SRT">SRT</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-inputgroup">
              <label for="photoUrl" className="from-label">
                Photo
              </label>
              <input
                type="text"
                name="photoUrl"
                id="photoUrl"
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <button className="form-button">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddCharacterForm;
