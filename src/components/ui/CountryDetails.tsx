import { Country } from "@/hooks/useCountries";
import CountryDetail from "./CountryDetail";
import CountryHeader from "./CountryHeader";
import Tags from "./Tags";

const getLanguages = (languages: any[]) => {
  const langs: string[] = [];
  languages.forEach((language) => langs.push(language.name));
  return langs;
};

const CountryDetails = ({ country }: { country: Country }) => {
  return (
    <>
      <CountryHeader name={country.name} className="mb-8 mt-10 md:mt-0" />
      <div className="flex flex-col md:flex-row md:gap-24">
        <div>
          <CountryDetail title="Native Name" value={country.nativeName} />
          <CountryDetail
            title="Population"
            value={country.population.toLocaleString()}
          />
          <CountryDetail title="Region" value={country.region} />
          <CountryDetail title="Sub region" value={country.subregion} />
          <CountryDetail title="Capital" value={country.capital} />
        </div>

        <div className="mt-4 md:mt-0 md:ml-2">
          <CountryDetail
            title="Top Level Domain"
            value={country.topLevelDomain[0]}
          />
          <CountryDetail
            title="Currencies"
            value={country.currencies[0].name}
          />
          <CountryDetail
            title="Laguages"
            value={getLanguages(country.languages).join(",")}
          />
        </div>
      </div>

      <div className="mt-20 flex gap-3">
        <h2 className="font-semibold text-nowrap">Border countries: </h2>
        <Tags borders={country.borders} />
      </div>
    </>
  );
};
export default CountryDetails;
