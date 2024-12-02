import { useState, useEffect } from "react";

export const useLoading = (fetchMethod, params = undefined) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        setData(null);
        fetchMethod(params).then((res) => {
            setData(res);
        });
    }, [fetchMethod, params]);

    return data;
};
