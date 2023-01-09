import { Route, Routes } from 'react-router-dom';

// Layout
import Layout from './Layout/Layout';

// Pages
import Home from './pages/Home/Home';
import Pokedex from 'pages/Pokedex/Pokedex';

export default function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokedex" element={<Pokedex />} />
            </Routes>
        </Layout>
    );
}
