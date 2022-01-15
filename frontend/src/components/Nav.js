import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css'

export const Nav = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/">Home/Logo</Link>
                </li>
                <li>
                    <Link to="/calendar">Calendar</Link>
                </li>
                <li>
                    <Link to="/habits">Habits</Link>
                </li>
                <li>
                    <Link to="/settings">Settings</Link>
                </li>
            </ul>
        </nav>
    );
}
