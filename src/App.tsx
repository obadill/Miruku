import React, {useState} from 'react';
import Image from "./Components/Image";
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
      <Image endpoint = "http://localhost:8080/characters/3/pictures" onDataFetched={handleDataFetched}/>
    </div>
    );
}

export default App;
