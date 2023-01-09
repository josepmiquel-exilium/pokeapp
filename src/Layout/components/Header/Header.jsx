// Components
import { Link } from 'react-router-dom';
import PokemonLogo from 'shared/components/PokemonLogo';
import Menu from './components/Menu';

// Scss
import './Header.scss';

export default function Header() {
    return (
        <div className="header">
            <Link to={'/'}>
                <PokemonLogo size={150} />
            </Link>
            <Menu />
        </div>
    );
}
