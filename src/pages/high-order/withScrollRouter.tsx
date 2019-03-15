import React, { Component, ComponentType } from "react";
import { scrollEventOptions } from "../../utils/passiveEventOption";
import { History } from "history";
import throttle from "lodash/throttle";

export type SetSectionRef = (element: HTMLElement | null) => void;
export interface WithScrollRouterProps {
    setSectionRef: SetSectionRef;
}

function isFocusSection(top: number, height: number, viewFocucHeight: number = 0): boolean {
    return top <= viewFocucHeight && top + height >= viewFocucHeight;
}

function getFocusSectionPath(sections: { [key: string]: HTMLElement }): string {
    const viewFocucHeight = window.document.documentElement.clientHeight * VIEW_FOCUS_RATIO;
    let toPath = "";
    for (let path in sections) {
        const { top, height } = sections[path].getBoundingClientRect();
        if (isFocusSection(top, height, viewFocucHeight)) {
            toPath = path;
            break;
        }
    }
    return toPath;
}

function scrollToSection(sections: { [key: string]: HTMLElement }, history: History, ) {
    const section = sections[history.location.pathname];
    if (section) {
        const { top } = section.getBoundingClientRect();
        window.scrollTo(0, document.documentElement.scrollTop + top);
    }
}

const VIEW_FOCUS_RATIO = .1;

const withScrollRouter = (ComposeComponent: ComponentType<WithScrollRouterProps>) => {
    return class WithScrollRouter extends Component<any, {}> {
        sections: { [key: string]: HTMLElement } = {};

        setSectionRef: SetSectionRef = (element) => {
            if (element) {
                const path = element.getAttribute("data-Path");
                if (path) {
                    this.sections[path] = element;
                }
            }
        };

        scrollHandler = throttle(() => {
            const path = getFocusSectionPath(this.sections);
            const { pathname, search } = this.props.history.location;
            if (pathname !== path) {
                const toPath = path ? path : "/";
                this.props.history.replace(toPath + search);
            }
        }, 200);

        componentDidMount() {
            window.addEventListener("scroll", this.scrollHandler, scrollEventOptions);
            window.requestAnimationFrame(() => scrollToSection(this.sections, this.props.history));
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