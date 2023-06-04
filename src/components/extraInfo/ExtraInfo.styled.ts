import styled from "styled-components";
import { widthHeight } from "../../globals/mixins";

const BaseSegment = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 4;
`;
export const InfoSectionWrapper = styled(BaseSegment)`
  width: 100%;
  align-items: center;
`;

export const InfoColumn = styled(BaseSegment)`
  flex-direction: column;
  flex-basis: 40%;
  height: 100%;
`;

export const InfoSegment = styled(BaseSegment)`
  ${widthHeight(423, 105)}
  flex-direction: column;
  align-items: flex-start;
`;

export const VerticalDivider = styled.div`
  border-left: 1px solid ${(props) => props.theme.color.verticalDivider};
  height: 252px;
  margin-right: 90px;
  margin-left: 90px;
`;
export const Label = styled.h6`
  color: ${(props) => props.theme.color.label};
`;
export const Info = styled.h2`
  color: ${(props) => props.theme.color.info};
`;
