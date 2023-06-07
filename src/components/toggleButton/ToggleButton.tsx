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
import {
  TimeContext,
  useTimeContext,
} from "../../globals/contexts/TimeContext";

export const ToggleButton = () => {
  const { displayExtraInfo, setDisplayExtraInfo } = useTimeContext();
  const [arrowIcon, setArrowIcon] = useState<string>(arrowIconUp);
  const [content, setContent] = useState<string>("MORE");


  const handleToggleDisplay = () => {
    setDisplayExtraInfo(!displayExtraInfo);
    arrowIcon == arrowIconUp
      ? setArrowIcon(arrowIconDown)
      : setArrowIcon(arrowIconUp);
    content == "MORE" ? setContent("LESS") : setContent("MORE");
  };

  return (
      <ButtonSectionWrapper>
        <Button onClick={handleToggleDisplay}>
          <ButtonText>{content}</ButtonText>
          <BttnArrowCircle>
            <ButtonArrow src={arrowIcon} />
          </BttnArrowCircle>
        </Button>
      </ButtonSectionWrapper>
  );
};
