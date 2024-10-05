import React, { useState, useLayoutEffect } from "react";
import { NavbarContainer, Logo, SiteTitle, SiteSubtitle, NavLinks, DropdownContainer, MenuButton, DropdownMenu } from "../styles/Navbar.styles";
import { NavLink } from "react-router-dom";

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
        {link: '/horses/all', title: 'Book a Horse'},
        {link: '/calendar', title: 'Event Calendar'}
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
