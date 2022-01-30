import React, { useEffect, useState } from 'react';

const useData = () => {
    const [data, setData] = useState([]);
    console.log(data);

    useEffect(() => {
        fetch('https://glacial-headland-08582.herokuapp.com/')
        .then(res=>res.json())

    },[])
    

    return (
        <div>
            
        </div>
    );
};

export default useData;