import { useState } from "react";
import CardGrid from "./components/ui/CardGrid";
import FilterByRegion from "./components/ui/FilterByRegion";
import useCountries, { Country } from "./hooks/useCountries";
import SearchCountryBar from "./components/ui/SearchCountryBar";
import { FloatingNav } from "./components/ui/nav-bar";
import { ThemeProvider } from "@/components/theme-provider";
import Tags from "./components/ui/Tags";

const App = () => {
  const { countries } = useCountries();
  const [selectedCountries, setCountries] = useState<Country[]>(countries);

  const handleSelect = (value: string) => {
    setCountries(countries.filter((country) => country.region === value));
  };

  const handleQueryCountry = (query: string) => {
    setCountries(countries.filter((country) => country.name.includes(query)));
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <Tags borders={countries[0].borders}/>
        <nav>
          <FloatingNav />
        </nav>
        <main className="max-w-[80vw] mx-auto mt-5">
          <div className="flex flex-col md:flex-row justify-between mb-6">
            <SearchCountryBar onQueryCountry={handleQueryCountry} />
            <FilterByRegion onSelectRegion={(value) => handleSelect(value)} />
          </div>
          <CardGrid countries={selectedCountries} />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
