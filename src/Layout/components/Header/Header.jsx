// Scss
import './Header.scss';
import PokemonLogo from 'shared/components/PokemonLogo';

export default function Header() {
    return (
        <div className="header">
            <PokemonLogo size={150} />
        </div>
    );
}
