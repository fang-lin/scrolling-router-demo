import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderSection = styled("header")`

`;

const Header: FunctionComponent<{}> = (props) => {
    return (
        <HeaderSection>
            <ul>
                <li><Link to="how-secure">How Secure</Link></li>
                <li><Link to="feedback">Feedback</Link></li>
                <li><Link to="my-finances">My Finances</Link></li>
                <li><Link to="my-home-loan">My Home Loan</Link></li>
                <li><Link to="my-preferences">My Preferences</Link></li>
                <li><Link to="rea-home-loan">REA Home Loan</Link></li>
            </ul>
        </HeaderSection>
    );
}

export default Header;