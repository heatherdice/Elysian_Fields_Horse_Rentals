import React from "react";
import Hero from "../components/Hero";
import archeryHorsesHero from "../assets/archeryHorse.jpg";
import { Link } from "react-router-dom";
import { AllHorsesPage, FilterHorsesRow } from "../styles/AllHorses.styles.js";


export default function Horses() {
    return (
        <>
            <Hero image={archeryHorsesHero} homePage={false} title="Archery Horses" />

            <AllHorsesPage>
                <FilterHorsesRow>
                    <Link to="/horses">
                        See All Horses
                    </Link>

                    <Link to="#jumper-horses">
                        See Jumper Horses
                    </Link>
                </FilterHorsesRow>
            </AllHorsesPage>
        </>
    )
}