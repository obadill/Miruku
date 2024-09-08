import React, {useState} from 'react';
import FetchData from "./Components/FetchData";
import './App.css';

function App() {
    const [animeData, setAnimeData] = useState<any>(null); // state to store fetched data

    // callback function to handle fetched data
    const handleDataFetched = (data: any) => {
        setAnimeData(data); // store the fetched data in the parent state
        console.log(data);
    };

    return (
    <div className="App">
      <FetchData endpoint = "http://localhost:8080/anime/1" onDataFetched={handleDataFetched}/>
    </div>
    );
}

export default App;
