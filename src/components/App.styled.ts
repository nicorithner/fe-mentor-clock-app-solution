import styled from "styled-components";
import { toRem } from "../globals/mixins";
import daytimeImage from "../assets/desktop/bg-image-daytime.jpg";
import nightTimeImage from "../assets/desktop/bg-image-nighttime.jpg";

export const AppWrapper = styled.main`
  background-image: ${props => props.theme.backgroundImage};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: ${toRem(1440)};
  max-height: ${toRem(800)};
`;

export const ClockAndButtonSection = styled.section`
  display: flex;
  color: ${props => props.theme.color.clockGroup};
`;
