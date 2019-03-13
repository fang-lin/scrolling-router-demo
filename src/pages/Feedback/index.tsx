import React, { FunctionComponent } from "react";
import LargeScreen from "./LargeScreen";
import SmallScreen from "./SmallScreen";
import { PageProps } from "../types";

const Feedback: FunctionComponent<PageProps> = ({ isLargeScreen }) => {
    return (isLargeScreen ? <LargeScreen /> : <SmallScreen />);
};

export default Feedback;