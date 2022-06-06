import { useState, useEffect } from "react";
import axios from "axios";

const useFavCharacters = (ids) => {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                if (ids.length > 0) {
                    const response = await axios.get(
                        `https://rickandmortyapi.com/api/character/${JSON.stringify(
                            ids
                        )}`
                    );
                    setCharacters(response.data);
                } else {
                    setCharacters([]);
                }
                setIsLoading(false);
            } catch (e) {
                console.error(e);
            }
        };

        fetchCharacters();
    }, [ids]);
    return [characters, isLoading];
};

export default useFavCharacters;
