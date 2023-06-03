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

export const TimeSection = () => {
  return (
    <TimeInfoWrapper>
      <GreetingWrapper>
        <SunMoonIcon src={iconMoon}/>
        <Greeting>GOOD MORNING, IT’S CURRENTLY</Greeting>
      </GreetingWrapper>
      <ClockWrapper>
        <Time>23:14</Time>
        <TimeZone>BST</TimeZone>
      </ClockWrapper>
      <CityCountry>IN LONDON, UK</CityCountry>
    </TimeInfoWrapper>
  );
};
