import { Link } from 'react-router-dom';

// Assets
import SuperheroImage from 'assets/images/superhero.png';

// Scss
import './Superhero.scss';

export default function Superhero() {
    return (
        <div className="superhero">
            <div className="superhero__col-left">
                <h2>
                    So,
                    <br />
                    do you want to catch them all?
                </h2>
                <p>
                    Complete your <b>Pokedex</b>,
                    <br />
                    know all the types of Pokemon,
                    <br />
                    their advantages and disadvantages
                </p>
                <Link to={'/pokedex'}>
                    <button>Enter the world</button>
                </Link>
            </div>

            <div className="superhero__col-right">
                <img src={SuperheroImage} alt="" />
            </div>
        </div>
    );
}
