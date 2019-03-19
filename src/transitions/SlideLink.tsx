
import { Link } from "react-router-dom";
import React, { FunctionComponent, ReactNode } from "react";
import { slideLeft, slideRight } from ".";

interface SlideLink {
    to?: string;
    back?: string;
    children?: ReactNode;
}

const SlideLink: FunctionComponent<any> = ({ to, back, children, }) => {

    return <Link to={{
        pathname: to || back,
        state: to ? slideLeft : slideRight
    }} >{children}</Link >;
};

export default SlideLink;