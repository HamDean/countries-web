import  { Country } from "@/hooks/useCountries";
import { BentoGrid, BentoGridItem } from "./BentoGrid";


const CardGrid = ({countries}: {countries: Country[]}) => {
  return (
    <BentoGrid className="max-w-[85vw]">
      {countries.map((country) => (
        <BentoGridItem
          header={country.flag}
          title={country.name}
          capital={country.capital}
          population={country.population}
          region={country.region}
          key={country.alpha2Code}
          className="cursor-pointer"
        />
      ))}
    </BentoGrid>
  );
};
export default CardGrid;
