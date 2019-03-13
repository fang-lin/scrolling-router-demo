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
            isLargeScreen: true
        };

        isInLargeScreen = () => {
            const { width } = window.document.body.getBoundingClientRect();
            width >= MIN_WIDTH_IN_LARGE_SCREEN;
            this.setState({ isLargeScreen: width >= MIN_WIDTH_IN_LARGE_SCREEN });
        }
        componentDidMount() {
            window.addEventListener("resize", this.isInLargeScreen);
        }
        componentWillUnmount() {
            window.removeEventListener("resize", this.isInLargeScreen);
        }
        render() {
            return <ComposeComponent isLargeScreen={this.state.isLargeScreen} />;
        }
    }
}

export default withWindowResize;