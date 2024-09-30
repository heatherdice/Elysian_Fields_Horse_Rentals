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

                    <a href="https://www.facebook.com/UnitedLibertyHorseArchers/" target="_blank">
                        <AffiliateLogos src={ulhaLogo} alt="United Liberty Horse Archers" />
                    </a>

                    <a href="https://www.rideiea.org/" target="_blank">
                        <AffiliateLogos src={ieaLogo} alt="Interscholastic Equestrian Association" />
                    </a>

                    <a href="https://www.ihsainc.com/home" target="_blank">
                        <AffiliateLogos src={ihsaLogo} alt="Intercollegiate Horse Shows Association" />
                    </a>
                </AffiliateLinks>
            </AboutPage>

        </>
    )
}