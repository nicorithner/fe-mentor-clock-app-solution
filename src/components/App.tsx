import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { DAYTHEME, NIGHTTHEME } from "../globals/constants";
import { AppWrapper, SectionWrapper } from "./App.styled";
import { ExtraInfo } from "./extraInfo/ExtraInfo";
import { Quote } from "./quote/Quote";
import { TimeSection } from "./timeSection/TimeSection";
import { ToggleButton } from "./toggleButton/ToggleButton";

function App() {
  const [detailDisplay, setDetailDisplay] = useState("none");
  const [quoteDisplay, setQuoteDisplay] = useState("flex");

  return (
    <ThemeProvider theme={NIGHTTHEME}>
      <AppWrapper>
        <SectionWrapper border={"red"} height={400} display={quoteDisplay}>
          <Quote />
        </SectionWrapper>
        <SectionWrapper border={"lime"} height={400} display={"flex"}>
          <TimeSection />
          <ToggleButton />
        </SectionWrapper>
        <SectionWrapper border={"hotpink"} height={400} display={detailDisplay}>
          <ExtraInfo />
        </SectionWrapper>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
