import c from "../data/data.json";
export interface Country{
    name: string,
    flag: string,
    capital: string,
    population: number,
    region: string,
    alpha2Code: string
  }

const countries = c as Country[];

const useCountries = () => ({ countries });
export default useCountries;
