import { useState } from "react";
import { getData } from "../api";

export default function DataReceiver({ showBoundary }) {
    const [data, setData] = useState(0);

    const handleClick = () => {
        try {
            setData(getData());
        } catch (error) {
            showBoundary?.(error);
        }
    };

    return (
        <>
            <div className="data">
                <button onClick={handleClick}>Get new data</button>
                <div>{data}</div>
            </div>
        </>
    );
}
