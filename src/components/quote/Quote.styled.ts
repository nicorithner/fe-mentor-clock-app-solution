import styled from "styled-components";
import { toRem, widthHeight } from "../../globals/mixins";

export const QuoteWrapper = styled.section`
  display: flex;
  width: fit-content;
  color: ${(props) => props.theme.color.quote};

  @media only screen and (max-width: 400px) {
    width: ${toRem(324)};
  }
`;

export const TextSection = styled.div`
  width: ${toRem(540)};
  margin-right: ${toRem(16)};

  @media only screen and (max-width: 400px) {
    width: fit-content;
  }
`;

export const QuoteText = styled.p`
  text-align: left;

  @media only screen and (max-width: 400px) {
    width: ${toRem(290)};
    font-size: ${toRem(12)};
    line-height: ${toRem(22)};
  }
`;

export const Author = styled.h5`
  margin-top: ${toRem(13)};
  text-align: left;

  @media only screen and (max-width: 400px) {
    margin-top: ${toRem(8)};
    font-size: ${toRem(12)};
  }
`;

export const Icon = styled.img`
  cursor: pointer;
  ${widthHeight(17, 17)}

  &:active {
    transform: rotate(270deg);
  }
`;
