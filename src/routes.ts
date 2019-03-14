
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
        component: {
            small: SmallScreenHowSecure,
            large: LargeScreenMain,
        }
    },
    {
        path: "/feedback",
        component: {
            small: SmallScreenFeedback,
            large: LargeScreenMain,
        }
    },
    {
        path: "/my-finances",
        component: {
            small: SmallScreenMyFinances,
            large: LargeScreenMain,
        }
    },
    {
        path: "/my-home-loan",
        component: {
            small: SmallScreenMyHomeLoan,
            large: LargeScreenMain,
        }
    },
    {
        path: "/my-preferences",
        component: {
            small: SmallScreenMyPreferences,
            large: LargeScreenMain,
        }
    },
    {
        path: "/rea-home-loan",
        component: {
            small: SmallScreenReaHomeLoan,
            large: LargeScreenMain,
        }
    }
];

// export const routesMap = new Map(routes.map<[string, string]>(({ path, name }) => [path, name]));
export default routes;