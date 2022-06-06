import { useState, useEffect } from "react";
import axios from "axios";

const useCharacter = (id) => {
    const [character, setCharacter] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const response = await axios.get(
                    `https://rickandmortyapi.com/api/character/${id}`
                );
                setCharacter(response.data);
                setIsLoading(false);
            } catch (e) {
                console.error(e);
            }
        };

        fetchCharacter();
    }, [id]);
    return [character, isLoading];
};

export default useCharacter;
