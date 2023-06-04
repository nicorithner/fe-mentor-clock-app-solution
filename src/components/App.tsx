import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { DAYTHEME, NIGHTTHEME } from "../globals/constants";
import { AppWrapper, ExtraInfoWrapper, SectionWrapper } from "./App.styled";
import { ExtraInfo } from "./extraInfo/ExtraInfo";
import { Quote } from "./quote/Quote";
import { TimeSection } from "./timeSection/TimeSection";
import { ToggleButton } from "./toggleButton/ToggleButton";

function App() {
  const [detailDisplay, setDetailDisplay] = useState("flex");
  const [quoteDisplay, setQuoteDisplay] = useState("none");

  return (
    <ThemeProvider theme={NIGHTTHEME}>
      <AppWrapper>
        <SectionWrapper height={400} display={quoteDisplay}>
          <Quote />
        </SectionWrapper>
        <SectionWrapper height={400} display={"flex"}>
          <TimeSection />
          <ToggleButton />
        </SectionWrapper>
        <ExtraInfoWrapper height={400} display={detailDisplay}>
          <ExtraInfo />
        </ExtraInfoWrapper>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
