// Components
import PokemonLogo from 'shared/components/PokemonLogo';
import Menu from './components/Menu';

// Scss
import './Header.scss';

export default function Header() {
    return (
        <div className="header">
            <PokemonLogo size={150} />
            <Menu />
        </div>
    );
}
