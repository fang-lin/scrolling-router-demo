import React, { Component, ComponentType } from 'react';
import { History } from 'history';
import maxBy from 'lodash/maxBy';
import find from 'lodash/find';
import throttle from 'lodash/throttle';

const MIN_INVOKE_INTERVAL = 300;

interface WithScrollLocationState {
}

interface ISection {
    element: HTMLElement;
    path: string;
}
interface ISectionRect {
    path: string;
    top: number,
}

export interface WithScrollLocationProps {
    setSectionRef(path: string): (element: HTMLElement | null) => void;
}

function getCurrentSection(sections: ISection[]): ISectionRect {
    const windowHeight = window.outerHeight;
    const sectionsWithVisibleHiehgt = sections.map(({ element, path }) => {
        let { top, height } = element.getBoundingClientRect();
        let visibleHiehgt: number = 0;

        if (top + height <= 0 || top >= windowHeight) {
            visibleHiehgt = 0;
        } else {
            if (top <= 0 && top + height >= windowHeight) {
                visibleHiehgt = windowHeight;
            } else if (top >= 0 && top + height <= windowHeight) {
                visibleHiehgt = height;
            } else if (top < 0) {
                visibleHiehgt = height + top;
            } else if (top + height > windowHeight) {
                visibleHiehgt = windowHeight - top;
            }
        }
        return {
            path,
            element,
            top,
            visibleHiehgt,
        }
    });
    const { path = "", top = 0 } = maxBy(sectionsWithVisibleHiehgt, ({ visibleHiehgt }) => visibleHiehgt) || {};
    return { path, top };
}

function scrollToSection(sections: ISection[], history: History, ) {
    const currentSection = getCurrentSection(sections);
    if (history.location.pathname !== currentSection.path) {
        const toSection = find(sections, ({ path }) => path === history.location.pathname);
        if (toSection) {
            const { top } = toSection.element.getBoundingClientRect();
            window.scrollTo(0, window.scrollY + top);
        }
    }
}

const withScrollLocation = (ComposeComponent: ComponentType<WithScrollLocationProps>) => {
    return class WithScrollLocation extends Component<any, WithScrollLocationState> {

        sections: ISection[] = [];
        lastInvokeTime: number = 0;

        setSectionRef = (path: string) => (element: HTMLElement | null) => {
            if (path) {
                element && this.sections.push({
                    element,
                    path,
                });
            }
            this.sections = this.sections.filter(section => document.body.contains(section.element));
        };

        scrollHandler = () => {
            const currentSection = getCurrentSection(this.sections);
            if (this.props.history.location.pathname !== currentSection.path) {
                this.props.history.replace(currentSection.path);
            }
        };

        componentDidMount() {
            scrollToSection(this.sections, this.props.history);
            window.addEventListener("scroll", this.scrollHandler);
        }

        componentWillUnmount() {
            window.removeEventListener("scroll", this.scrollHandler);
        }

        render() {
            return <ComposeComponent {...this.props} setSectionRef={this.setSectionRef} />;
        }
    }
}

export default withScrollLocation;