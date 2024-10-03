import { styled } from "styled-components";

const CardContainer = styled.article`
    background: var(--platinum);
    color: var(--hunter-green);
    border-radius: 8px;
    width: 80%;
    padding: 1.5em;
    margin-bottom: 1.5em;
    display: flex;
    flex-direction: row;
`;

const CardImage = styled.img`
    height: 100%;
    width: auto;
`;

const HorseInfo = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0 1em;
`;

const HorseName = styled.h3`
    font-size: 2em;
`;

const HorseStats = styled.ul`
    list-style: none;
    font-size: 1.5em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const HorseBlurb = styled.p`
    font-size: 1.5em;
`;

export {
    CardContainer,
    CardImage,
    HorseInfo,
    HorseName,
    HorseStats,
    HorseBlurb
}