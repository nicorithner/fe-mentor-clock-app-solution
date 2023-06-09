import { useEffect, useState } from "react";
import { DisplayInfoContext } from "../globals/contexts/DisplayInfoContext";

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
  const [displayExtraInfo, setDisplayExtraInfo] = useState(false);
  const value = { displayExtraInfo, setDisplayExtraInfo };

  const [detailDisplay, setDetailDisplay] = useState<string>("none");
  const [quoteDisplay, setQuoteDisplay] = useState<string>("flex");
  const [greeting, setGreeting] = useState<string>("GOOD NIGHT");
  const [currentTimeZone, setCurrentTimeZone] =
    useState<string>("Europe/London");
  const [dayOfYear, setDayOfYear] = useState<number>(295);
  const [dayOfWeek, setDayOfWeek] = useState<number>(5);
  const [weekNumber, setWeekNumber] = useState<number>(42);
  const [cityAndCountry, setCityAndCountry] = useState<string>("CHICAGO, USA");
  const [timeZoneCode, setTimeZoneCode] = useState<string>("MST");
  const [timeZone, setTimeZone] = useState<string>("America/Chicago");

  useEffect(() => {
    WorldTimeAPI.get().then((data) => {
      setGreeting(data.greeting);
      setCurrentTimeZone(data.timeZone);
      setDayOfYear(data.dayOfYear);
      setDayOfWeek(data.dayOfWeek);
      setWeekNumber(data.weekNumber);
      setCityAndCountry(data.cityAndCountry);
      setTimeZoneCode(data.timeZoneCode);
      setGreeting(data.greeting);
      setTimeZone(data.timeZone);
    });

    switch (displayExtraInfo) {
      case true:
        setDetailDisplay("flex");
        setQuoteDisplay("none");
        break;
      default:
        setDetailDisplay("none");
        setQuoteDisplay("flex");
        break;
    }
  });

  function assignTheme(greeting: string) {
    return greeting === "GOOD MORNING" || greeting === "GOOD AFTERNOON"
      ? DAYTHEME
      : NIGHTTHEME;
  }

  return (
    <ThemeProvider theme={assignTheme(greeting)}>
      <DisplayInfoContext.Provider value={value}>
        <AppWrapper>
          <AppOverlay />
          <SectionWrapper height={400} display={quoteDisplay}>
            <Quote />
          </SectionWrapper>
          <SectionWrapper height={400} display={"flex"}>
            <TimeSection
              greeting={greeting}
              cityAndCountry={cityAndCountry}
              timeZoneCode={timeZoneCode}
              timeZone={timeZone}
            />
            <ToggleButton />
          </SectionWrapper>
          <ExtraInfoWrapper height={400} display={detailDisplay}>
            <ExtraInfo
              currentTimeZone={currentTimeZone}
              dayOfYear={dayOfYear}
              dayOfWeek={dayOfWeek}
              weekNumber={weekNumber}
            />
          </ExtraInfoWrapper>
        </AppWrapper>
      </DisplayInfoContext.Provider>
    </ThemeProvider>
  );
}

export default App;
