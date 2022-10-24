import { useEffect, useState } from 'react';

const useFetchRestAPI = url => {
    const [data, setData] = useState(null);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        (async () => {
            const response = await fetch(url);
            const payload = await response.json();

            setLoading(false);
            setData(payload);
        })();
    }, [url]);
    return { data, loading };
};

export default useFetchRestAPI;
