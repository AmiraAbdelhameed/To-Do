// Header.js
import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function Header() {
    const { theme } = useContext(ThemeContext);

    return (
        <header style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
            <h1 >My Blog</h1>
            <p>Current theme: {theme}</p>
        </header>
    );
}

export default Header;