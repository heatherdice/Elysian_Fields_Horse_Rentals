import React from "react";
import Hero from "../components/Hero";
import jumperHorsesHero from "../assets/jumperHorse.jpg";
import { Link } from "react-router-dom";
import { AllHorsesPage, FilterHorsesRow } from "../styles/AllHorses.styles.js";


export default function Horses() {
    return (
        <>
            <Hero image={jumperHorsesHero} homePage={false} title="Jumper Horses" />

            <AllHorsesPage>
                <FilterHorsesRow>
                    <Link to="/archery-horses">
                        See Archery Horses
                    </Link>

                    <Link to="/horses">
                        See All Horses
                    </Link>
                </FilterHorsesRow>
            </AllHorsesPage>
        </>
    )
}