import { Fragment } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function Layout({ children }) {
    return (
        <Fragment>
            <Header />
            {children}
            <Footer />
        </Fragment>
    );
}
