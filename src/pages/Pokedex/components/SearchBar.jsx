import { useEffect, useState } from 'react';

// Context
import { useAppContext } from 'hooks/useAppContext';

// Services
import { getPokemonByName } from 'api/services/pokemon';

// Assets
import PokeOpened from 'assets/images/pokeball-opened.png';
import PokeClosed from 'assets/images/pokeball-closed.png';

// Scss
import './SearchBar.scss';

export default function SearchBar() {
    const { setPokemonFetched, setError, error, resetApp, resetSwitch, loading, setLoading } =
        useAppContext();

    const [textSearch, setTextSearch] = useState('');
    const [pokeballOpened, setPokeballOpened] = useState(false);
    const [searchbarFocused, setSearchbarFocused] = useState(false);

    useEffect(() => {
        setTextSearch('');
        setPokeballOpened(false);
    }, [resetSwitch]);

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

        if (pokemon !== '') {
            setLoading(true);
            getPokemonByName(pokemon)
                .then(({ data }) => {
                    if (error) setError(false);
                    setPokemonFetched(data);
                    setPokeballOpened(true);
                })
                .catch((response) => {
                    const error = response.response?.data || 'Unknown error';
                    setError(error);
                    setPokemonFetched(null);
                })
                .finally(() => setLoading(false));
        } else {
            resetApp();
        }
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
                disabled={loading}
                onKeyDown={({ code }) => code === 'Enter' && goSearchPokemon()}
            />
            <button>
                <img
                    src={pokeballOpened ? PokeOpened : PokeClosed}
                    onClick={goSearchPokemon}
                    className={loading ? 'pokeball-disabled' : undefined}
                    alt=""
                />
            </button>
        </div>
    );
}
