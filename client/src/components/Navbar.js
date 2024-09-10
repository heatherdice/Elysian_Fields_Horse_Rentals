import React, { useState, useLayoutEffect } from "react";
import { styled, css } from "styled-components";
import { NavLink } from "react-router-dom";
import _ from "lodash";
// import "../styles/Navbar.css";

// consolidated styling
const sharedLinkStyles = css`
    color: black;
    text-decoration: none;
    &:hover {
        text-decoration: underline 0.08em black;
        cursor: pointer;
    }
`;

// previously .Navbar
const NavbarContainer = styled.nav`
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    position: absolute;
    font-family: var(--text-font);
`;

// previously .navbar-logo
const Logo = styled.div`
    margin: 1.25em 0 1.25em 1.875em;
`;

// previously .site-title
const SiteTitle = styled.a`
    text-decoration: none;
    color: black;
    margin-top: 0;
    padding-top: 3.125em;
    margin-bottom: 0;
    font-size: 3em;
    font-family: var(--title-font);
    @media (max-width: 900px) {
        font-size: 2em;
    }
    @media (max-width: 425px) {
        font-size: 1.75em;
    }
`;

// previously .site-subtitle
const SiteSubtitle = styled.h4`
    margin-top: 1em;
    font-size: 2em;
    font-weight: normal;
    padding-bottom: 50px;
    @media (max-width: 900px) {
        margin-top: 0.5em;
        font-size: 1.5em;
    }
    @media (max-width: 425px) {
        font-size: 1em;
    }
`;

const NavLinks = styled.div`
    margin-top: 2em;
    margin-left: auto;
    a {
        ${sharedLinkStyles}
        font-size: 1.25em;
        padding: 0 1em;
    }
`;

// mobile nav styling
const DropdownContainer = styled.div`
    margin-top: 2em;
    margin-right: 1.875em;
    display: flex;
    flex-direction: column;
`;
const MenuButton = styled.button`
    border: none;
    background: none;
    text-align: right;
    font-family: var(--text-font);
    font-size: 1.5em;
    ${sharedLinkStyles}
    @media (max-width: 425px) {
        font-size: 1em;
    }
`;
const DropdownMenu = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
    background-color: var(--champagne-pink);
    border-radius: 3px;
    box-shadow: 4px 8px 16px 0 rgba(0,0,0,0.1);
    a {
        ${sharedLinkStyles}
        font-size: 1.25em;
        padding: .75em;
    }
`;

export default function Navbar() {
    // set useState vars for screen type & dropdown
    const [screenType, setScreenType] = useState(window.innerWidth <= 900 ? 'mobile' : 'desktop');
    const [dropdownVisible, setDropdownVisible] = useState(false);

    // set new screen size
    const handleResize = () => {
        const newScreenType = window.innerWidth <= 900 ? 'mobile' : 'desktop';
        setScreenType(newScreenType);
    };

    // call resize function on window resize event
    useLayoutEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    // open dropdown menu
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    } 

    const navLinks = [
        {link: '/about', title: 'About'},
        {link: '/book-a-horse', title: 'Book a Horse'},
        {link: '/event-calendar', title: 'Event Calendar'}
    ];

    return (
        <NavbarContainer>
            <Logo>
                <SiteTitle href="/">Elysian Fields</SiteTitle>
                <SiteSubtitle>Horse Rentals</SiteSubtitle>
            </Logo>

            {screenType === 'desktop' ? (
                <NavLinks>
                    {navLinks.map((navbar) =>
                        <NavLink to={navbar.link}>
                            {navbar.title}
                        </NavLink>
                    )}
                </NavLinks>
            ) : (
                <DropdownContainer>
                    <MenuButton onClick={toggleDropdown}>
                        Menu
                    </MenuButton>

                    {dropdownVisible && (
                        <DropdownMenu>
                            {navLinks.map((navbar) =>
                                <NavLink to={navbar.link}>
                                    {navbar.title}
                                </NavLink>
                            )}
                        </DropdownMenu>
                    )}
                </DropdownContainer>
            )}
        </NavbarContainer>
    )
}
