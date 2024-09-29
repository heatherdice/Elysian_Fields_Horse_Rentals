import React from "react";
import Hero from "../components/Hero";
import aboutHero from "../assets/aboutHero.jpg";
import ulhaLogo from "../assets/ulhalogo.png";
import ieaLogo from "../assets/iea.png";
import ihsaLogo from "../assets/ihsalogo.png";
import { AboutPage, AboutInfo, AboutHorses, AffiliateLinks, AffiliateLogos } from "../styles/About.styles";

export default function about() {
    return (
        <>
            <Hero image={aboutHero} homePage={false} title="About Us" />

            <AboutPage>
                <AboutInfo>

                </AboutInfo>

                <AboutHorses>
                    <h3>Meet Our Horses</h3>

                </AboutHorses>

                <AffiliateLinks>
                    <h3>Our Affiliates</h3>

                    <AffiliateLogos src={ulhaLogo} alt="United Liberty Horse Archers" />

                    <AffiliateLogos src={ieaLogo} alt="Interscholastic Equestrian Association" />

                    <AffiliateLogos src={ihsaLogo} alt="Intercollegiate Horse Shows Association" />
                </AffiliateLinks>
            </AboutPage>

        </>
    )
}