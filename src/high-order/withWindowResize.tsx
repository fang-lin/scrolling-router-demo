import React, { Component, ComponentType } from 'react';
import getScreenSize from '../utils/screenSize';
import throttle from "lodash/throttle";
import { passiveEventOptions } from "../utils/passiveEventOption";

interface WithWindowResizeState {
    isLargeScreen: boolean;
}

export interface WithWindowResizeProps {
    isLargeScreen: boolean;
}

const withWindowResize = (ComposeComponent: ComponentType<WithWindowResizeProps>) => {
    return class WithWindowResize extends Component<any, WithWindowResizeState> {
        state = {
            isLargeScreen: false
        };

        isInLargeScreen = throttle(() => {
            this.setState({ isLargeScreen: getScreenSize() === "L" });
        }, 200);

        componentDidMount() {
            this.isInLargeScreen();
            window.addEventListener("resize", this.isInLargeScreen, passiveEventOptions);
        }

        componentWillUnmount() {
            window.removeEventListener("resize", this.isInLargeScreen);
        }

        render() {
            return <ComposeComponent {...this.props} isLargeScreen={this.state.isLargeScreen} />;
        }
    }
}

export default withWindowResize;