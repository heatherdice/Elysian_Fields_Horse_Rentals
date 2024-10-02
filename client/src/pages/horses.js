import React from "react";
import Hero from "../components/Hero";
import horsesHero from "../assets/horsesHero.jpg";
import archeryHorsesHero from "../assets/archeryHorse.jpg";
import jumperHorsesHero from "../assets/jumperHorse.jpg";
import { Link, useParams } from "react-router-dom";
import { HorsesPage, FilterHorsesRow } from "../styles/horses.styles.js";


export default function Horses() {
    // get category from url
    const { category } = useParams();

    // conditionally render Hero content
    const getHeroContent = () => {
        if (category === "archery") {
            return { image: archeryHorsesHero, title: "Archery Horses"};
        } else if (category === "jumper") {
            return { image: jumperHorsesHero, title: "Jumper Horses"};
        } else {
            return { image: horsesHero, title: "All Horses"};
        }
    };
    const heroContent = getHeroContent();

    // conditionally render links
    const renderLinks = () => {
        const linksMap = {
            archery: [
                {to: "/horses/all", label: "See All Horses"},
                {to: "/horses/jumper", label: "See Jumper Horses"}
            ],
            jumper: [
                {to: "/horses/archery", label: "See Archery Horses"},
                {to: "/horses/all", label: "See All Horses"}
            ],
            default: [
                {to: "/horses/archery", label: "See Archery Horses"},
                {to: "/horses/jumper", label: "See Jumper Horses"}
            ]
        }

        const currentLinks = linksMap[category] || linksMap.default;

        return currentLinks.map((link, index) => (
            <Link key={index} to={link.to}>{link.label}</Link>
        ))
    };

    return (
        <>
            <Hero image={heroContent.image} homePage={false} title={heroContent.title} />

            <HorsesPage>
                <FilterHorsesRow>
                    {renderLinks()}
                </FilterHorsesRow>
            </HorsesPage>
        </>
    )
}