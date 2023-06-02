import styled from "styled-components";
import { toRem } from "../globals/mixins";

type Props = {
  border: string;
  height: number;
  display: string;
};

export const AppWrapper = styled.main`
  background-image: ${(props) => props.theme.backgroundImage};
  display: flex;
  flex-direction: column;
  width: ${toRem(1440)};
  height: ${toRem(800)};
  max-width: ${toRem(1440)};
  max-height: ${toRem(800)};
`;

export const SectionWrapper = styled.section<Props>`
  display: ${(props) => props.display};
  color: ${(props) => props.theme.color.clockGroup};
  border: 2px ${(props) => props.border} solid;
  padding-top: ${toRem(56)};
  padding-left: ${toRem(165)};
  height: ${(props) => toRem(props.height)};
`;
