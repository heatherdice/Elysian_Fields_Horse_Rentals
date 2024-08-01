import React from "react";
import "../styles/home.css";
import Hero from "../components/Hero";
import homeHero from "../assets/homeHero.jpg"
import { Link } from "react-router-dom";

export default function Home() {    
    return (
        <>
            <Hero image={homeHero} homePage={true} />

            <section className="home-section-1">
                <h3>
                    Horses suitable for IHA, IHSA, mounted archery, and more!
                </h3>
                <p>
                    Elysian Fields Horse Rentals has been renting out horses for competition and pleasure for [x years]. Our horses are trained to be calm, focused, and non-reactive to outside stimuli, ensuring a safe and enjoyable ride! From small local schooling shows to big exciting IHSA competitions, our horses have done it all.
                    <br />
                    <br />

                    <Link to="/about" className="horses-link">Meet Our Horses</Link>
                </p>
            </section>
        </>
    )
}