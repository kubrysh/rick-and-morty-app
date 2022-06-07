import { useState, useEffect } from "react";
import axios from "axios";

// Retrieve all characters or characters searched by name
const useCharacters = (page, searchInput) => {
    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await axios.get(
                    "https://rickandmortyapi.com/api/character",
                    {
                        params: {
                            ...(page ? { page: page } : {}),
                            ...(searchInput ? { name: searchInput } : {})
                        }
                    }
                );
                setCharacters(response.data.results);
                setInfo(response.data.info);
                setIsLoading(false);
            } catch (err) {
                if (err.response.status === 404) {
                    setCharacters([]);
                    setInfo({});
                }
                setIsLoading(false);
            }
        };

        if (searchInput && searchInput.length === 0) {
            setCharacters([]);
        } else {
            fetchCharacters();
        }
    }, [page, searchInput]);
    return [characters, info, isLoading];
};

export default useCharacters;
