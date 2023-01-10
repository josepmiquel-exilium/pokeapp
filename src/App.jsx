import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

// Layout
import Layout from './Layout/Layout';

// Context
import { AppContextProvider } from 'context/AppContext';

// Pages
import Home from './pages/Home/Home';
import Pokedex from 'pages/Pokedex/Pokedex';

export default function App() {
    const [pokemonFetched, setPokemonFetched] = useState(null);
    const [error, setError] = useState(false);

    return (
        <AppContextProvider value={{ pokemonFetched, setPokemonFetched, error, setError }}>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pokedex" element={<Pokedex />} />
                </Routes>
            </Layout>
        </AppContextProvider>
    );
}
