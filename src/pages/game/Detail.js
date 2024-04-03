import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailCharacter } from "../../api";

const Detail = () => {
  // Menggunakan useParams unutk menangkap parameter id dari URL
  let { id } = useParams();

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    // menagkap data result api
    getDetailCharacter(id).then((data) => {
      setDatas(data);
    });
  }); // add name as a dependency so it re-runs when name changes

  if (!datas) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Name: {datas._id}</h1>
      {/* display other data as needed */}
    </div>
  );
};

export default Detail;