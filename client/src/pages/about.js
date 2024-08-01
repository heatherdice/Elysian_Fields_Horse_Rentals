import React from "react";
import Hero from "../components/Hero";
import aboutHero from "../assets/aboutHero.jpg"

export default function about() {
    return (
        <>
            <Hero image={aboutHero} homePage={false} title="About Us" />

        </>
    )
}