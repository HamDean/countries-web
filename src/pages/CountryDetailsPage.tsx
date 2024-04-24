import CountryDetails from "@/components/ui/CountryDetails";
import useCountries from "@/hooks/useCountries";

const CountryDetailsPage = () => {
  const { countries } = useCountries();
  const belg = countries.filter((c) => c.name === "Belgium");
  return (
    <div className="flex flex-col md:flex-row justify-between gap-2 w-[80vw] mx-auto">
      <div className="w-[50%] md:w-[450px]">
        <img src={belg[0].flag} alt="" className="" />
      </div>

      <div className="w-[50%]">
        <CountryDetails country={belg[0]} />
      </div>
    </div>
  );
};
export default CountryDetailsPage;
