import axios from "axios";

// Fetch character list from the API
export const getCharacterList = async () => {
const url = "https://api-blue-archive.vercel.app/api/characters"

  try {
    const character = await axios.get(url);
    return character.data.data;
  } catch (error) {
    console.error('Error fetching character list:', error);
  }
};

export const getCharacterList2 = async () => {
  const url = "https://api-blue-archive.vercel.app/api/characters?page=1&perPage=119"
  
    try {
      const character = await axios.get(url);
      return character.data.data;
    } catch (error) {
      console.error('Error fetching character list:', error);
    }
  };

// Fetch student list from the API
export const getStudentList = async () => {
  const url = "https://api-blue-archive.vercel.app/api/characters/students?page=1&perPage=119"
  
    try {
      const student = await axios.get(url);
      return student.data.data;
    } catch (error) {
      console.error('Error fetching student list:', error);
    }
  };


  export const getDetailCharacter = async (id) => {
    const character = await axios.get (
        `https://api-blue-archive.vercel.app/api/characters/students?_id=${id}`
    );
    return character.data.data;
};