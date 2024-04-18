import  { Country } from "@/hooks/useCountries";
import { BentoGrid, BentoGridItem } from "./BentoGrid";


const CardGrid = ({countries}: {countries: Country[]}) => {
  return (
    <BentoGrid>
      {countries.map((country) => (
        <BentoGridItem
          header={country.flag}
          title={country.name}
          capital={country.capital}
          population={country.population}
          region={country.region}
          key={country.alpha2Code}
          className="cursor-pointer  text-slate-600 border border-slate-150"
        />
      ))}
    </BentoGrid>
  );
};
export default CardGrid;
