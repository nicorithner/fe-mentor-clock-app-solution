import {
  Author,
  Icon,
  QuoteText,
  QuoteWrapper,
  TextSection,
} from "./Quote.styled";
import iconDesktop from '../../assets/desktop/icon-refresh.svg';

export const Quote = () => {
  return (
    <QuoteWrapper>
      <TextSection>
        <QuoteText>
          “The science of operations, as derived from mathematics more
          especially, is a science of itself, and has its own abstract truth and
          value.”
        </QuoteText>
        <Author>Ada Lovelace</Author>
      </TextSection>
      <Icon src={iconDesktop} alt="Spinning arrows refresh button" />
    </QuoteWrapper>
  );
};
