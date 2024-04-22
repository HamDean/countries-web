import c from "../data/data.json";

interface Currency {
  name: string
}

interface language {
  name: string
}
export interface Country{
    name: string,
    flag: string,
    capital: string,
    population: number,
    region: string,
    alpha2Code: string,
    alpha3Code: string,
    borders: string[],
    nativeName: string,
    subregion: string,
    topLevelDomain: string[],
    currencies: Currency[],
    languages: language[]
  }

  const countries: Country[] = (c as unknown) as Country[];

const useCountries = () => ({ countries });
export default useCountries;
