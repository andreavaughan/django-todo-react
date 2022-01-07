import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
    return (
        <nav>
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
