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
import Clock from "react-live-clock";

export const TimeSection = ({
  greeting,
  cityAndCountry,
  timeZoneCode,
  timeZone,
}: {
  greeting: string;
  cityAndCountry: string;
  timeZoneCode: string;
  timeZone: string;
}) => {
  const icon: string =
    greeting === "GOOD MORNING" || greeting === "GOOD AFTERNOON"
      ? iconSun
      : iconMoon;

  return (
    <TimeInfoWrapper>
      <GreetingWrapper>
        <SunMoonIcon src={icon} />
        <Greeting id="long-greeting">{greeting}, IT’S CURRENTLY</Greeting>
        <Greeting id="short-greeting">{greeting}</Greeting>
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
