import CountryDetails from "@/components/ui/CountryDetails";
import useCountries from "@/hooks/useCountries";
import { useParams } from "react-router-dom";


const CountryDetailsPage = () => {
  const {id } = useParams();
  const {countries} = useCountries();
  const filtered = countries.filter(c => c.name === id )
  const country = filtered[0]
 
  return (
    <div className="flex flex-col md:flex-row justify-between gap-2 w-[80vw] mx-auto">
      <div className="w-[50%] md:w-[450px]">
        <img src={country.flag!} alt="" className="" />
      </div>

      <div className="w-[50%]">
        <CountryDetails country={country} />
      </div>
    </div>
  );
};
export default CountryDetailsPage;
