import { Container, Content, Search, CardList, Input } from "./styles";
import { Card } from "../Card";
import searchIcon from "../../assets/search-icon.png";

interface CountryProps {
  name: string;
  flag: string;
  population: string;
  region: string;
  capital: string;
}

interface HomepageProps {
  filteredCountries: Array<CountryProps>;
  handleFilterCountry: (value: string) => void;
  handleSelectRegionFilter: (value: string) => void;
  handleSelectCountry: (value: string) => void;
}

export function Homepage({
  filteredCountries,
  handleFilterCountry,
  handleSelectRegionFilter,
  handleSelectCountry,
}: HomepageProps) {
  return (
    <Container>
      <Content>
        <Search>
          <Input>
            <img src={searchIcon} alt="Search Icon" />
            <input
              type="text"
              placeholder="Search for a country..."
              onChange={(event) => handleFilterCountry(event.target.value)}
            />
          </Input>
          <select
            defaultValue={"DEFAULT"}
            onChange={(e) => handleSelectRegionFilter(e.target.value)}
          >
            <option value="default">All</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </Search>
        <CardList>
          {filteredCountries.map((country) => (
            <Card
              key={country.name}
              name={country.name}
              flag={country.flag}
              population={country.population}
              region={country.region}
              capital={country.capital}
              handleSelectCountry={handleSelectCountry}
            />
          ))}
        </CardList>
      </Content>
    </Container>
  );
}
