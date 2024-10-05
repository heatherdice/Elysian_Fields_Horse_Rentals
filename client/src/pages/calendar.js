import React from "react";
import Hero from "../components/Hero";
import calendarHero from "../assets/calendarHero.jpg";

export default function calendar() {
    return (
        <>
            <Hero image={calendarHero} homePage={false} title="Calendar" />

        </>
    )
}