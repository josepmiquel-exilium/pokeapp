// Assets
import PokeLogo from 'assets/images/pokelogo.png';

export default function PokemonLogo({ size = 250 }) {
    return <img src={PokeLogo} alt="" width={size} />;
}
