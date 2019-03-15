const matchMediaSupported = () => 'matchMedia' in window;
const matches = (mediaQuery: string): boolean =>
  matchMediaSupported() && window.matchMedia(mediaQuery).matches;

interface ILayout {
  [key: string]: string;
}

// see PLW: /src/js/client/device-capability/screenType.js
const LAYOUT_DEFINITION: ILayout = {
  S: "(max-width:768px)",
  L: "(min-width:769px)",
};

const getScreenSize = (): string => {
  let matched: string = "Unkonwn";
  for (let item in LAYOUT_DEFINITION) {
    if (LAYOUT_DEFINITION.hasOwnProperty(item)) {
      if (matches(LAYOUT_DEFINITION[item])) {
        matched = item;
        break;
      }
    }
  }
  return matched;
};

export default getScreenSize;