import { useEffect, useState } from 'react';

const withFetchRestAPI = (Component, url) => {
    const EnhancedComponent = props => {
        const [data, setData] = useState(null);

        const [loading, setLoading] = useState(false);

        useEffect(() => {
            setLoading(true);
            (async () => {
                try {
                    const response = await fetch(url);
                    const payload = await response.json();

                    setLoading(false);
                    setData(payload);
                } catch (error) {
                    console.log(error);
                }
            })();
        }, [url]);

        return <Component {...props} data={data} loading={loading} />;
    };

    EnhancedComponent.displayName = `withFetchRestAPI(${
        Component.displayName || Component.name
    })`;

    return EnhancedComponent;
};

export default withFetchRestAPI;
