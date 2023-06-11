import styled from "styled-components";
import { toRem, widthHeight } from "../../globals/mixins";

const BaseSegment = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 4;
  @media only screen and (max-width: 400px) {
    max-width: ${toRem(323)};
    flex-direction: column;
  }
`;
export const InfoSectionWrapper = styled(BaseSegment)`
  width: 100%;
  align-items: center;
`;

export const InfoColumn = styled(BaseSegment)`
  flex-direction: column;
  flex-basis: 45%;
  height: 100%;
`;

export const InfoSegment = styled(BaseSegment)`
  ${widthHeight(423, 105)}
  flex-direction: column;
  align-items: flex-start;

  @media only screen and (max-width: 400px) {
    flex-direction: row;
    max-width: ${toRem(323)};
    height: auto;
  }
`;

export const VerticalDivider = styled.div`
  border-left: 1px solid ${(props) => props.theme.color.verticalDivider};
  height: 252px;
  margin-right: 90px;
  margin-left: 90px;
  @media only screen and (max-width: 400px) {
    display: none;
  }
`;
export const Label = styled.h6`
  color: ${(props) => props.theme.color.label};

  @media only screen and (max-width: 400px) {
    font-size: ${toRem(10)};
    line-height: ${toRem(28)};
    letter-spacing: ${toRem(2)};
  }
`;
export const Info = styled.h2`
  color: ${(props) => props.theme.color.info};
  @media only screen and (max-width: 400px) {
    font-size: ${toRem(20)};
    line-height: ${toRem(24)};
  }
`;
