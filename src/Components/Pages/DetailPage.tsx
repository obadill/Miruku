import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {fetchDataFromApi} from "../../Api/api";
import { ring } from 'ldrs';
import Loading from "./Loading";

const DetailPage = () => {
    const [loading, setLoading] = useState(true);
    const [animeData, setAnimeData] = useState(null);
    const { mal_id, title } = useParams();  // destructures the parameters from URL

    ring.register();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchDataFromApi(`https://api.jikan.moe/v4/anime/${mal_id}/full`);
                if (response) {
                    setAnimeData(response);
                    setLoading(false);
                } else {
                    console.error("No data found");
                }
            } catch (err: any) {
                console.error(err.message);
            }
        };
        fetchData();
    }, []);


    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <h1>{title}</h1>
            )}
        </div>
    )
}

export default DetailPage;
