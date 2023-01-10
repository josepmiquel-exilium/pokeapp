// Assets
import Ducksyl from 'assets/images/ducksyl.gif';

// Loader
import './Loader.scss';

export default function Loader() {
    return (
        <div className="loader">
            <img src={Ducksyl} alt="" />
        </div>
    );
}
