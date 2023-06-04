import {
  Info,
  InfoColumn,
  InfoSectionWrapper,
  InfoSegment,
  Label,
  VerticalDivider,
} from "./ExtraInfo.styled";

export const ExtraInfo = () => {
  return (
    <InfoSectionWrapper>
      <InfoColumn>
        <InfoSegment>
          <Label>CURRENT TIMEZONE</Label>
          <Info>Europe/London</Info>
        </InfoSegment>

        <InfoSegment>
          <Label>DAY OF THE YEAR</Label>
          <Info>295</Info>
        </InfoSegment>
      </InfoColumn>
      <VerticalDivider />

      <InfoColumn>
        <InfoSegment>
          <Label>DAY OF THE WEEK</Label>
          <Info>5</Info>
        </InfoSegment>

        <InfoSegment>
          <Label>WEEK NUMBER</Label>
          <Info>42</Info>
        </InfoSegment>
      </InfoColumn>
    </InfoSectionWrapper>
  );
};
