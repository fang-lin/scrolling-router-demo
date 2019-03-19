import { createGlobalStyle, keyframes } from 'styled-components';

const slideLeftClassName = 'slide-left';
const slideRightClassName = 'slide-right';
const duration = 300;

const slideLeftOut = keyframes`
    100% { transform: translateX(-100%); }
`;

const slideLeftIn = keyframes`
    0% { transform: translateX(100%); }
`;

const slideRightOut = keyframes`
    100% { transform: translateX(100%); }
`;

const slideRightIn = keyframes`
    0% { transform: translateX(-100%); }
`;

const SlideGlobalStyle = createGlobalStyle<any>`
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
        z-index: 10;
        animation: ${slideRightIn} ${duration}ms none ease-out;
    }
`;

const slideLeft = { transition: slideLeftClassName, duration };
const slideRight = { transition: slideRightClassName, duration };

export { SlideGlobalStyle, slideLeft, slideRight };
