import React from "react";
import Hero from "../components/Hero";
import homeHero from "../assets/homeHero.jpg"

export default function Home() {
    return (
        <>
            <Hero image={homeHero} title="Elysian Fields" subtitle="Horse Rentals" />

            <section style={{backgroundColor: "var(--hunter-green)", color: "var(--platinum)", display: "grid", gridTemplateColumns: "40% 60%", rowGap: "1em", textAlign: "center", height: "60vh"}}>
                <h3 style={{fontSize: "2.5em", fontWeight: "normal", margin: "0", padding: "2em", placeSelf: "center"}}>
                    Horses suitable for IHA, IHSA, mounted archery, and more!
                </h3>
                <p style={{fontSize: "2em", padding: "2em", placeSelf: "center"}}>
                    Elysian Fields Horse Rentals has been renting out horses for competition and pleasure for [x years]. Our horses are trained to be calm, focused, and non-reactive to outside stimuli, ensuring a safe and enjoyable ride! From small local schooling shows to big exciting IHSA competitions, our horses have done it all.
                </p>
            </section>
        </>
    )
}