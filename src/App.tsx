import { useState } from "react";
import CardGrid from "./components/ui/CardGrid";
import FilterByRegion from "./components/ui/FilterByRegion";
import useCountries, { Country } from "./hooks/useCountries";

const App = () => {
  const { countries } = useCountries();
  const [selectedCountries, setCountries] = useState<Country[]>(countries);

  const handleSelect = (value: string) => {
    setCountries(
      countries.filter((country) => country.region === value)
    );
  };

  return (
    <div>
      <FilterByRegion onSelectRegion={(value) => handleSelect(value)} />
      <CardGrid countries={selectedCountries} />
    </div>
  );
};

export default App;
