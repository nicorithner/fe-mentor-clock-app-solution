import React from "react";
import { AppWrapper, ClockAndButtonSection } from "./App.styled";
import { ExtraInfo } from "./extraInfo/ExtraInfo";
import logo from "./logo.svg";
import { Quote } from "./quote/Quote";
import { TimeSection } from "./timeSection/TimeSection";
import { ToggleButton } from "./toggleButton/ToggleButton";

function App() {
  return (
    <AppWrapper time="night">
      <Quote />
      <ClockAndButtonSection>
        <TimeSection />
        <ToggleButton />
      </ClockAndButtonSection>
      <ExtraInfo />
    </AppWrapper>
  );
}

export default App;
