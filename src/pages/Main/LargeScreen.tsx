import React from 'react';
import HowSecure from "../HowSecure/LargeScreen";
import Feedback from "../Feedback/LargeScreen";
import MyFinances from "../MyFinances/LargeScreen";
import MyHomeLoan from "../MyHomeLoan/LargeScreen";
import MyPreferences from "../MyPreferences/LargeScreen";
import ReaHomeLoan from "../ReaHomeLoan/LargeScreen";

const LargeScreen = () => {
    return (
        <div>
            <HowSecure />
            <Feedback />
            <MyFinances />
            <MyHomeLoan />
            <MyPreferences />
            <ReaHomeLoan />
        </div>
    );
}

export default LargeScreen;