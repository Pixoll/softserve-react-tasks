import axios from "axios";

/**
 * @param {number} id
 * @param {DataType} type
 * @returns {Promise<{ id?: number, name: string }>}
 */
export const getData = async (id, type) => {
    try {
        const response = await axios.get(`https://swapi.dev/api/${type}/${id}`);
        const { data } = response;

        const result = {
            id,
            name: data.name,
        };

        switch (type) {
            case DataType.People: {
                Object.assign(result, {
                    gender: data.gender,
                    birth_year: data.birth_year,
                    eye_color: data.eye_color,
                });
                break;
            }
            case DataType.Planets: {
                Object.assign(result, {
                    population: data.population,
                    orbital_period: data.orbital_period,
                    diameter: data.diameter,
                });
                break;
            }
            case DataType.Starships: {
                Object.assign(result, {
                    model: data.model,
                    manufacturer: data.manufacturer,
                    cost_in_credits: data.cost_in_credits,
                });
                break;
            }
        }

        return result;
    } catch (error) {
        return {
            id,
            name: "not available",
        };
    }
};

export const DataType = Object.freeze({
    People: "people",
    Planets: "planets",
    Starships: "starships",
});
