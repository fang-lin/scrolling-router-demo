import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TitleBarWrapper = styled("div")`
    background-color: #eee;
    padding: 20px;
`;

interface TitleBarProps {
    title: string;
}

const TitleBar: FunctionComponent<TitleBarProps> = (props) => {
    const { title } = props;
    return (
        <TitleBarWrapper>
            <Link to="/">Back</Link>
            <h1>{title}</h1>
        </TitleBarWrapper>
    );
}

export default TitleBar;