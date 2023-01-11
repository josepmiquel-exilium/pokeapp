import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

// Layout
import Layout from './Layout/Layout';

// Hooks
import ScroolToTop from 'hooks/ScroolToTop';

// Context
import { AppContextProvider } from 'context/AppContext';

// Pages
import Home from './pages/Home/Home';
import Pokedex from 'pages/Pokedex/Pokedex';

export default function App() {
    const [pokemonFetched, setPokemonFetched] = useState(null);
    const [error, setError] = useState(false);
    const [resetSwitch, setResetSwitch] = useState(true);
    const [loading, setLoading] = useState(false);

    // Do reset here and use effect in search bar
    const resetApp = () => {
        setError(false);
        setPokemonFetched(false);
        setResetSwitch(!resetSwitch);
    };

    return (
        <AppContextProvider
            value={{
                pokemonFetched,
                setPokemonFetched,
                error,
                setError,
                resetApp,
                resetSwitch,
                loading,
                setLoading,
            }}
        >
            <Layout>
                <ScroolToTop />
                <Routes>
                    <Route path="*" element={<Home />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/pokedex" element={<Pokedex />} />
                </Routes>
            </Layout>
        </AppContextProvider>
    );
}
