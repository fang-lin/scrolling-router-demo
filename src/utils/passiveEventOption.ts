

import detectPassiveEvents from "detect-passive-events";
export const passiveEventOptions = detectPassiveEvents.hasSupport ? { passive: true } : false;