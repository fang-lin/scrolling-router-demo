import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { ISectionProps } from "../types";

const HowSecureSection = styled("section")`
    height: 440px;
    padding: 20px;
    background-color: #fef;
`;

const HowSecure: FunctionComponent<ISectionProps> = (props) => {
    return (
        <HowSecureSection ref={props.setSectionRef} data-path="/how-secure">
            <h1>HowSecure</h1>
        </HowSecureSection>
    );
}

export default HowSecure;