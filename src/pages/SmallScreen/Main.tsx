import React from 'react';
import { Link } from 'react-router-dom';
import TitleBar from './TitleBar';
import styled from 'styled-components';

const MainWrapper = styled("div")`
`;

const Main = () => {
    return (
        <MainWrapper>
            <TitleBar title="Main Page" />
            <ul>
                <li><Link to="my-preferences">My Preferences</Link></li>
                <li><Link to="my-finances">My Finances</Link></li>
                <li><Link to="my-home-loan">My Home Loan</Link></li>
                <li><Link to="rea-home-loan">REA Home Loan</Link></li>
                <li><Link to="how-secure">How Secure</Link></li>
                <li><Link to="feedback">Feedback</Link></li>
            </ul>
        </MainWrapper>
    );
}

export default Main;