import {
  Info,
  InfoColumn,
  InfoSectionWrapper,
  InfoSegment,
  Label,
  VerticalDivider,
} from "./ExtraInfo.styled";
import { WorldTimeAPI } from "../../apis/worldTimeAPI";
import { useEffect, useState } from "react";

export const ExtraInfo = () => {
  const [currentTimeZone, setCurrentTimeZone] = useState<string>("Europe/London");
  const [dayOfYear, setDayOfYear] = useState<number>(295);
  const [dayOfWeek, setDayOfWeek] = useState<number>(5);
  const [weekNumber, setWeekNumber] = useState<number>(42);

  useEffect(() => {
    WorldTimeAPI.get().then((data) => {
      setCurrentTimeZone(data.timeZone);
      setDayOfYear(data.dayOfYear);
      setDayOfWeek(data.dayOfWeek);
      setWeekNumber(data.weekNumber);
    });
  });
  return (
    <InfoSectionWrapper>
      <InfoColumn>
        <InfoSegment>
          <Label>CURRENT TIMEZONE</Label>
          <Info>{currentTimeZone}</Info>
        </InfoSegment>

        <InfoSegment>
          <Label>DAY OF THE YEAR</Label>
          <Info>{dayOfYear}</Info>
        </InfoSegment>
      </InfoColumn>
      <VerticalDivider />

      <InfoColumn>
        <InfoSegment>
          <Label>DAY OF THE WEEK</Label>
          <Info>{dayOfWeek}</Info>
        </InfoSegment>

        <InfoSegment>
          <Label>WEEK NUMBER</Label>
          <Info>{weekNumber}</Info>
        </InfoSegment>
      </InfoColumn>
    </InfoSectionWrapper>
  );
};
