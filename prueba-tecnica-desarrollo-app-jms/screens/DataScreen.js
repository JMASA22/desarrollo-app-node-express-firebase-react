// Necessito realizar sol.licituds HTTP

import React, { useEffect, useState } from 'react';
import { getData } from './utils/api';

const MyScreen = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getData();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {/* Renderizar les dades obtingudes */}
        </div>
    );
};

export default MyScreen;