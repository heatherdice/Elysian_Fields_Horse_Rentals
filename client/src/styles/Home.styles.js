import { styled } from "styled-components";
import horseArcherHome from "../assets/horseArcherHome.jpg";

// overall page styling - probably going to be moved to App.css or an App.styles.js file to be applied to all pages
const HomePage = styled.main`
    overflow: hidden;
    width: 100%;
`;

// global styling for homepage sections
const HomeSections = styled.section`
    display: grid;
    text-align: center;
    column-gap: 3em;
    padding: 3.5em;
    h3 {
        font-size: 2.5em;
        font-weight: normal;
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
        padding: 1em;
    }
`;

// "blurb" with link to horse page
const FirstSection = styled(HomeSections)`
    color: var(--platinum);
    background-color: var(--hunter-green);
    grid-template-columns: 2fr 3fr;
    h3, p {
        margin: 0;
        place-self: center;
    }
    p {
        padding: 0 3em;
    }
    a {
        color: var(--platinum);
    }
    @media (max-width: 900px) {
        p {
            padding: 0 1.5em;
        }
    }
`;

// testimonials
const SecondSection = styled(HomeSections)`
    grid-template-columns: 1fr 1fr;
    column-gap: 6em;
    color: var(--english-violet);
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: var(--platinum);
    background-blend-mode: overlay;
    box-sizing: border-box;
    background-image: url(${horseArcherHome});
    h3 {
        grid-column: span 2;
        margin: 0;
    }
`;

export {
    HomePage,
    HomeSections,
    FirstSection,
    SecondSection
}