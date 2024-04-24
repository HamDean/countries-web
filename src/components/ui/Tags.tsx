import useCountries from "@/hooks/useCountries";
import { Badge } from "./badge";

interface Props {
  borders: string[];
}

const fetchBorder = (code: string) => {
    const {countries} = useCountries();
    const filtered = countries.filter(country => country.alpha3Code === code)
    return filtered[0].name;
}

const Tags = ({ borders }: Props) => {
  return (
    <div className="flex flex-wrap">
      {borders.map((border) => (
        <Badge variant={"outline"} className="text-gray-600 px-4 mr-1 mb-1">
          {fetchBorder(border)}
        </Badge>
      ))}
    </div>
  );
};
export default Tags;
