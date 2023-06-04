import {
  BttnArrowCircle,
  Button,
  ButtonArrow,
  ButtonSectionWrapper,
  ButtonText,
} from "./ToggleButtons.styled";
import arrowIconDown from "../../assets/desktop/icon-arrow-down.svg";
import arrowIconUp from "../../assets/desktop/icon-arrow-up.svg";
import { useState } from "react";

export const ToggleButton = () => {
  const [arrowIcon, setArrowIcon] = useState(arrowIconUp);
  const [content, setContent] = useState("MORE");

  const toggleButton = () => {
    arrowIcon == arrowIconUp
      ? setArrowIcon(arrowIconDown)
      : setArrowIcon(arrowIconUp);
    content == "MORE" ? setContent("LESS") : setContent("MORE");
  };

  return (
    <ButtonSectionWrapper>
      <Button onClick={toggleButton}>
        <ButtonText>{content}</ButtonText>
        <BttnArrowCircle>
          <ButtonArrow src={arrowIcon} />
        </BttnArrowCircle>
      </Button>
    </ButtonSectionWrapper>
  );
};
