
import { Component } from "react";
import {
    LargeScreenMain,
    SmallScreenHowSecure,
    SmallScreenFeedback,
    SmallScreenMyFinances,
    SmallScreenMyHomeLoan,
    SmallScreenMyPreferences,
    SmallScreenReaHomeLoan,
} from "./pages/";

const routes = [
    {
        path: "/how-secure",
        component: SmallScreenHowSecure
    },
    {
        path: "/feedback",
        component: SmallScreenFeedback
    },
    {
        path: "/my-finances",
        component: SmallScreenMyFinances
    },
    {
        path: "/my-home-loan",
        component: SmallScreenMyHomeLoan
    },
    {
        path: "/my-preferences",
        component: SmallScreenMyPreferences
    },
    {
        path: "/rea-home-loan",
        component: SmallScreenReaHomeLoan
    }
];

export default routes;