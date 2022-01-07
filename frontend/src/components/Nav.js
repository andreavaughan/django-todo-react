import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home/Logo</Link>
                </li>
                {/* <li>
                    <Link>Calendar</Link>
                </li>
                <li>
                    <Link>Habits</Link>
                </li>
                <li>
                    <Link>Settings</Link>
                </li> */}
            </ul>
        </nav>
    );
}
