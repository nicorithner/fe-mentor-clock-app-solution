import styled from "styled-components";
import { toRem, widthHeight } from "../globals/mixins";

type Props = {
  height: number;
  display: string;
};

export const AppWrapper = styled.main`
  background-image: ${(props) => props.theme.backgroundImage};
  display: flex;
  flex-direction: column;
  ${widthHeight(1400, 800)}
  max-width: ${toRem(1440)};
  max-height: ${toRem(800)};
`;

export const SectionWrapper = styled.section<Props>`
  display: ${(props) => props.display};
  justify-content: space-between;
  color: ${(props) => props.theme.color.clockGroup};
  padding-top: ${toRem(56)};
  padding-bottom: ${toRem(90)}
  padding-left: ${toRem(165)};
  padding-right: ${toRem(165)};
  height: ${(props) => toRem(props.height)};
`;

export const ExtraInfoWrapper = styled.section<Props>`
  background: ${(props) => props.theme.background};
  height: ${(props) => toRem(props.height)};
  display: ${(props) => props.display};

  justify-content: space-between;
  color: ${(props) => props.theme.color.clockGroup};
  padding-top: ${toRem(56)};
  padding-bottom: ${toRem(90)}
  padding-left: ${toRem(165)};
  padding-right: ${toRem(165)};

`;
