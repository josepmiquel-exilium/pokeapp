import { Fragment } from 'react';

// Hooks
import { useAppContext } from 'hooks/useAppContext';

// Components
import Loader from 'shared/components/Loader';
import ResetButton from 'shared/components/ResetButton';
import PokeSelected from './components/PokeSelected';
import SearchBar from './components/SearchBar';
import StatusMessage from './components/StatusMessage';

// Scss
import './Pokedex.scss';

export default function Pokedex() {
    const { pokemonFetched, loading } = useAppContext();

    return (
        <div className="pokedex">
            <SearchBar />
            {loading ? (
                <Loader />
            ) : pokemonFetched ? (
                <Fragment>
                    <PokeSelected />
                    <ResetButton text={'Catch another one!'} />
                </Fragment>
            ) : (
                <StatusMessage />
            )}
        </div>
    );
}
