import React, { cloneElement, FunctionComponent, ReactNode, ReactHTMLElement } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { slideLeft, slideRight, SlideGlobalStyle } from './slide';
import SlideLink from './SlideLink';

const childFactoryCreator = (props: any) =>
    (child: ReactHTMLElement<HTMLBaseElement>) =>
        cloneElement(child, props);

interface TransitionsProps {
    transition: string;
    duration: number;
    pageKey: string;
    children?: ReactNode;
}

const Transitions: FunctionComponent<TransitionsProps> = ({ transition = '', duration = 0, pageKey, children }) => (
    <TransitionGroup
        childFactory={childFactoryCreator({ classNames: transition, timeout: duration })}
    >
        <CSSTransition
            key={pageKey}
            timeout={0}
            classNames="a"
        >
            {children}
        </CSSTransition>
    </TransitionGroup>
)

export default Transitions;

export { SlideGlobalStyle, slideLeft, slideRight, SlideLink };