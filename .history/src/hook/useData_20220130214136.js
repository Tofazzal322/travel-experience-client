import React, { useEffect, useState } from "react";

const useData = () => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch('http://localhost:5000/blogPost')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return data;
};

export default useData;
