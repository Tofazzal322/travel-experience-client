import React, { useEffect, useState } from "react";

const useData = () => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch("https://glacial-headland-08582.herokuapp.com/blogPost")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return <div></div>;
};

export default useData;
