import { useState } from 'react';

// Components
import PokeSelected from './components/PokeSelected';
import SearchBar from './components/SearchBar';

// Scss
import './Pokedex.scss';

export default function Pokedex() {
    const [results, setResults] = useState(null);

    return (
        <div className="pokedex">
            <SearchBar setResults={setResults} />
            {results && <PokeSelected results={results} />}
        </div>
    );
}
