import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { ISectionProps } from '../pages/types';

const FooterSection = styled("footer")`
    height: 480px;
    padding: 20px;
    background-color: #eee;
`;

const Footer: FunctionComponent<ISectionProps> = (props) => {
    return (
        <FooterSection ref={props.setSectionRef()}>
            <h1>Footer</h1>
        </FooterSection>
    );
}

export default Footer;