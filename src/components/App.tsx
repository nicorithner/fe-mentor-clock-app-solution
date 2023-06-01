import { ThemeProvider } from "styled-components";
import { DAYTHEME, NIGHTTHEME } from "../globals/constants";
import { AppWrapper, ClockAndButtonSection } from "./App.styled";
import { ExtraInfo } from "./extraInfo/ExtraInfo";
import { Quote } from "./quote/Quote";
import { TimeSection } from "./timeSection/TimeSection";
import { ToggleButton } from "./toggleButton/ToggleButton";

function App() {
  return (
    <ThemeProvider theme={NIGHTTHEME}>
      <AppWrapper>
        <Quote />
        <ClockAndButtonSection>
          <TimeSection />
          <ToggleButton />
        </ClockAndButtonSection>
        <ExtraInfo />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
