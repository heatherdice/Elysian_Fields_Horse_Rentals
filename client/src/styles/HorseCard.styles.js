import { styled } from "styled-components";

const CardContainer = styled.article`
    background: var(--platinum);
    color: var(--hunter-green);
    border-radius: 8px;
    width: 80%;
    padding: 1.5em;
    margin-bottom: 1.5em;
`;

const CardImage = styled.img`
    height: 100%;
    width: auto;
`;



export {
    CardContainer,
    CardImage
}