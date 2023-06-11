import styled from "styled-components";
import { toRem, widthHeight } from "../globals/mixins";

type Props = {
  height: number;
  display: string;
};

export const AppWrapper = styled.main`
  background-image: ${(props) => props.theme.backgroundImage};
  display: flex;
  position: relative;
  justify-content: space-between;
  flex-direction: column;
  ${widthHeight(1440, 800)}
  max-width: ${toRem(1440)};
  max-height: ${toRem(800)};

  @media only screen and (max-width: 400px) {
    background-image: ${(props) => props.theme.backgroundImageMobile};
    max-width: ${toRem(375)};
    height: 100vh;
  }

  @media only screen and (min-width: 400px) and (max-width: 800px) {
    background-image: ${(props) => props.theme.backgroundImageTablet};
    ${widthHeight(768, 1024)};
    max-width: ${toRem(768)};
    max-height: ${toRem(1024)};
  }
`;

export const AppOverlay = styled.div`
  position: absolute;
  width: ${toRem(1440)};
  height: ${toRem(800)};
  background-color: ${(props) => props.theme.overlay};
  top: 0;
  left: 0;
  z-index: 2;

  @media only screen and (max-width: 400px) {
    max-width: ${toRem(375)};
  }

  @media only screen and (min-width: 400px) and (max-width: 800px) {
    ${widthHeight(768, 1024)};
    max-width: ${toRem(768)};
    max-height: ${toRem(1024)};
  }
`;

export const SectionWrapper = styled.section<Props>`
  display: ${(props) => props.display};
  justify-content: space-between;
  color: ${(props) => props.theme.color.clockGroup};
  padding-top: ${toRem(56)};
  padding-bottom: ${toRem(90)};
  padding-left: ${toRem(165)};
  padding-right: ${toRem(165)};
  min-height: ${(props) => toRem(props.height)};
  z-index: 3;

  @media only screen and (max-width: 400px) {
    flex-direction: column;
    padding: ${toRem(32)} ${toRem(24)};
    ${(props) => {
      if (props.id === "quote") return `min-height: ${toRem(250)};`;
    }}
  }

  @media only screen and (min-width: 400px) and (max-width: 800px) {
    flex-direction: column;
    padding: ${toRem(64)};
    flex-grow: 2;
    ${(props) => {
      if (props.id === "quote") return `flex-grow: 1;`;
    }}
    ${(props) => {
      if (props.id === "time-section") return `justify-content: space-evenly;`;
    }}
  }
`;

export const ExtraInfoWrapper = styled.section<Props>`
  background: ${(props) => props.theme.background};
  height: ${(props) => toRem(props.height)};
  display: ${(props) => props.display};

  justify-content: space-between;
  color: ${(props) => props.theme.color.clockGroup};
  padding-top: ${toRem(56)};
  padding-bottom: ${toRem(90)};
  padding-left: ${toRem(165)};
  padding-right: ${toRem(165)};
  z-index: 3;

  @media only screen and (max-width: 400px) {
    padding: ${toRem(48)} ${toRem(16)};
  }
`;
