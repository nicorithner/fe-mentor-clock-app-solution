import {
  Author,
  Icon,
  QuoteText,
  QuoteWrapper,
  TextSection,
} from "./Quote.styled";
import iconDesktop from "../../assets/desktop/icon-refresh.svg";
import { QuoteAPI } from "../../apis/quoteAPI";
import { useEffect, useState } from "react";

export const Quote = () => {
  const [quote, setQuote] = useState<string>("nothing here yet");
  const [author, setAuthor] = useState<string>("No author yet");

  function getQuote() {
    QuoteAPI.get().then((data) => {
      setQuote(data.quote);
      setAuthor(data.author);
    });
  }

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <QuoteWrapper>
      <TextSection>
        <QuoteText>{quote}</QuoteText>
        <Author>{author}</Author>
      </TextSection>
        <Icon src={iconDesktop} onClick={getQuote} alt="Spinning arrows refresh button" />
    </QuoteWrapper>
  );
};
