import { createGlobalStyle } from "styled-components";
import { COLOR } from "./constants";
import { toRem } from "./mixins";

const GlobalStyles = createGlobalStyle`
/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}

/*
  2. Remove default margin
*/
* {
  margin: 0;
}

/*
  3. Allow percentage-based heights in the application
*/
html, body {
  height: 100%;
}

/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}

/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}

/*
  10. Typographic
*/
h1 {
  font-family: Inter Bold;
  font-size: ${toRem(200)};
  font-weight: 700;
  line-height: ${toRem(200)};
  letter-spacing: ${toRem(-5)};
  text-align: left;
}

h2 {
  font-family: Inter Bold;
  font-size: ${toRem(56)};
  font-weight: 700;
  line-height: ${toRem(68)};
  letter-spacing: 0px;
  text-align: left;
  color: ${COLOR.nightRider};
}

h3 {
  font-family: Inter Bold;
  font-size: ${toRem(24)};
  font-weight: 700;
  line-height: ${toRem(28)};
  letter-spacing: ${toRem(5)};
  text-align: left;
  color: ${COLOR.black};
}

h4 {
  font-family: Inter;
  font-size: ${toRem(20)};
  font-weight: 400;
  line-height: ${toRem(28)};
  letter-spacing: ${toRem(4)};
  text-align: left;
  color: ${COLOR.black};
}

h5 {
  font-family: Inter Bold;
  font-size: ${toRem(18)};
  font-weight: 700;
  line-height: ${toRem(28)};
  letter-spacing: 0px;
  text-align: left;
  color: ${COLOR.black};
}

h6 {
  font-family: Inter;
  font-size: ${15};
  font-weight: 400;
  line-height: ${28};
  letter-spacing: ${toRem(3)};
  text-align: left;
  color: ${COLOR.nightRider};
}


`;

export default GlobalStyles;
