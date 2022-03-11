import { Container, Flag, Info } from "./styles";

interface CountryProps {
  name: string;
  flag: string;
  population: string;
  region: string;
  capital: string;
  handleSelectCountry: (value: string) => void;
}

export function Card({
  name,
  flag,
  population,
  region,
  capital,
  handleSelectCountry,
}: CountryProps) {
  return (
    <Container
      onClick={(e) => {
        handleSelectCountry(name);
      }}
    >
      <Flag>
        <img src={flag} alt="" />
      </Flag>
      <Info>
        <h2>{name}</h2>
        <p>Population: {population.toLocaleString()}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
      </Info>
    </Container>
  );
}
