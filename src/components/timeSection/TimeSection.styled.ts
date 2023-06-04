import styled from "styled-components";
import { toRem, widthHeight } from "../../globals/mixins";

export const TimeInfoWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const GreetingWrapper = styled.div`
  display: flex;
`;

export const SunMoonIcon = styled.img`
  margin-right: ${toRem(16)};
  ${widthHeight(22.34, 24)}
`;

export const ClockWrapper = styled.div`
  display: flex;
  width: fit-content;
`;

export const TimeZone = styled.p`
  align-self: flex-end;
  margin-left: ${toRem(16)};
  font-family: Inter;
  font-size: ${toRem(40)};
  font-weight: 300;
  line-height: ${toRem(40)};
  letter-spacing: 0px;
`;

export const Greeting = styled.h4``;
export const Time = styled.h1``;
export const CityCountry = styled.h3``;
