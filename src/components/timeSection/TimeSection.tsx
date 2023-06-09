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
  const icon: string = greeting === "GOOD MORNING" ? iconSun : iconMoon;

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
