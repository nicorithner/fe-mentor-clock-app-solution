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
import { TimeContext } from "../../globals/contexts/TimeContext";

export const ToggleButton = () => {
  const [arrowIcon, setArrowIcon] = useState<string>(arrowIconUp);
  const [content, setContent] = useState<string>("MORE");
  const [displayState, setDisplayState] = useState<boolean>(false);
  console.log(displayState);

  const handleToggleDisplay = () => {
    setDisplayState(!displayState);
    arrowIcon == arrowIconUp
      ? setArrowIcon(arrowIconDown)
      : setArrowIcon(arrowIconUp);
    content == "MORE" ? setContent("LESS") : setContent("MORE");
  };

  return (
    <TimeContext.Provider value={{ displayStateContext: displayState }}>
      <ButtonSectionWrapper>
        <Button onClick={handleToggleDisplay}>
          <ButtonText>{content}</ButtonText>
          <BttnArrowCircle>
            <ButtonArrow src={arrowIcon} />
          </BttnArrowCircle>
        </Button>
      </ButtonSectionWrapper>
    </TimeContext.Provider>
  );
};
