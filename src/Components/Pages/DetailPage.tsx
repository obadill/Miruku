import React, {useState} from 'react';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState(null);


    const { mal_id, title } = useParams();  // destructures the parameters from URL
    return (
        <div>

        </div>
    )
}

export default DetailPage;
