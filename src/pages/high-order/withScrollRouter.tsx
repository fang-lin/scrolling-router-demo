import React, { Component, ComponentType } from "react";
import detectPassiveEvents from "detect-passive-events";
import { History } from "history";
import maxBy from "lodash/maxBy";
import throttle from "lodash/throttle";
import map from "lodash/map";
import keys from "lodash/keys";
import sortBy from "lodash/sortBy";

interface ISection {
    element: HTMLElement;
    index: number;
}

interface ISectionRect {
    path: string;
    index: number;
    visibleHiehgt: number;
}

type SetSectionRef = (path: string) => (element: HTMLElement | null) => void;
export interface WithScrollRouterProps {
    setSectionRef: SetSectionRef;
}

function getVisibleHiehgt(windowHeight: number, top: number, height: number): number {
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
    return visibleHiehgt;
}

function getCurrentSectionRect(sections: { [key: string]: ISection }): ISectionRect {
    const windowHeight = window.document.documentElement.clientHeight;
    const sectionsRect = map<{ [key: string]: ISection }, ISectionRect>(sections, ({ element, index }, path: string) => {
        const { top, height } = element.getBoundingClientRect();
        const visibleHiehgt = getVisibleHiehgt(windowHeight, Math.round(top), Math.round(height));
        return {
            path,
            index,
            visibleHiehgt,
        }
    });
    const sortedSectionsRect = sortBy<ISectionRect>(sectionsRect, ({ index }) => index);
    return maxBy<ISectionRect>(sortedSectionsRect, ({ visibleHiehgt }) => visibleHiehgt) || {
        path: "",
        index: NaN,
        visibleHiehgt: NaN,
    };
}

function scrollToSection(sections: { [key: string]: ISection }, history: History, ) {
    const { path } = getCurrentSectionRect(sections);
    const { pathname } = history.location;
    if (pathname !== path) {
        const toSection = sections[pathname];
        if (toSection) {
            const { top } = toSection.element.getBoundingClientRect();
            window.scrollTo(0, document.documentElement.scrollTop + top);
        }
    }
}

const scrollEventOptions = detectPassiveEvents.hasSupport ? { passive: true } : false;

const withScrollRouter = (ComposeComponent: ComponentType<WithScrollRouterProps>) => {
    return class WithScrollRouter extends Component<any, {}> {
        sections: { [key: string]: ISection } = {};

        setSectionRef: SetSectionRef = (path) => (element) => {
            if (path && element) {
                const section = this.sections[path];
                if (section) {
                    section.element = element;
                    this.sections[path] = section;
                } else {
                    this.sections[path] = {
                        element,
                        index: keys(this.sections).length
                    };
                }
            }
        };

        scrollHandler = throttle(() => {
            const { visibleHiehgt, path } = getCurrentSectionRect(this.sections);
            if (visibleHiehgt > 0) {
                const { pathname, search } = this.props.history.location;
                if (pathname !== path) {
                    this.props.history.replace(path + search);
                }
            }
        }, 200);

        componentDidMount() {
            scrollToSection(this.sections, this.props.history);
            window.addEventListener("scroll", this.scrollHandler, scrollEventOptions);
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