import React from "react";
import Hero from "../components/Hero";
import homeHero from "../assets/homeHero.jpg"

export default function Home() {
    return (
        <>
            <Hero image={homeHero} />
        </>
    )
}