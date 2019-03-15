import RootLargeScreenMain from "./LargeScreen/Main";
import SmallScreenMain from "./SmallScreen/Main";
import SmallScreenHowSecure from "./SmallScreen/HowSecure";
import SmallScreenFeedback from "./SmallScreen/Feedback";
import SmallScreenMyFinances from "./SmallScreen/MyFinances";
import SmallScreenMyHomeLoan from "./SmallScreen/MyHomeLoan";
import SmallScreenMyPreferences from "./SmallScreen/MyPreferences";
import SmallScreenReaHomeLoan from "./SmallScreen/ReaHomeLoan";
import withScrollRouter from "./high-order/withScrollRouter";
import flowRight from "lodash/flowRight";

export const LargeScreenMain = flowRight([withScrollRouter])(RootLargeScreenMain);

export {
    SmallScreenMain,
    SmallScreenHowSecure,
    SmallScreenFeedback,
    SmallScreenMyFinances,
    SmallScreenMyHomeLoan,
    SmallScreenMyPreferences,
    SmallScreenReaHomeLoan,
};
