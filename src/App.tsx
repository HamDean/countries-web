import { useState } from "react";
import CardGrid from "./components/ui/CardGrid";
import FilterByRegion from "./components/ui/FilterByRegion";
import useCountries, { Country } from "./hooks/useCountries";
import SearchCountryBar from "./components/ui/SearchCountryBar";

const App = () => {
  const { countries } = useCountries();
  const [selectedCountries, setCountries] = useState<Country[]>(countries);

  const handleSelect = (value: string) => {
    setCountries(countries.filter((country) => country.region === value));
  };

  const handleQueryCountry = (query: string) => {
    setCountries(countries.filter((country) => country.name.includes(query)));
    console.log(query)
  };

  return (
    <div>
      <main className="max-w-[80vw] mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <SearchCountryBar onQueryCountry={handleQueryCountry} />
          <FilterByRegion onSelectRegion={(value) => handleSelect(value)} />
        </div>
        <CardGrid countries={selectedCountries} />
      </main>
    </div>
  );
};

export default App;
