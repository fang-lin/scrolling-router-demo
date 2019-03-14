import React from "react";
import styled from "styled-components";
import HowSecure from "./HowSecure";
import Feedback from "./Feedback";
import MyFinances from "./MyFinances";
import MyHomeLoan from "./MyHomeLoan";
import MyPreferences from "./MyPreferences";
import ReaHomeLoan from "./ReaHomeLoan";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const MainBlock = styled("div")`
    max-width: 1000px;
    margin: 0 auto;
`;

const Main = (props: any) => {
    return (
        <MainBlock>
            <Header {...props} />
            <HowSecure {...props} />
            <Feedback  {...props} />
            <MyFinances  {...props} />
            <MyHomeLoan  {...props} />
            <MyPreferences {...props} />
            <ReaHomeLoan  {...props} />
            <Footer {...props} />
        </MainBlock>
    );
}

export default Main;