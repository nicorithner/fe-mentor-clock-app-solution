import daytimeImage from "../assets/desktop/bg-image-daytime.jpg";
import nightTimeImage from "../assets/desktop/bg-image-nighttime.jpg";

  const black= "hsl(0,0%,0%)";
  const nightRider= "hsl(0,0%,19%)";
  const white= "hsl(0,0%,100%)";
  const blackTranparency= "hsla(0,0%,0%, .75)";
  const whiteTranparency= "hsla(0,0%,100%, .75)";

export const DAYTHEME = {
  backgroundImage: `url(${daytimeImage})`,
  color: {
  quote: `${white}`,
  clockGroup: `${white}`,
  label: `${nightRider}`,
  info: `${black}`,
  }

}
export const NIGHTTHEME = {
  backgroundImage: `url(${nightTimeImage})`,
  color: {
  quote: `${white}`,
  clockGroup: `${white}`,
  bttnLabel: `${nightRider}`,
  label: `${white}`,
  info: `${white}`,
  }
}

