import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const CalculatorsAndArticlesSection = styled("section")`
    height: 450px;
    padding: 20px;
    background-color: #fee;
`;

const CalculatorsAndArticles: FunctionComponent<{}> = () => {
    return (
        <CalculatorsAndArticlesSection>
            <h1>CalculatorsAndArticles</h1>
        </CalculatorsAndArticlesSection>
    );
}

export default CalculatorsAndArticles;