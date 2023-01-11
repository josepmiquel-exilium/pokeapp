import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppContext } from './useAppContext';

export default function ScrollToTop() {
    const { pathname } = useLocation();

    const { resetSwitch } = useAppContext();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname, resetSwitch]);

    return null;
}
