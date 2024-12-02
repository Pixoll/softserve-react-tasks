import "./App.css";
import { useEffect, useState } from "react";

export default function App() {
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        const storedData = localStorage.getItem("appData");
        if (storedData) {
            setInputValue(storedData);
        }
    }, []);

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            React Marathon, appData: <input size="5" value={inputValue} onChange={handleChange}></input>
        </div>
    );
}
