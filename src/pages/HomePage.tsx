import { ThemeProvider } from "@/components/theme-provider";
import CardGrid from "@/components/ui/CardGrid";
import FilterByRegion from "@/components/ui/FilterByRegion";
import { FloatingNav } from "@/components/ui/nav-bar";
import SearchCountryBar from "@/components/ui/SearchCountryBar";
import useCountries, { Country } from "@/hooks/useCountries";
import { useState } from "react";


const HomePage = () => {
  const { countries } = useCountries();
  const [selectedCountries, setCountries] = useState<Country[]>(countries);

  const handleSelect = (value: string) => {
    setCountries(countries.filter((country) => country.region === value));
  };

  const handleQueryCountry = (query: string) => {
    setCountries(countries.filter((country) => country.name.includes(query)));
  };

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div>
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
}
export default HomePage