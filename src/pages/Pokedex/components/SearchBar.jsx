import { useState } from 'react';

// Services
import { getPokemonByName } from 'api/services/pokemon';

// Assets
import PokeOpened from 'assets/images/pokeball-opened.png';
import PokeClosed from 'assets/images/pokeball-closed.png';

// Scss
import './SearchBar.scss';

export default function SearchBar({ setResults }) {
    const [textSearch, setTextSearch] = useState('');
    const [pokeballOpened, setPokeballOpened] = useState(false);
    const [searchbarFocused, setSearchbarFocused] = useState(false);

    console.log(searchbarFocused);

    const handleSearchBar = ({ target }) => {
        if (pokeballOpened) {
            setPokeballOpened(false);
        }
        const { value } = target;
        const re = /^[A-Za-z]+$/;
        if (value === '' || re.test(value)) {
            setTextSearch(value);
        }
    };

    const goSearchPokemon = () => {
        const pokemon = textSearch.toLowerCase();

        if (pokemon !== '')
            getPokemonByName(pokemon).then(({ data }) => {
                setResults(data);
                setPokeballOpened(true);
            });
    };

    return (
        <div className={searchbarFocused ? 'searchbar searchbar-active' : 'searchbar'}>
            <input
                type="text"
                placeholder="Find your pokemon..."
                onChange={handleSearchBar}
                value={textSearch}
                onFocus={() => setSearchbarFocused(true)}
                onBlur={() => setSearchbarFocused(false)}
            />
            <button>
                <img src={pokeballOpened ? PokeOpened : PokeClosed} onClick={goSearchPokemon} />
            </button>
        </div>
    );
}
