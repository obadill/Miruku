import React, { useEffect, useState } from 'react';

const FetchData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
       fetch("http://localhost:8080/anime/1")
           .then((response) => {
              if (!response.ok) {
                  throw new Error("Network response was not ok");
              }
              return response.json()
           })
           .then((data) => {
               setData(data);
               setLoading(false);
           })
           .catch((error) => {
              setError(error.message);
              setLoading(false);
           });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Fetched Data</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default FetchData;
