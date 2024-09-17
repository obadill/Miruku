import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const animeList = [
        { mal_id: 1, title: 'Naruto' },
        { mal_id: 2, title: 'One Piece' },
        { mal_id: 3, title: 'Attack on Titan' },
    ];

    const handleAnimeClick = (mal_id: number, title: string) => {
        navigate(`/anime/${mal_id}/${encodeURIComponent(title)}`);
    }

    return (
        <div>
            <h1>Home page</h1>
            <ul>
                {animeList.map((anime) => (
                    <li key={anime.mal_id}>
                        <button onClick={() => handleAnimeClick(anime.mal_id, anime.title)}>
                            {anime.title}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );

}

export default Home;
