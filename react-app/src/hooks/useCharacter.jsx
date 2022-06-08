import { useState, useEffect } from "react";
import axios from "axios";

// Retrieve single character or multiple characters by ID
const useCharacter = (ids) => {
    const [character, setCharacter] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const response = await axios.get(
                    `https://rickandmortyapi.com/api/character/${
                        Array.isArray(ids) ? JSON.stringify(ids) : ids
                    }`
                );
                setCharacter(response.data);
                setIsError(false);
                setIsLoading(false);
            } catch (err) {
                if (
                    err.response.status === 404 ||
                    err.response.status === 500
                ) {
                    setCharacter([]);
                }
                setIsError(true);
                setIsLoading(false);
            }
        };

        if (ids.length > 0) {
            fetchCharacter();
        } else {
            setCharacter([]);
            setIsError(true);
            setIsLoading(false);
        }
    }, [ids]);
    return [character, isLoading, isError];
};

export default useCharacter;
