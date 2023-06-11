import daytimeImage from "../assets/desktop/bg-image-daytime.jpg";
import daytimeImageMobile from "../assets/mobile/bg-image-daytime.jpg";
import daytimeImageTablet from "../assets/tablet/bg-image-daytime.jpg";
import nightTimeImage from "../assets/desktop/bg-image-nighttime.jpg";
import nightTimeImageMobile from "../assets/mobile/bg-image-nighttime.jpg";
import nightTimeImageTablet from "../assets/tablet/bg-image-nighttime.jpg";

const black = "hsl(0,0%,0%)";
const nightRider = "hsl(0,0%,19%)";
const white = "hsl(0,0%,100%)";
const gray = "hsla(0, 0%, 40%, 1)";
const darkGray = "hsla(0, 0%, 19%, 1)";

const blackTranparency = "hsla(0,0%,0%, .5)";
const blackHighTranparency = "hsla(0,0%,0%, .5)";
const whiteTranparency = "hsla(0,0%,100%, .5)";
const whiteHighTranparency = "hsla(0,0%,100%, .5)";

export const DAYTHEME = {
  backgroundImage: `url(${daytimeImage})`,
  backgroundImageMobile: `url(${daytimeImageMobile})`,
  backgroundImageTablet: `url(${daytimeImageTablet})`,
  background: `${whiteTranparency}`,
  overlay: `${blackHighTranparency}`,
  color: {
    quote: `${white}`,
    clockGroup: `${white}`,
    bttnLabel: `${gray}`,
    bttnLabelHover: `${nightRider}`,
    label: `${nightRider}`,
    info: `${black}`,
    arrowCircle: `${nightRider}`,
    arrowCircleHover: `${gray}`,
    verticalDivider: `${darkGray}`,
  },
};
export const NIGHTTHEME = {
  backgroundImage: `url(${nightTimeImage})`,
  backgroundImageMobile: `url(${nightTimeImageMobile})`,
  backgroundImageTablet: `url(${nightTimeImageTablet})`,
  background: `${blackTranparency}`,
  overlay: `${blackHighTranparency}`,
  color: {
    quote: `${white}`,
    clockGroup: `${white}`,
    bttnLabel: `${gray}`,
    bttnLabelHover: `${nightRider}`,
    label: `${white}`,
    info: `${white}`,
    arrowCircle: `${nightRider}`,
    arrowCircleHover: `${gray}`,
    verticalDivider: `${gray}`,
  },
};
