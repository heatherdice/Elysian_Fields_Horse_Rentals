import React, { useEffect, useState, useCallback } from "react";
import { NavLink } from "react-router-dom";
import _ from "lodash";
import "../styles/Navbar.css";


export default function Navbar() {
    const [screenType, setScreenType] = useState(window.innerWidth <= 600 ? 'mobile' : 'desktop');

    const handleResize = useCallback(_.debounce(() => {
        setScreenType(window.innerWidth <= 600 ? 'mobile' : 'desktop');

        console.log(screenType);

    }, 300), [screenType]);

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    const navLinks = [
        {
            link: '/about',
            title: 'About'
        },
        {
            link: '/book-a-horse',
            title: 'Book a Horse'
        },
        {
            link: '/event-calendar',
            title: 'Event Calendar'
        }
    ];

    return (
        <>
            <nav className="Navbar">
                {screenType === 'desktop' ? (
                    <ul className="desktop-nav">
                        {navLinks.map((navbar) =>
                            <li key={navbar.title} className="desktop-navbar-links">
                                <NavLink to={navbar.link}>
                                    {navbar.title}
                                </NavLink>
                            </li>
                        )}
                    </ul>
                ) : (
                    <div className="menu">Menu</div>
                )}
            </nav>
        </>
    )
}
