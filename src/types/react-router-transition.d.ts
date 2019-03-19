declare module "react-router-transition" {
    import { Component, ComponentType } from "react";

    export function spring(during: number, options: any): (during: number) => number;
    export const AnimatedSwitch: ComponentType<any>;
}