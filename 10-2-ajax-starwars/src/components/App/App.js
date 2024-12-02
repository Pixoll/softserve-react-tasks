import { useEffect, useState } from "react";
import { DataType, getData } from "../../services/swDataHandler";
import Header from "../Header";
import PersonCard from "../PersonCard";
import PlanetCard from "../PlanetCard";
import StarshipCard from "../StarshipCard";

export default function App() {
    const [entityType, setEntityType] = useState(DataType.People);
    const [entityId, setEntityId] = useState(1);
    const [data, setData] = useState(null);

    useEffect(() => {
        getData(entityId, entityType).then(setData);
    }, [entityId, entityType]);

    const handleNext = () => {
        setEntityId((prevId) => prevId + 1);
    };

    const renderCard = () => {
        if (!data) {
            return <PersonCard data={{ id: entityId, name: "" }}/>;
        }

        data.id ??= entityId;

        switch (entityType) {
            case DataType.People:
                return <PersonCard data={data}/>;
            case DataType.Planets:
                return <PlanetCard data={data}/>;
            case DataType.Starships:
                return <StarshipCard data={data}/>;
            default:
                return <PersonCard data={{ id: entityId, name: "" }}/>;
        }
    };

    return (
        <div>
            <Header onMenuClick={setEntityType}/>
            {renderCard()}
            <button onClick={handleNext}>Next</button>
        </div>
    );
}
