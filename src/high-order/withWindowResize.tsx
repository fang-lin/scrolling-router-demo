import React, { Component, ComponentType } from 'react';
import getScreenSize from '../utils/screenSize';
import detectPassiveEvents from 'detect-passive-events';

interface WithWindowResizeState {
    isLargeScreen: boolean;
}

export interface WithWindowResizeProps {
    isLargeScreen: boolean;
}

const scrollEventOptions = detectPassiveEvents.hasSupport ? { passive: true } : false;

const withWindowResize = (ComposeComponent: ComponentType<WithWindowResizeProps>) => {
    return class WithWindowResize extends Component<any, WithWindowResizeState> {
        state = {
            isLargeScreen: false
        };

        isInLargeScreen = () => {
            this.setState({ isLargeScreen: getScreenSize() === "L" });
        }

        componentDidMount() {
            this.isInLargeScreen();
            window.addEventListener("resize", this.isInLargeScreen, scrollEventOptions);
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