import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchDataFromApi } from "../../Api/api";
import { ring } from 'ldrs';
import Loading from "./Loading";


// anime data type
type Anime = {
    mal_id: number;
    title: string;
    images: {
        jpg: {
            image_url: string;
            large_image_url: string;
            small_image_url: string;
        };
    };
};

const Home: React.FC = () => {
    const navigate = useNavigate();
    const [airingData, setAiringData] = useState<Anime[]>([]); // Initialize with an empty array
    const [loading, setLoading] = useState<boolean>(true);

    ring.register();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchDataFromApi("https://api.jikan.moe/v4/seasons/now");
                if (response && response.data) {
                    setAiringData(response.data); // Correctly set airing data
                    setLoading(false);
                    console.log(response);
                } else {
                    console.error("No data found");
                }
            } catch (err: any) {
                console.error(err.message);
            }
        };
        fetchData();
    }, []);

    const handleAnimeClick = (mal_id: number, title: string) => {
        navigate(`/anime/${mal_id}/${encodeURIComponent(title)}`);
    };

    return (
        <div>
            {/*{loading ? (*/}
            {/*    <Loading />*/}
            {/*) : (*/}
            {/*    <div>*/}
            {/*        <h1>Home page</h1>*/}
            {/*        <ul>*/}
            {/*            {airingData.map((anime, index) => (*/}
            {/*                <li key={anime.mal_id} style={{listStyleType: 'none', marginBottom: '20px'}}>*/}
            {/*                    <img*/}
            {/*                        src={anime.images.jpg.image_url}*/}
            {/*                        alt={anime.title}*/}
            {/*                        style={{cursor: 'pointer', maxWidth: '200px', borderRadius: '8px'}}*/}
            {/*                        onClick={() => handleAnimeClick(anime.mal_id, anime.title)}*/}
            {/*                    />*/}
            {/*                </li>*/}
            {/*            ))}*/}
            {/*        </ul>*/}

            {/*    </div>*/}
            {/*)}*/}
        </div>
    );
};

export default Home;
