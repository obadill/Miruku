import React, { useEffect, useState } from 'react';

interface FetchDataProps {
    endpoint: string;
    onDataFetched: (data: any) => void;  // callback prop to pass data to parent
}

const FetchData: React.FC<FetchDataProps> = ({ endpoint, onDataFetched }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
       fetch(endpoint)
           .then((response) => {
              if (!response.ok) {
                  throw new Error("Network response was not ok");
              }
              return response.json()
           })
           .then((data) => {
               onDataFetched(data); // pass the fetched data up to the parent
               setLoading(false);
           })
           .catch((error) => {
              setError(error.message);
              setLoading(false);
           });
    }, []); // re-fetch if endpoint or callback changes

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return null;
};

export default FetchData;
