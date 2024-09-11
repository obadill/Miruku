import React, { useState } from 'react';
import CharacterImage from './Components/Characters/CharacterImage';
import AnimeImage from './Components/Anime/AnimeImage';
import LoginComponent from "./Components/LoginComponent";
import './App.css';

function App() {
    const [animeData, setAnimeData] = useState<any>(null); // state to store fetched anime data
    const [characterData, setCharacterData] = useState<any>(null); // state to store fetched character data
    const [animeFetched, setAnimeFetched] = useState(false); // track if anime data is fetched
    const [characterFetched, setCharacterFetched] = useState(false); // track if character data is fetched

    // callback function to handle fetched anime data
    const handleDataFetched = (data: any) => {
        setAnimeData(data); // store the fetched anime data
        setAnimeFetched(true); // mark anime data as fetched
    };

    // callback function to handle fetched character data
    const handleCharacterDataFetched = (data: any) => {
        setCharacterData(data); // store the fetched character data
        setCharacterFetched(true); // mark character data as fetched
    };

    return (
        <div className="App">
            <CharacterImage
                endpoint="http://localhost:8080/anime/1"
                onDataFetched={handleCharacterDataFetched}
            />
            <AnimeImage
                endpoint="http://localhost:8080/anime/1/pictures"
                onDataFetched={handleDataFetched}
            />

            <LoginComponent />

        </div>
    );
}

export default App;
