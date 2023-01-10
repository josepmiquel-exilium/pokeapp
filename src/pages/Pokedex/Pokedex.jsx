import { useAppContext } from 'hooks/useAppContext';
import { Fragment, useState } from 'react';

// Components
import PokeSelected from './components/PokeSelected';
import SearchBar from './components/SearchBar';

// Scss
import './Pokedex.scss';

export default function Pokedex() {
    const { pokemonFetched, error } = useAppContext();
    return (
        <div className="pokedex">
            <SearchBar />
            {error ? (
                <p>There is an error</p>
            ) : pokemonFetched ? (
                <PokeSelected />
            ) : (
                <p>No pokemon selected</p>
            )}
        </div>
    );
}
