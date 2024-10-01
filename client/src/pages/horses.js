import React from "react";
import Hero from "../components/Hero";
import horsesHero from "../assets/horsesHero.jpg";
import { Link } from "react-router-dom";
import { AllHorsesPage, FilterHorsesRow } from "../styles/AllHorses.styles.js";


export default function Horses() {
    return (
        <>
            <Hero image={horsesHero} homePage={false} title="All Horses" />

            <AllHorsesPage>
                <FilterHorsesRow>
                    <Link to="/archery-horses">
                        See Archery Horses
                    </Link>

                    <Link to="#jumper-horses">
                        See Jumper Horses
                    </Link>
                </FilterHorsesRow>
            </AllHorsesPage>
        </>
    )
}