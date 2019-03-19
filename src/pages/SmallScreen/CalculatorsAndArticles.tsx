import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const CalculatorsAndArticlesSection = styled("section")`

`;

const CalculatorsAndArticles: FunctionComponent<{}> = () => {
    return (
        <CalculatorsAndArticlesSection>
            <h2>Calculators</h2>
            <div>Cards...</div>
            <h2>Articles</h2>
            <div>Cards...</div>
        </CalculatorsAndArticlesSection>
    );
}

export default CalculatorsAndArticles;