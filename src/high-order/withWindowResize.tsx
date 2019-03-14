import React, { Component, ComponentType } from 'react';
const MIN_WIDTH_IN_LARGE_SCREEN = 768;

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
            this.setState({ isLargeScreen: window.outerWidth >= MIN_WIDTH_IN_LARGE_SCREEN });
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