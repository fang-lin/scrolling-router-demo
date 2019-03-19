import React from 'react';
import { SlideLink } from '../../transitions';
import TitleBar from './TitleBar';
import CalculatorsAndArticles from './CalculatorsAndArticles';
import { PageWrapper } from './Styles';
import styled from 'styled-components';

const Context = styled("div")`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: scroll;
`;

const List = styled("ul")`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const Item = styled("li")`
    padding: 40px;
    border-width: 0 0 1px 0;
    border-style: solid;
    border-color: #ccc;
`;

const Main = () => {
    return (
        <PageWrapper>
            <Context>
                <List>
                    <Item><SlideLink to="my-preferences">My Preferences</SlideLink></Item>
                    <Item><SlideLink to="my-finances">My Finances</SlideLink></Item>
                    <Item><SlideLink to="my-home-loan">My Home Loan</SlideLink></Item>
                    <Item><CalculatorsAndArticles /></Item>
                    <Item><SlideLink to="rea-home-loan">REA Home Loan</SlideLink></Item>
                    <Item><SlideLink to="how-secure">How Secure</SlideLink></Item>
                    <Item><SlideLink to="feedback">Feedback</SlideLink></Item>
                </List>
            </Context>
        </PageWrapper>
    );
}

export default Main;