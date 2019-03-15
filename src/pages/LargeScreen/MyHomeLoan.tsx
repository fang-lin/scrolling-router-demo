import React, { FunctionComponent } from "react";
import styled from "styled-components"
import { ISectionProps } from "../types";

const MyHomeLoanSection = styled("section")`
    height: 380px;
    padding: 20px;
    background-color: #eff;
`;

const MyHomeLoan: FunctionComponent<ISectionProps> = (props) => {
    return (
        <MyHomeLoanSection ref={props.setSectionRef} data-path="/my-home-loan">
            <h1>MyHomeLoan</h1>
        </MyHomeLoanSection>
    );
}

export default MyHomeLoan;