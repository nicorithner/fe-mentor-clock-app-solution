import styled from "styled-components";
import { toRem, widthHeight } from "../../globals/mixins";

export const ButtonSectionWrapper = styled.section`
  display: flex;
`;

export const Button = styled.button`
  display: flex;
  align-self: flex-end;
  justify-content: center;
  ${widthHeight(146, 56)}
  border-radius: 28px;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
  padding-right: 8px;
  padding-bottom: 8px;
  padding-left: 21px;
  cursor: pointer;
`;

export const BttnArrowCircle = styled.div`
  ${widthHeight(40, 40)}
  background-color: ${(props) => props.theme.color.arrowCircle};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${Button}:hover & {
    background-color: ${(props) => props.theme.color.arrowCircleHover};
  }
`;
export const ButtonArrow = styled.img`
  width: 14px;
`;

export const ButtonText = styled.p`
  color: ${(props) => props.theme.color.bttnLabel};
  font-family: Inter;
  font-size: ${toRem(16)};
  font-weight: 700;
  line-height: 145%;
  letter-spacing: ${toRem(5)};
`;
