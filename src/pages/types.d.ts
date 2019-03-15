import { RefObject } from "react";
import { SetSectionRef } from "./high-order/withScrollRouter";
export interface ISection {
    section: RefObject<HTMLElement>;
}
export interface ISectionProps {
    setSectionRef: SetSectionRef
}