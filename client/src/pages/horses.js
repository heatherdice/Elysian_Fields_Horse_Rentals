import React from "react";
import Hero from "../components/Hero";
import horsesHero from "../assets/horsesHero.jpg";


export default function Horses() {
    return (
        <Hero image={horsesHero} title="Elysian Fields" subtitle="Horse Rentals" />
    )
}