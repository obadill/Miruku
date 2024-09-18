import React, { useEffect, useState } from 'react';
import { fetchDataFromApi } from "../../Api/api";
import { ring } from 'ldrs';
import Loading from "./Loading";
import SearchBar from "../SearchBar/SearchBar";
import AnimeCardContainer from "../AnimeCardContainer/AnimeCardContainer";


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

// cached anime data type with the timestamp
type CachedAnimeData = {
    data: Anime[];
    timestamp: number;
}

const Home: React.FC = () => {
    // state variables
    const [airingData, setAiringData] = useState<CachedAnimeData>(JSON.parse(localStorage.getItem('airingData') || '[]'));
    const [trendingData, setTrendingData] = useState<CachedAnimeData>(JSON.parse(localStorage.getItem('trendingData') || '[]'));
    const [upcomingData, setUpcomingData] = useState<CachedAnimeData>(JSON.parse(localStorage.getItem('upcomingData') || '[]'));
    const [loading, setLoading] = useState<boolean>(true);
    const [query, setQuery] = useState("");

    ring.register();

    useEffect(() => {
        const fetchData = async () => {
            const cacheExpiry = 86400000;
            const now = Date.now();

            const trendingDataCached: CachedAnimeData | null = JSON.parse(localStorage.getItem('trendingData') || 'null');

            const isTrendingExpired = trendingDataCached && (now - trendingDataCached.timestamp > cacheExpiry);

            if (isTrendingExpired || trendingDataCached?.timestamp == null) {
                try {
                    const trendingResponse = await fetchDataFromApi("https://api.jikan.moe/v4/top/anime?filter=airing");
                    const airingResponse = await fetchDataFromApi("https://api.jikan.moe/v4/seasons/now");
                    const upcomingResponse = await fetchDataFromApi("https://api.jikan.moe/v4/seasons/upcoming");
                    
                    const cachedTrendingData = { data: trendingResponse, timestamp: now };
                    localStorage.setItem('trendingData', JSON.stringify(cachedTrendingData));
                    setTrendingData(cachedTrendingData);

                    const cachedAiringData = { data: airingResponse, timestamp: now };
                    localStorage.setItem('airingData', JSON.stringify(cachedAiringData));
                    setAiringData(cachedAiringData);

                    const cachedUpcomingData = { data: upcomingResponse, timestamp: now };
                    localStorage.setItem('upcomingData', JSON.stringify(cachedUpcomingData));
                    setUpcomingData(cachedUpcomingData);
                } catch (err: any) {
                    console.error("Error fetching trending data:", err.message);
                } finally {
                    setLoading(false);
                }
            } else if (trendingDataCached) {
                setTrendingData(trendingDataCached);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="home-container">
            <div className="search-container">
                <p className="search-text">Peak awaits.</p>
                <SearchBar query={query} setQuery={setQuery}/>
            </div>
            <div className="anime-cards">
                {loading ? (
                    <Loading />
                ) : (
                    <>
                        <div className="trending">
                            <AnimeCardContainer data={trendingData} />
                        </div>
                        <div className="this-season">
                            <AnimeCardContainer data={airingData} />
                        </div>
                        <div className="Upcoming">
                            <AnimeCardContainer data={upcomingData} />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Home;
