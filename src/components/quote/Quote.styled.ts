import styled from "styled-components";
import { toRem } from "../../globals/mixins";

export const QuoteWrapper = styled.section`
  display: flex;
  width: fit-content;
  color: ${(props) => props.theme.color.quote};
`;

export const TextSection = styled.div`
  width: ${toRem(540)};
  margin-right: ${toRem(16)};
`;

export const QuoteText = styled.p`
  text-align: left;
`;

export const Author = styled.h5`
  margin-top: ${toRem(13)};
  text-align: left;
`;

export const Icon = styled.img`
  width: ${toRem(17)};
  height: ${toRem(17)};
  cursor: pointer;
`;
