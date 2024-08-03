import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer({ backgroundColor, textColor }) {
    return (
        <footer style={{ backgroundColor: backgroundColor, color: textColor }}>
            <div>
                <h3>Elysian Fields</h3>
                <h4>Horse Rentals</h4>
            </div>

            <div>
                <h3>Explore</h3>
                <ul>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/affiliates">Affiliates</NavLink>
                    </li>
                    <li>
                        <NavLink to="/calendar">Calendar</NavLink>
                    </li>
                </ul>
            </div>

            <div>
                <h3>Book</h3>
                <ul>
                    <li>
                        <NavLink to="/book-a-horse">All Horses</NavLink>
                    </li>
                    <li>
                        <NavLink to="/book-a-horse/archery">Archery Horses</NavLink>
                    </li>
                    <li>
                        <NavLink to="/book-a-horse/jumper">Jumper Horses</NavLink>
                    </li>
                </ul>
            </div>

            <div>
                <h3>Connect</h3>
                <ul>
                    <li>
                        <a href="mailto:">Contact Us</a>
                    </li>
                    <li>
                        Social Media
                    </li>
                </ul>
            </div>
        </footer>
    )
}