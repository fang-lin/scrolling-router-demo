import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { ISectionProps } from '../types';

const FeedbackSection = styled("section")`
    height: 620px;
    padding: 20px;
    background-color: #fee;
`;

const Feedback: FunctionComponent<ISectionProps> = (props) => {
    return (
        <FeedbackSection ref={props.setSectionRef("/feedback")}>
            <h1>Feedback</h1>
        </FeedbackSection>
    );
}

export default Feedback;