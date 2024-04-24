import { Country } from "@/hooks/useCountries";
import { BentoGrid, BentoGridItem } from "./BentoGrid";
import { Link } from "react-router-dom";

const CardGrid = ({ countries }: { countries: Country[] }) => {
  return (
    <BentoGrid>
      {countries.map((country) => (
        <Link to={'/details/' + country.name} key={country.alpha2Code}>
        <BentoGridItem
          header={country.flag}
          title={country.name}
          capital={country.capital}
          population={country.population}
          region={country.region}
          key={country.alpha2Code}
          className="cursor-pointer  text-slate-600 border border-slate-150"
        />
        </Link>
      ))}
    </BentoGrid>
  );
};
export default CardGrid;
