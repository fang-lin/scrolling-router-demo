import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const HeaderSection = styled("header")`
    height: 160px;
    padding: 20px;
    background-color: #eee;
`;

const Header: FunctionComponent<{}> = () => {
    return (
        <HeaderSection>
            <h1>Header</h1>
        </HeaderSection>
    );
}

export default Header;