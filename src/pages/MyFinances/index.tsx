import React, { FunctionComponent } from "react";
import LargeScreen from "./LargeScreen";
import SmallScreen from "./SmallScreen";
import { PageProps } from "../types";

const MyFinances: FunctionComponent<PageProps> = ({ isLargeScreen }) => {
    return (isLargeScreen ? <LargeScreen /> : <SmallScreen />);
};

export default MyFinances;