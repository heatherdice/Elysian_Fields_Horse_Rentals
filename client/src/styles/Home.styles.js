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
`;

// "blurb" with link to horse page
const FirstSection = styled(HomeSections)`
    color: var(--platinum);
    background-color: var(--hunter-green);
    grid-template-columns: 2fr 3fr;
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
`;

export {
    HomePage,
    HomeSections,
    FirstSection,
    SecondSection
}