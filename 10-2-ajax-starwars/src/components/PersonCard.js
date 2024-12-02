import React from "react";

export default function PersonCard({ data }) {
    return (
        <div className="card">
            <img src={`https://starwars-visualguide.com/assets/img/characters/${data.id}.jpg`} alt={data.name}/>
            <h3>{data.name || "not available"}</h3>
            <ul>
                <li>Gender: {data.gender}</li>
                <li>Birth Year: {data.birth_year}</li>
                <li>Eye Color: {data.eye_color}</li>
            </ul>
        </div>
    );
};
