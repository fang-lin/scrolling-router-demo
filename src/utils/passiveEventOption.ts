

import detectPassiveEvents from "detect-passive-events";
export const scrollEventOptions = detectPassiveEvents.hasSupport ? { passive: true } : false;