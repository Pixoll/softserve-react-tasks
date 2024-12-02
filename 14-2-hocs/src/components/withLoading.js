import { useState, useEffect } from "react";

export default function withLoading(WrappedComponent) {
    return function WithLoadingComponent({ fetchMethod, params, ...props }) {
        const [data, setData] = useState(null);

        useEffect(() => {
            setData(null);
            fetchMethod(params)
                .then(res => {
                    setData(res);
                    console.log("Fetched data: ", res);
                });
        }, [params, fetchMethod]);

        if (data === null) {
            return <p className="center">Loading...</p>;
        }

        return <WrappedComponent data={data} {...props} />;
    };
}
