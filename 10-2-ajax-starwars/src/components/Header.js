import React from "react";
import { DataType } from "../services/swDataHandler";

export default function Header({ onMenuClick }) {
    return (
        <header>
            <nav>
                <button onClick={() => onMenuClick(DataType.People)}>People</button>
                <button onClick={() => onMenuClick(DataType.Planets)}>Planets</button>
                <button onClick={() => onMenuClick(DataType.Starships)}>Starships</button>
            </nav>
        </header>
    );
};
