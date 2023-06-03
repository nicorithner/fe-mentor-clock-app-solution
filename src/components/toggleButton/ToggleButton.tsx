import {
  Button,
  ButtonArrow,
  ButtonSectionWrapper,
  ButtonWrapper,
} from "./ToggleButtons.styled";
import arrowIconDown from "../../assets/desktop/icon-arrow-down.svg";
export const ToggleButton = () => {
  return (
    <ButtonSectionWrapper>
      <ButtonWrapper>
        <Button>
          MORE
          <ButtonArrow src={arrowIconDown} />
        </Button>
      </ButtonWrapper>
    </ButtonSectionWrapper>
  );
};
