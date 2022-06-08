import { useState, useEffect } from "react";

// Retrieving and writing favorite characters to localStorage
const useFavorites = () => {
    const [favorites, setFavorites] = useState(
        JSON.parse(localStorage.getItem("likedCharacters")) ?? []
    );

    // Writing favorites to localStorage on state change
    useEffect(() => {
        localStorage.setItem("likedCharacters", JSON.stringify(favorites));
    }, [favorites]);

    const handleFavorites = (id) => {
        // Checking if character is in favorites and adding/removing
        let favCopy = [...favorites];
        if (favCopy.includes(id)) {
            //Removing
            favCopy.splice(
                favCopy.findIndex((favId) => favId === id),
                1
            );
        } else {
            //Adding
            favCopy.push(id);
        }
        setFavorites(favCopy);
    };

    return [favorites, handleFavorites];
};

export default useFavorites;
