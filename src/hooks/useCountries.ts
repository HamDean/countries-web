import c from "../data/data.json";
export interface Country{
    name: string,
    flag: string,
    capital: string,
    population: number,
    region: string,
    alpha2Code: string,
    alpha3Code: string,
    borders: string[]
  }

  const countries: Country[] = (c as unknown) as Country[];

const useCountries = () => ({ countries });
export default useCountries;
