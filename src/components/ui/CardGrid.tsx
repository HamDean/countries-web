import useCountries from "@/hooks/useCountries";
import { BentoGrid, BentoGridItem } from "./BentoGrid";

const CardGrid = () => {
  const { countries } = useCountries();
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
