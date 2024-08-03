import React from "react";
import "../styles/home.css";
import Hero from "../components/Hero";
import homeHero from "../assets/homeHero.jpg";
import horseArcherHome from "../assets/horseArcherHome.jpg";
import Footer from "../components/Footer";
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

            <section className="testimonials" style={{ backgroundImage: `url(${horseArcherHome})` }}>
                <h3>Testimonials</h3>
                <p>
                    "Kellie's horses are the calmest I've ever seen! This was my first mounted archery lesson and I never had to worry that a horse would spook. He took great care of me and I had a blast!"
                    <br />
                    - Reviewer 1
                </p>

                <p>
                    "Riding a strange horse is always the part of competing in the IHA that makes me the most nervous, but any time I'm riding an Elysian Fields horse, I am instantly at ease! These horses really know what they're doing!"
                    <br />
                    - Reviewer 2
                </p>
            </section>

            <Footer backgroundColor="var(--english-violet)" textColor="var(--platinum)" />
        </>
    )
}