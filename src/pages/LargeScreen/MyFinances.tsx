import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { ISectionProps } from "../types";

const MyFinancesSection = styled("section")`
    height: 400px;
    padding: 20px;
    background-color: #eef;
`;

const MyFinances: FunctionComponent<ISectionProps> = (props) => {
    return (
        <MyFinancesSection ref={props.setSectionRef} data-path="/my-finances">
            <h1>MyFinances</h1>
        </MyFinancesSection>
    );
}

export default MyFinances;