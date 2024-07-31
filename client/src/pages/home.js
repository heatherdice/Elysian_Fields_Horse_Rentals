import React from "react";
import Hero from "../components/Hero";
import homeHero from "../assets/homeHero.jpg"

export default function Home() {
    return (
        <>
            <Hero image={homeHero} title="Elysian Fields" subtitle="Horse Rentals" />

            <section style={{backgroundColor: "var(--hunter-green)", color: "var(--platinum)"}}>
                <h3 style={{fontSize: "2.5em", fontWeight: "normal", margin: "0"}}>
                    Horses suitable for IHA, IHSA, mounted archery, and more!
                </h3>
                <p>
                    Elysian Fields Horse Rentals has been renting out horses for competition and pleasure for [x years]. Our horses are trained to be calm, focused, and non-reactive to outside stimuli, ensuring a safe and enjoyable ride! From small local schooling shows to big exciting IHSA competitions, our horses have done it all.
                </p>
            </section>
        </>
    )
}