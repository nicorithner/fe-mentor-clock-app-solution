import {
  CityCountry,
  ClockWrapper,
  Greeting,
  GreetingWrapper,
  SunMoonIcon,
  Time,
  TimeInfoWrapper,
  TimeZone,
} from "./TimeSection.styled";
import iconMoon from "../../assets/desktop/icon-moon.svg";
import iconSun from "../../assets/desktop/icon-sun.svg";
import { WorldTimeAPI } from "../../apis/worldTimeAPI";
import Clock from "react-live-clock";
import { useEffect, useState } from "react";

export const TimeSection = () => {
  const [cityAndCountry, setCityAndCountry] = useState<string>("CHICAGO, USA");
  const [timeZoneCode, setTimeZoneCode] = useState("MST");
  const [timeZone, setTimeZone] = useState("America/Chicago");
  const [greeting, setGreeting] = useState("GOOD MORNING");
  const icon: string = greeting == "GOOD MORNING" ? iconSun : iconMoon;

  useEffect(() => {
    WorldTimeAPI.get().then((data) => {
      setCityAndCountry(data.cityAndCountry);
      setTimeZoneCode(data.timeZoneCode);
      setGreeting(data.greeting);
      setTimeZone(data.timeZone);
    });
  }, []);

  return (
    <TimeInfoWrapper>
      <GreetingWrapper>
        <SunMoonIcon src={icon} />
        <Greeting>{greeting}, IT’S CURRENTLY</Greeting>
      </GreetingWrapper>
      <ClockWrapper>
        <Time>
          <Clock format={"HH:mm"} ticking={true} timezone={timeZone} />
        </Time>
        <TimeZone>{timeZoneCode}</TimeZone>
      </ClockWrapper>
      <CityCountry>{cityAndCountry}</CityCountry>
    </TimeInfoWrapper>
  );
};
