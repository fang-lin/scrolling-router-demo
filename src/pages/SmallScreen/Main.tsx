import React from 'react';
import { Link } from 'react-router-dom';
import TitleBar from './TitleBar';

const Main = () => {
    return (
        <div>
            <TitleBar title="REA Home Loan" />
            <ul>
                <li><Link to="my-preferences">My Preferences</Link></li>
                <li><Link to="my-finances">My Finances</Link></li>
                <li><Link to="my-home-loan">My Home Loan</Link></li>
                <li><Link to="rea-home-loan">REA Home Loan</Link></li>
                <li><Link to="how-secure">How Secure</Link></li>
                <li><Link to="feedback">Feedback</Link></li>
            </ul>
        </div>
    );
}

export default Main;