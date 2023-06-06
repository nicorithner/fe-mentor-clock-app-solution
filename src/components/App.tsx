import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { DAYTHEME, NIGHTTHEME } from "../globals/constants";
import {
  AppOverlay,
  AppWrapper,
  ExtraInfoWrapper,
  SectionWrapper,
} from "./App.styled";
import { ExtraInfo } from "./extraInfo/ExtraInfo";
import { Quote } from "./quote/Quote";
import { TimeSection } from "./timeSection/TimeSection";
import { ToggleButton } from "./toggleButton/ToggleButton";
import { WorldTimeAPI } from "../apis/worldTimeAPI";

function App() {
  const [detailDisplay, setDetailDisplay] = useState<string>("flex");
  const [quoteDisplay, setQuoteDisplay] = useState<string>("none");
  const [greeting, setGreeting] = useState<string>("GOOD NIGHT");

  useEffect(() => {
    WorldTimeAPI.get().then((data) => {
      setGreeting(data.greeting);
    });
  });

  function assignTheme(greeting: string) {
    return greeting === "GOOD MORNING" || greeting === "GOOD AFTERNOON"
      ? DAYTHEME
      : NIGHTTHEME;
  }

  return (
    <ThemeProvider theme={assignTheme(greeting)}>
      <AppWrapper>
        <AppOverlay />
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
