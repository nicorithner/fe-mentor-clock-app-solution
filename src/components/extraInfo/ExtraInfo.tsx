import {
  Info,
  InfoColumn,
  InfoSectionWrapper,
  InfoSegment,
  Label,
  VerticalDivider,
} from "./ExtraInfo.styled";

export const ExtraInfo = ({
  currentTimeZone,
  dayOfYear,
  dayOfWeek,
  weekNumber,
}: {
  currentTimeZone: string;
  dayOfYear: number;
  dayOfWeek: number;
  weekNumber: number;
}) => {
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
