import { Route, Routes } from 'react-router-dom';

// Layout
import Layout from './Layout/Layout';

// Pages
import Home from './pages/Home/Home';

export default function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Layout>
    );
}
