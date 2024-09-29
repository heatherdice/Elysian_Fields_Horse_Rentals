import { styled } from "styled-components";

const AboutPage = styled.main`
    overflow: hidden;
    width: 100%;
`;

const AboutSections = styled.section`
    display: grid;
    height: 70vh;
    h3 {
        font-size: 2.5em;
        font-weight: normal;
        place-self: center;
    }
    p {
        font-size: 1.5em;
    }
    @media (max-width: 900px) {
        padding: 2em;
        column-gap: 1em;
        h3 {
            font-size: 1.75em;
        }
        p {
            font-size: 1em;
        }
    }
    @media (max-width: 450px) {
        row-gap: 1em;
        padding: 1em;
    }
`;

const AboutInfo = styled(AboutSections)`
    color: var(--platinum);
    background-color: var(--hunter-green);
    grid-template-columns: 1fr 1fr;
`;

const AboutHorses = styled(AboutSections)`
    color: var(--champagne-pink);
    background-color: var(--english-violet);
    grid-template-columns: 1fr 1fr;
    column-gap: 3em;
    h3 {
        grid-column: span 2;
        place-self: center;
    }
`;

const AffiliateLinks = styled(AboutSections)`
    color: var(--hunter-green);
    background-color: var(--champagne-pink);
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 3em;
    h3 {
        grid-column: span 3;

    }
`;

const AffiliateLogos = styled.img`
    grid-column: span 1;
    height: 33%
    width: 33%;
`;

export {
    AboutPage,
    AboutSections,
    AboutInfo,
    AboutHorses,
    AffiliateLinks,
    AffiliateLogos
}