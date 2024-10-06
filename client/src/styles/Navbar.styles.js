import { styled, css, keyframes } from "styled-components";

// consolidated styling
const sharedLinkStyles = css`
    color: black;
    text-decoration: none;
    &:hover {
        text-decoration: underline 0.08em black;
        cursor: pointer;
    }
`;

const NavbarContainer = styled.nav`
    z-index: 2;
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    position: absolute;
    font-family: var(--text-font);
`;

const Logo = styled.div`
    margin: 1.25em 0 1.25em 1.875em;
`;

const SiteTitle = styled.a`
    text-decoration: none;
    color: black;
    margin-top: 0;
    padding-top: 3.125em;
    margin-bottom: 0;
    font-size: 3em;
    font-family: var(--title-font);
    @media (max-width: 900px) {
        font-size: 2em;
    }
    @media (max-width: 450px) {
        font-size: 1.25em;
    }
`;

const SiteSubtitle = styled.h4`
    margin-top: 1em;
    font-size: 2em;
    font-weight: normal;
    padding-bottom: 50px;
    @media (max-width: 900px) {
        margin-top: 0.5em;
        font-size: 1.5em;
    }
    @media (max-width: 450px) {
        font-size: 1em;
    }
`;

const NavLinks = styled.div`
    margin-top: 2em;
    margin-left: auto;
    a {
        ${sharedLinkStyles}
        font-size: 1.25em;
        padding: 0 1em;
    }
`;

// animations for mobile dropdown
const SlideIn = keyframes`
    from {
        transform: translateX(8em);
    }
    to {
        transform: translateX(0);
    }
;`
const SlideOut = keyframes`
    from {
        transform: translateX(0em);
    }
    to {
        transform: translateX(15em);
    }
;`

// mobile nav styling
const DropdownContainer = styled.div`
    margin-top: 1.25em;
    margin-right: 1.875em;
    display: flex;
    flex-direction: column;
`;
const MenuButton = styled.button`
    border: none;
    background: none;
    text-align: right;
    font-family: var(--text-font);
    font-size: 1.5em;
    ${sharedLinkStyles}
    @media (max-width: 450px) {
        font-size: 1em;
    }
`;
const DropdownMenu = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
    background-color: var(--champagne-pink);
    border-radius: 3px;
    box-shadow: 4px 8px 16px 0 rgba(0,0,0,0.1);
    animation: ${({ isOpen }) => (isOpen ? SlideIn : SlideOut)} 0.5s ease forwards;
    a {
        ${sharedLinkStyles}
        font-size: 1.25em;
        padding: .75em;
    }
    @media (max-width: 500px) {
        a {
            font-size: 1em;
        }
    }
`;

export {
    NavbarContainer,
    Logo,
    SiteTitle,
    SiteSubtitle,
    NavLinks,
    SlideIn,
    SlideOut,
    DropdownContainer,
    MenuButton,
    DropdownMenu
};
