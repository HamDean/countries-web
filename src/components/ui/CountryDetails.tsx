import { Country } from "@/hooks/useCountries";
import CountryDetail from "./CountryDetail";
import CountryHeader from "./CountryHeader";

const getLanguages = (languages: any[]) => {
  const langs: string[] = [];
  languages.forEach((language) => langs.push(language.name));
  return langs;
};

const CountryDetails = ({ country }: { country: Country }) => {
  return (
    <div>
      <CountryHeader name={country.name} />
      <CountryDetail title="Native Name" value={country.nativeName} />
      <CountryDetail
        title="Population"
        value={country.population.toLocaleString()}
      />
      <CountryDetail title="Region" value={country.region} />
      <CountryDetail title="Sub region" value={country.subregion} />
      <CountryDetail title="Capital" value={country.capital} />
      <CountryDetail
        title="Top Level Domain"
        value={country.topLevelDomain[0]}
      />
      <CountryDetail title="Currencies" value={country.currencies[0].name} />
      <CountryDetail
        title="Laguages"
        value={getLanguages(country.languages).join(",")}
      />
    </div>
  );
};
export default CountryDetails;
