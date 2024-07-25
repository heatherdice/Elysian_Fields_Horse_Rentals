import React, { useEffect, useState, useRef, useCallback } from "react";
import { debounce } from "lodash";
import { Link } from 'react-scroll';
import "../styles/Navbar.css";


export default function Navbar() {
    const [screenType, setScreenType] = useState(window.innerWidth <= 600 ? 'mobile' : 'desktop');

    const debouncedHandleResize = useRef(
        debounce(() => {
            setScreenType(window.innerWidth <= 600 ? 'mobile' : 'desktop');
        }, 300)).current;

    const handleResize = useCallback(() => {
        debouncedHandleResize();
        }, [debouncedHandleResize]);

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            debouncedHandleResize.cancel();
        };
    }, [handleResize, debouncedHandleResize]);

    const navLinks = [
        {
            link: 'about',
            title: 'About'
        },
        {
            link: 'book-a-horse',
            title: 'Book a Horse'
        },
        {
            link: 'event-calendar',
            title: 'Event Calendar'
        }
    ];

    return (
        <>
            <nav className="navbar">
                {screenType === 'desktop' ? (
                    <ul className="desktop-nav">
                        {navLinks.map((navbar) =>
                            <li key={navbar.title} className="desktop-navbar-links">
                                <Link to={navbar.link} smooth={true} duration={500}>
                                    {navbar.title}
                                </Link>
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

