import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer({ backgroundColor, textColor }) {
    return (
        <footer style={{ backgroundColor: backgroundColor, color: textColor }}>
            <div className="site-title-footer">
                <h3>Elysian Fields</h3>
                <h4>Horse Rentals</h4>
            </div>

            <div>
                <h3>Explore</h3>
                <ul>
                    <li>
                        <NavLink to="/about" className="footer-link" style={{ color: textColor }}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/affiliates" className="footer-link" style={{ color: textColor }}>Affiliates</NavLink>
                    </li>
                    <li>
                        <NavLink to="/calendar" className="footer-link" style={{ color: textColor }}>Calendar</NavLink>
                    </li>
                </ul>
            </div>

            <div>
                <h3>Book</h3>
                <ul>
                    <li>
                        <NavLink to="/horses/all" className="footer-link" style={{ color: textColor }}>All Horses</NavLink>
                    </li>
                    <li>
                        <NavLink to="/horses/archery" className="footer-link" style={{ color: textColor }}>Archery Horses</NavLink>
                    </li>
                    <li>
                        <NavLink to="/horses/jumper" className="footer-link" style={{ color: textColor }}>Jumper Horses</NavLink>
                    </li>
                </ul>
            </div>

            <div>
                <h3>Connect</h3>
                <ul>
                    <li>
                        <a href="mailto:" className="footer-link" style={{ color: textColor }}>Contact Us</a>
                    </li>
                    <li>
                        <span className="footer-link">Social Media</span>
                    </li>
                </ul>
            </div>
        </footer>
    )
}