import React, { Component, ComponentType } from 'react';
import getScreenSize from '../utils/screenSize';

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

        isInLargeScreen = () => {
            this.setState({ isLargeScreen: getScreenSize() === "L" });
        }

        componentDidMount() {
            this.isInLargeScreen();
            window.addEventListener("resize", this.isInLargeScreen);
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