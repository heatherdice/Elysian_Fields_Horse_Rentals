import React, { useState, useLayoutEffect } from "react";
import { NavLink } from "react-router-dom";
import _ from "lodash";
import "../styles/Navbar.css";


export default function Navbar() {
    const [screenType, setScreenType] = useState(window.innerWidth <= 600 ? 'mobile' : 'desktop');

    const handleResize = () => {
        const newScreenType = window.innerWidth <= 600 ? 'mobile' : 'desktop';
        setScreenType(newScreenType);

        console.log(newScreenType);
        console.log(window.innerWidth);
    };

    useLayoutEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();

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
                    <>
                        <div className="navbar-logo">
                            <NavLink to="/" className="site-title">Elysian Fields</NavLink>
                            <p className="site-subtitle">
                                Horse Rentals
                            </p>
                        </div>
                
                        <ul className="desktop-nav">
                            {navLinks.map((navbar) =>
                                <li key={navbar.title} className="desktop-navbar-links">
                                    <NavLink to={navbar.link}>
                                        {navbar.title}
                                    </NavLink>
                                </li>
                            )}
                        </ul>

                    </>
                ) : (
                    <>
                        <div className="navbar-logo">
                            <NavLink to="/" className="site-title">Elysian Fields</NavLink>
                            <p className="site-subtitle">
                                Horse Rentals
                            </p>
                        </div>

                        <div className="menu">Menu</div>
                    </>
                )}
            </nav>
        </>
    )
}
