import './App.css';
import { useState } from "react";

export default function App() {
    const [text, setText] = useState("React Marathon");

    const handleClick = () => {
        setText(text.toLowerCase());
    };

    return <div onClick={handleClick}>{text}</div>;
}
