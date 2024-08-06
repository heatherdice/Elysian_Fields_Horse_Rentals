import React, { useState, useLayoutEffect } from "react";
import styled from "styled-components";
// import { NavLink } from "react-router-dom";
import _ from "lodash";
// import "../styles/Navbar.css";


// .Navbar
const NavbarContainer = styled.nav`
    display: flex;
    width: 100%;
    position: absolute;
    font-family: var(--text-font);
`;

// .navbar-logo
const Logo = styled.div`
    margin: 20px 0 20px 60px;
`;

// .site-title
const SiteTitle = styled.a`
    text-decoration: none;
    margin-top: 0;
    padding-top: 50px;
    margin-bottom: 0;
    font-size: 3em;
`;

// .site-subtitle
const SiteSubtitle = styled.h4`
    margin-top: 16px;
    font-size: 2em;
    font-weight: normal;
    padding-bottom: 50px;
`;

const NavLinks = styled.div`
    a {
        color: black;
        text-decoration: none;
        font-size: 1.25em;
        padding: 0 1em;
        &:hover {
            text-decoration: underline 0.08em black;
        }
    }
`;

export default function Navbar() {
    const navLinks = [
        {link: '/about', title: 'About'},
        {link: '/book-a-horse', title: 'Book a Horse'},
        {link: '/event-calendar', title: 'Event Calendar'}
    ];

    return (
        <NavbarContainer>
            <Logo>
                <SiteTitle>Elysian Fields</SiteTitle>
                <SiteSubtitle>Horse Rentals</SiteSubtitle>
            </Logo>

            <NavLinks>
                <a href="/about">About</a>
                <a href="/book-a-horse">Book a Horse</a>
                <a href="/event-calendar">Event Calendar</a>
            </NavLinks>
        </NavbarContainer>
    )
}


// export default function Navbar() {
//     const [screenType, setScreenType] = useState(window.innerWidth <= 600 ? 'mobile' : 'desktop');

//     const handleResize = () => {
//         const newScreenType = window.innerWidth <= 600 ? 'mobile' : 'desktop';
//         setScreenType(newScreenType);

//         console.log(newScreenType);
//         console.log(window.innerWidth);
//     };

//     useLayoutEffect(() => {
//         window.addEventListener('resize', handleResize);
//         handleResize();

//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, [handleResize]);

//     const navLinks = [
//         {
//             link: '/about',
//             title: 'About'
//         },
//         {
//             link: '/book-a-horse',
//             title: 'Book a Horse'
//         },
//         {
//             link: '/event-calendar',
//             title: 'Event Calendar'
//         }
//     ];

//     return (
//         <>
//             <nav className="Navbar">
//                 {screenType === 'desktop' ? (
//                     <>
//                         <div className="navbar-logo">
//                             <NavLink to="/" className="site-title">Elysian Fields</NavLink>
//                             <p className="site-subtitle">
//                                 Horse Rentals
//                             </p>
//                         </div>
                
//                         <ul className="desktop-nav">
//                             {navLinks.map((navbar) =>
//                                 <li key={navbar.title} className="desktop-navbar-links">
//                                     <NavLink to={navbar.link}>
//                                         {navbar.title}
//                                     </NavLink>
//                                 </li>
//                             )}
//                         </ul>

//                     </>
//                 ) : (
//                     <>
//                         <div className="navbar-logo">
//                             <NavLink to="/" className="site-title">Elysian Fields</NavLink>
//                             <p className="site-subtitle">
//                                 Horse Rentals
//                             </p>
//                         </div>

//                         <div className="menu">Menu</div>
//                     </>
//                 )}
//             </nav>
//         </>
//     )
// }
