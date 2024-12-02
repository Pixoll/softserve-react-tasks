import React from "react";

export default function PlanetCard({ data }) {
    return (
        <div className="card">
            <img src={`https://starwars-visualguide.com/assets/img/planets/${data.id}.jpg`} alt={data.name}/>
            <h3>{data.name || "not available"}</h3>
            <ul>
                <li>Population: {data.population}</li>
                <li>Orbital Period: {data.orbital_period}</li>
                <li>Diameter: {data.diameter}</li>
            </ul>
        </div>
    );
};
