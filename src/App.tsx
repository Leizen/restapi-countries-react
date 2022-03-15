import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Country } from "./components/Country";
import { Header } from "./components/Header";
import { Homepage } from "./components/Homepage";
import { api, nameApi } from "./services/api";
import { GlobalStyle } from "./styles/global";
import light from "./themes/light";
import dark from "./themes/dark";

interface CountryProps {
  name: string;
  flag: string;
  flags: string;
  population: string;
  region: string;
  capital: string;
}

interface Currencies {
  name: string;
}

interface Border {
  name: string;
}

interface CountryInfoProps {
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

function App() {
  const [theme, setTheme] = useState(light);
  const [countries, setCountries] = useState<CountryProps[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<CountryProps[]>(
    []
  );
  const [page, setPage] = useState("homepage");
  const [countryInfo, setCountryInfo] = useState<CountryInfoProps>(
    {} as CountryInfoProps
  );

  useEffect(() => {
    async function countriesFetch() {
      const request = await api.get("all");
      setCountries(request.data);
      setFilteredCountries(request.data);
    }
    countriesFetch();
  }, []);

  function handleSetTheme() {
    setTheme(theme.name === "light" ? dark : light);
  }

  function handleSetHomepage() {
    setPage("homepage");
  }

  function handleFilterCountry(value: string) {
    const filteredCountry = countries.filter((country) =>
      country.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCountries(filteredCountry);
  }

  function handleSelectRegionFilter(value: string) {
    const filteredRegion = countries.filter((region) =>
      region.region.toLowerCase().includes(value.toLowerCase())
    );
    {
      value === "default"
        ? setFilteredCountries(countries)
        : setFilteredCountries(filteredRegion);
    }
  }

  function handleSelectCountry(value: string) {
    async function codeFetch() {
      const request = await nameApi.get(value);
      const [info] = request.data;
      setCountryInfo(info);
      setPage(value);
    }
    codeFetch();
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header handleSetTheme={handleSetTheme} />
        {page === "homepage" ? (
          <Homepage
            filteredCountries={filteredCountries}
            handleFilterCountry={handleFilterCountry}
            handleSelectRegionFilter={handleSelectRegionFilter}
            handleSelectCountry={handleSelectCountry}
          />
        ) : (
          <Country
            countryInfo={countryInfo}
            handleSetHomepage={handleSetHomepage}
          />
        )}

        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
}

export default App;
