import React, { FunctionComponent } from "react";
import styled from "styled-components"
import { ISectionProps } from "../types";

const MyPreferencesSection = styled("section")`
    height: 400px;
    padding: 20px;
    background-color: #efe;
`;

const MyPreferences: FunctionComponent<ISectionProps> = (props) => {
    return (
        <MyPreferencesSection ref={props.setSectionRef} data-path="/my-preferences">
            <h1>MyPreferences</h1>
        </MyPreferencesSection>
    );
}

export default MyPreferences;