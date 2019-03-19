import { createGlobalStyle, keyframes } from 'styled-components';

const duration = 500;

// slideLeft

const slideLeftClassName = 'slide-left';
const slideLeftOut = keyframes`
    100% { transform: translateX(-100%); }
`;

const slideLeftIn = keyframes`
    0% { transform: translateX(100%); }
`;

// slideRight

const slideRightClassName = 'slide-right';
const slideRightOut = keyframes`
    100% { transform: translateX(100%); }
`;

const slideRightIn = keyframes`
    0% { transform: translateX(-100%); }
`;

// rotate

const rotateClassName = 'rotate';
const rotateOut = keyframes`
    25% { transform: translateZ(-5.9px) translateX(-42%); }
    50% { transform: translateZ(-20px) translateX(-60%); }
    75% { transform: translateZ(-34.1px) translateX(-42%); }
    100% { transform: translateZ(-40px); }
`;

const rotateIn = keyframes`
    0% { transform: translateZ(-40px) }
    25% { transform: translateZ(-34.1px) translateX(42%); }
    50% { transform: translateZ(-20px) translateX(60%); }
    75% { transform: translateZ(-5.9px) translateX(42%); }
    100% { z-index: 10; }
`;

const GlobalStyle = createGlobalStyle<any>`
    ${props => props.isLargeScreen ? `` : `
        html, body{
            overflow: hidden;
        }
    `}

    .${slideLeftClassName}-exit-active {
        animation: ${slideLeftOut} ${duration}ms none ease-in;
    }
    .${slideLeftClassName}-enter-active {
        z-index: 10;
        animation: ${slideLeftIn} ${duration}ms none ease-out;
    }
    
    .${slideRightClassName}-exit-active {
        animation: ${slideRightOut} ${duration}ms none ease-in;
    }
    .${slideRightClassName}-enter-active {

        animation: ${slideRightIn} ${duration}ms none ease-out;
    }
    
    .${rotateClassName}-exit-active {
        animation: ${rotateOut} ${duration}ms both linear;
    }
    .${rotateClassName}-enter-active {
        animation: ${rotateIn} ${duration}ms both linear;
    }
`;

// const slideLeft = { transition: slideLeftClassName, duration };
const slideLeft = { transition: rotateClassName, duration };
// const slideRight = { transition: slideRightClassName, duration };
const slideRight = { transition: rotateClassName, duration };

export { GlobalStyle, slideLeft, slideRight };
