import { useState } from 'react';

// Services
import { getPokemonByName } from 'api/services/pokemon';

// Scss
import './SearchBar.scss';

export default function SearchBar({ setResults }) {
    const [textSearch, setTextSearch] = useState('');

    const handleSearchBar = ({ target }) => {
        const { value } = target;
        const re = /^[A-Za-z]+$/;
        if (value === '' || re.test(value)) {
            setTextSearch(value);
        }
    };

    const goSearchPokemon = () => {
        getPokemonByName(textSearch).then(({ data }) => setResults(data));
    };

    return (
        <div className="searchbar">
            <input
                type="text"
                placeholder="Find your pokemon..."
                onChange={handleSearchBar}
                value={textSearch}
            />
            <button onClick={goSearchPokemon}>Search!</button>
        </div>
    );
}
