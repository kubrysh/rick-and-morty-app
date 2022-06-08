import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import useSearchField from "../hooks/useSearchField";

const SearchField = () => {
    const [
        characters,
        searchInput,
        handleSearchInput,
        handleSearchValue,
        handleSearchSubmit
    ] = useSearchField();

    return (
        <Autocomplete
            freeSolo
            inputValue={searchInput}
            id="character-search"
            onInputChange={handleSearchInput}
            onChange={handleSearchValue}
            disableClearable
            filterOptions={(x) => x}
            options={characters}
            getOptionLabel={(option) => option.name || ""}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search character"
                    InputProps={{
                        ...params.InputProps,
                        onKeyDown: handleSearchSubmit,
                        type: "search"
                    }}
                />
            )}
            renderOption={(props, option) => {
                return (
                    <li {...props} key={option.id}>
                        {option.name}, {option.status}
                    </li>
                );
            }}
            sx={{ mb: 2 }}
        />
    );
};

export default SearchField;
