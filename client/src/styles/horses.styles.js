import { styled } from "styled-components";

const HorsesPage = styled.main`
    overflow: hidden;
    width: 100%;
    background-color: var(--cambridge-blue);
`;

const FilterHorsesRow = styled.section`
    display: grid;
    padding: 2em;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    a {
        color: var(--platinum);
        font-family: var(--title-font) !important;
        font-size: 2.5em;
        text-decoration: none;
        &:hover {
            text-decoration: underline 0.08em var(--platinum);
        }
    }
`;

export {
    HorsesPage,
    FilterHorsesRow
}