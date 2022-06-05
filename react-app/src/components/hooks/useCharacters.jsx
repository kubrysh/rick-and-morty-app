import { useState, useEffect } from "react";
import axios from "axios";

const useCharacters = (page) => {
    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await axios.get(
                    `https://rickandmortyapi.com/api/character${
                        page ? `/?page=${page}` : ``
                    }`
                );
                setCharacters(response.data.results);
                setInfo(response.data.info);
                setIsLoading(false);
            } catch (e) {
                console.error(e);
            }
        };

        fetchCharacters();
    }, [page]);
    return { characters, info, isLoading };
};

export default useCharacters;
