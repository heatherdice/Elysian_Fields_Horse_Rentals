import React from "react";
import Hero from "../components/Hero";
import homeHero from "../assets/homeHero.jpg";
import { HomePage, FirstSection, SecondSection } from "../styles/Home.styles";
import { Link } from "react-router-dom";

export default function Home() {    
    return (
        <>
            <Hero image={homeHero} homePage={true} />

            <HomePage>
                <FirstSection>
                    <h3>
                        Horses suitable for IHA, IHSA, mounted archery, and more!
                    </h3>
                    <p>
                        Elysian Fields Horse Rentals has been renting out horses for competition and pleasure for [x years]. Our horses are trained to be calm, focused, and non-reactive to outside stimuli, ensuring a safe and enjoyable ride! From small local schooling shows to big exciting IHSA competitions, our horses have done it all.
                        <br />
                        <br />

                        <Link to="/about" style={{ color: "var(--platinum)" }}>Meet Our Horses</Link>
                    </p>
                </FirstSection>

                <SecondSection>
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
                </SecondSection>
            </HomePage>
        </>
    )
}