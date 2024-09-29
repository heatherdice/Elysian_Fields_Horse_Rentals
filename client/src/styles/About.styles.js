import { styled } from "styled-components";

const AboutPage = styled.main`
    overflow: hidden;
    width: 100%;
`;

const AboutSections = styled.section`
    display: grid;
    height: 70vh;
`;

const AboutInfo = styled(AboutSections)`
    color: var(--platinum);
    background-color: var(--hunter-green);
    grid-template-columns: 1fr 1fr;
`;

const AboutHorses = styled(AboutSections)`
    color: var(--champagne-pink);
    background-color: var(--english-violet);
`;

const AffiliateLinks = styled(AboutSections)`
    color: var(--hunter-green);
    background-color: var(--champagne-pink);
`;

export {
    AboutPage,
    AboutSections,
    AboutInfo,
    AboutHorses,
    AffiliateLinks
}