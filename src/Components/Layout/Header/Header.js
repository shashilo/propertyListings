import React from 'react'

import './Header.scss';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <nav>
                <div className="container">
                    <ul>
                        <li><NavLink exact activeClassName="active" to="/">Property Listings</NavLink></li>
                        <li><NavLink exact activeClassName="active" to="/favorites">Saved Listings</NavLink></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
