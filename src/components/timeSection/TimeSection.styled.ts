import styled from "styled-components";
import { toRem, widthHeight } from "../../globals/mixins";

export const TimeInfoWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 400px) {
    width: fit-content;
  }

  @media only screen and (min-width: 400px) and (max-width: 800px) {
    flex-grow: 0.5;
    justify-content: space-evenly;
  }
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

export const Greeting = styled.h4`
  ${(props) => {
    if (props.id === "short-greeting") return `display: none;`;
  }}
  @media only screen and (max-width: 400px) {
    ${(props) => {
      if (props.id === "long-greeting") return `display: none;`;
      if (props.id === "short-greeting") return `display: flex;`;
    }}
    font-size: ${toRem(16)};
    line-height: ${toRem(24)};
    letter-spacing: ${toRem(3)};
  }

  @media only screen and (min-width: 400px) and (max-width: 800px) {
    font-size: ${toRem(18)};
    line-height: ${toRem(28)};
    letter-spacing: ${toRem(3.6)};
  }
`;

export const Time = styled.h1`
  @media only screen and (max-width: 400px) {
    font-size: ${toRem(100)};
    letter-spacing: ${toRem(-2.5)};
  }

  @media only screen and (min-width: 400px) and (max-width: 800px) {
    font-size: ${toRem(175)};
    line-height: ${toRem(175)};
    letter-spacing: ${toRem(-4.4)};
  }
`;

export const TimeZone = styled.p`
  align-self: flex-end;
  margin-left: ${toRem(16)};
  font-family: Inter;
  font-size: ${toRem(40)};
  font-weight: 300;
  line-height: ${toRem(40)};
  letter-spacing: 0px;

  @media only screen and (max-width: 400px) {
    font-size: ${toRem(16)};
    line-height: ${toRem(80)};
  }

  @media only screen and (min-width: 400px) and (max-width: 800px) {
    font-size: ${toRem(32)};
    line-height: ${toRem(76)};
  }
`;

export const CityCountry = styled.h3`
  @media only screen and (max-width: 400px) {
    font-size: ${toRem(16)};
    line-height: ${toRem(28)};
    letter-spacing: ${toRem(3)};
  }

  @media only screen and (min-width: 400px) and (max-width: 800px) {
    font-size: ${toRem(18)};
    line-height: ${toRem(24)};
  }
`;
