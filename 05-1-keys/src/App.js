import React from "react";
import "./App.css";

const list = [
    { id: 1, name: "Animals" },
    { id: 2, name: "Anime" },
    { id: 3, name: "Anti-Malware" },
    { id: 4, name: "Art Design" },
    { id: 5, name: "Books" },
    { id: 6, name: "Business" },
    { id: 7, name: "Calendar" },
    { id: 8, name: "Cloud Storage" },
    { id: 9, name: "File Sharing" },
    { id: 10, name: "Animals" },
    { id: 11, name: "Continuous Integration" },
    { id: 12, name: "Cryptocurrency" },
];

export default function App() {
    return (
        <div>
            Some List:
            {list.map(item =>
                <li key={item.id}>{item.name}</li>
            )}
        </div>
    );
}
