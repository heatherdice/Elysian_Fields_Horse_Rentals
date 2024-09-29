import React from "react";
import Hero from "../components/Hero";
import aboutHero from "../assets/aboutHero.jpg"
import { AboutPage, AboutInfo, AboutHorses, AffiliateLinks } from "../styles/About.styles";

export default function about() {
    return (
        <>
            <Hero image={aboutHero} homePage={false} title="About Us" />

            <AboutPage>
                <AboutInfo>

                </AboutInfo>

                <AboutHorses>

                </AboutHorses>

                <AffiliateLinks>
                    
                </AffiliateLinks>
            </AboutPage>

        </>
    )
}