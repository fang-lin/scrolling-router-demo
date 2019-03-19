import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { SlideLink } from "../../transitions";

const TitleBarWrapper = styled("div")`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    background-color: #ccc;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

interface TitleBarProps {
    title: string;
    withoutLink?: boolean;
}

const TitleBar: FunctionComponent<TitleBarProps> = (props) => {
    const { title } = props;
    return (
        <TitleBarWrapper className="title-bar">
            <SlideLink back="/">Back</SlideLink>
            <h1>{title}</h1>
        </TitleBarWrapper>
    );
}

export default TitleBar;