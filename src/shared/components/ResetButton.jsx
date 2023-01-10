// Context
import { useAppContext } from 'hooks/useAppContext';

// Scss
import './ResetButton.scss';

export default function ResetButton({ text }) {
    const { resetApp } = useAppContext();
    return (
        <div className="resetbutton">
            <button onClick={() => resetApp()}>{text}</button>
        </div>
    );
}
