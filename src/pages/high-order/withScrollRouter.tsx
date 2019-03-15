import React, { Component, ComponentType } from 'react';
import { History } from 'history';
import maxBy from 'lodash/maxBy';
import find from 'lodash/find';

interface WithScrollRouterState {
}

interface ISection {
    element: HTMLElement;
    path: string;
}

interface ISectionRect {
    path: string;
    top: number,
}

export interface WithScrollRouterProps {
    setSectionRef(path: string): (element: HTMLElement | null) => void;
}

function getCurrentSection(sections: ISection[]): ISectionRect {
    const windowHeight = window.document.documentElement.clientHeight;
    const sectionsWithVisibleHiehgt = sections.map(({ element, path }) => {
        let { top, height } = element.getBoundingClientRect();
        let visibleHiehgt: number = 0;

        if (top + height <= 0 || top >= windowHeight) {
            visibleHiehgt = 0;
        } else {
            if (top < 0 && top + height > windowHeight) {
                visibleHiehgt = windowHeight;
            } else if (top >= 0 && top + height <= windowHeight) {
                visibleHiehgt = height;
            } else if (top < 0) {
                visibleHiehgt = height + top;
            } else if (top + height > windowHeight) {
                visibleHiehgt = windowHeight - top;
            }
        }
        return { path, element, top, visibleHiehgt }
    });
    const { path = "", top = 0 } = maxBy(sectionsWithVisibleHiehgt, ({ visibleHiehgt }) => visibleHiehgt) || {};
    return { path, top };
}

function scrollToSection(sections: ISection[], history: History, ) {
    const { path } = getCurrentSection(sections);
    const { pathname } = history.location;
    if (pathname !== path) {
        const toSection = find(sections, ({ path }) => path === pathname);
        if (toSection) {
            const { top } = toSection.element.getBoundingClientRect();
            window.scrollTo(0, window.scrollY + top);
        }
    }
}

const withScrollRouter = (ComposeComponent: ComponentType<WithScrollRouterProps>) => {
    return class WithScrollRouter extends Component<any, WithScrollRouterState> {

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
            const { path } = getCurrentSection(this.sections);
            const { pathname, search } = this.props.history.location;
            if (pathname !== path) {
                this.props.history.replace(path + search);
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

export default withScrollRouter;