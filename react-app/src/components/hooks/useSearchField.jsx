import { useHistory, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import useCharacters from "./useCharacters";

const useSearchField = () => {
    const [searchInput, setSearchInput] = useState("");

    let history = useHistory();
    const location = useLocation();

    const [characters] = useCharacters(null, searchInput);

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const searchFromURL = query.get("search");
        if (searchFromURL) {
            setSearchInput(searchFromURL);
        } else {
            setSearchInput("");
        }
    }, [location]);

    const handleSearchInput = (e) => {
        setSearchInput(e.target.value);
    };

    const handleSearchValue = (e, value) => {
        setSearchInput(value.name);
        history.push(`/${value.id}`);
    };

    const handleSearchSubmit = (e) => {
        if (e.code === "Enter" && e.target.value) {
            e.stopPropagation();
            history.push(`/?search=${e.target.value}`);
        }
    };

    return [
        characters,
        searchInput,
        handleSearchInput,
        handleSearchValue,
        handleSearchSubmit
    ];
};

export default useSearchField;
