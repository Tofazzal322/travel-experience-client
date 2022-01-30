import React, { useEffect, useState } from "react";

const useData = () => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch('')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return data;
};

export default useData;
