import React, { useEffect, useState } from 'react';
import { fetchDataFromApi } from '../../Api/api';

interface FetchDataProps {
    endpoint: string;
    onDataFetched: (data: any) => void;
}

const CharacterImage: React.FC<FetchDataProps> = ({ endpoint, onDataFetched }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchDataFromApi(endpoint);
                const imageUrl = data?.data?.images?.jpg?.image_url;
                if (imageUrl) {
                    setImageUrl(imageUrl);
                    onDataFetched(data);
                }
                setLoading(false);
            } catch (err: any) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return <>{imageUrl && <img src={imageUrl} alt="Anime Character" />}</>;
};

export default CharacterImage;
