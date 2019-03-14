import { RefObject } from "react";
export interface ISection {
    section: RefObject<HTMLElement>;
}
export interface ISectionProps {
    setSectionRef(name?: string): (element: HTMLElement | null) => void;
}