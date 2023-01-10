// Components
import ResetButton from 'shared/components/ResetButton';

// Hooks
import { useAppContext } from 'hooks/useAppContext';

// Assets
import Ash from 'assets/images/ash-duck.png';
import TRocket from 'assets/images/teamrocket.png';

// Scss
import './StatusMessage.scss';

export default function StatusMessage() {
    const { error } = useAppContext();
    return (
        <div className="statusmessage">
            <img src={error ? TRocket : Ash} alt="" />
            {error ? (
                <div className="statusmessage--error">
                    <h2>
                        <b>Oh no! There is an error!</b>
                        <br />
                        The Team Rocket has won this time!
                    </h2>

                    <h2>Reason: {error}</h2>

                    <ResetButton text={'Try again!'} />
                </div>
            ) : (
                <div className="statusmessage--waiting">
                    <h2>
                        Look for a Pokémon
                        <br />
                        <b>and catch it until you get them all!</b>
                    </h2>
                </div>
            )}
        </div>
    );
}
