import React from "react";

export default function StarshipCard({ data }) {
    return (
        <div className="card">
            <img src={`https://starwars-visualguide.com/assets/img/starships/${data.id}.jpg`} alt={data.name}/>
            <h3>{data.name || "not available"}</h3>
            <ul>
                <li>Model: {data.model}</li>
                <li>Manufacturer: {data.manufacturer}</li>
                <li>Cost in Credits: {data.cost_in_credits}</li>
            </ul>
        </div>
    );
};
