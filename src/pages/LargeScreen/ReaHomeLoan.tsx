import React, { FunctionComponent } from 'react';
import styled from "styled-components"
import { ISectionProps } from '../types';

const ReaHomeLoanSection = styled("section")`
    height: 340px;
    padding: 20px;
    background-color: #ffe;
`;

const ReaHomeLoan: FunctionComponent<ISectionProps> = (props) => {
    return (
        <ReaHomeLoanSection ref={props.setSectionRef("/rea-home-loan")}>
            <h1>ReaHomeLoan</h1>
        </ReaHomeLoanSection>
    );
}

export default ReaHomeLoan;