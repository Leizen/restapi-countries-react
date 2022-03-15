import {
  Container,
  Content,
  BackButton,
  Header,
  About,
  Flag,
  Info,
  InfoHeader,
  InfoDescription,
  LeftDescritpion,
  RightDescription,
  FooterDescription,
  Span,
  SpanFooter,
  BorderList,
} from "./styles";
import leftArrowIcon from "../../assets/left-arrow.png";
import { useEffect, useState } from "react";
import { border } from "../../services/api";

interface Currencies {
  name: string;
}

interface Border {
  name: string;
}

interface Country {
  name: {
    common: string;
    official: string;
  };
  flags: {
    png: string;
  };
  population: string;
  region: string;
  subregion: string;
  capital: string;
  tld: Array<String>;
  currencies: {
    [key: string]: Currencies;
  };
  languages: {
    [key: string]: string;
  };
  borders: Array<Border>;
}

interface CountryInfoProps {
  countryInfo: Country;
  handleSetHomepage: () => void;
}

export function Country({ countryInfo, handleSetHomepage }: CountryInfoProps) {
  const [borders, setBorders] = useState<Border[]>([]);
  const currencie = Object.entries(countryInfo.currencies)[0];
  const { name } = currencie[1];
  const languagesList = Object.values(countryInfo.languages);

  useEffect(() => {
    setBorders(countryInfo.borders);
  }, []);

  console.log(Array.isArray(borders));

  return (
    <Container>
      <Content>
        <Header>
          <BackButton
            value={"homepage"}
            type="submit"
            onClick={(e) => handleSetHomepage()}
          >
            <img src={leftArrowIcon} alt="" />
            Back
          </BackButton>
        </Header>
        <About>
          <Flag>
            <img src={countryInfo.flags.png} alt="" />
          </Flag>
          <Info>
            <InfoHeader>
              <h1>{countryInfo.name.common}</h1>
            </InfoHeader>
            <InfoDescription>
              <LeftDescritpion>
                <Span>
                  <span>Native Name: {countryInfo.name.official}</span>
                </Span>
                <Span>
                  <span>
                    Population: {countryInfo.population.toLocaleString()}
                  </span>
                </Span>
                <Span>
                  <span>Region: {countryInfo.region}</span>
                </Span>
                <Span>
                  <span>Sub Region: {countryInfo.subregion}</span>
                </Span>
                <Span>
                  <span>Capital: {countryInfo.capital}</span>
                </Span>
              </LeftDescritpion>
              <RightDescription>
                <Span>
                  <span>Top Level Domain: </span>
                  {countryInfo.tld.map((value) => (
                    <p>{value}</p>
                  ))}
                </Span>
                <Span>
                  <span>Currencies: </span>
                  <p>{name}</p>
                </Span>
                <Span>
                  <span>Languages: </span>
                  {languagesList.map((value) => (
                    <p>{value}</p>
                  ))}
                </Span>
              </RightDescription>
            </InfoDescription>
            <FooterDescription>
              <span>Border Countries:</span>
              <BorderList>
                {Array.isArray(borders)
                  ? borders.map((value) => (
                      <SpanFooter>
                        <p>{value}</p>
                      </SpanFooter>
                    ))
                  : null}
              </BorderList>
            </FooterDescription>
          </Info>
        </About>
      </Content>
    </Container>
  );
}
