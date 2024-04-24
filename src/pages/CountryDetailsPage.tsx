import { Button } from "@/components/ui/button";
import CountryDetails from "@/components/ui/CountryDetails";
import useCountries from "@/hooks/useCountries";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const CountryDetailsPage = () => {
  const { id } = useParams();
  const { countries } = useCountries();
  const filtered = countries.filter((c) => c.name === id);
  const country = filtered[0];

  return (
    <>
      <div className="mb-10 w-[80vw] mx-auto mt-5">
        <Link to={"/"}>
          <Button
            variant={"outline"}
            className="text-gray-700 dark:text-gray-100"
          >
            <ArrowLeft className="w-10 h-5" />
            Back
          </Button>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-2 w-[80vw] mx-auto">
        <div className="w-[50%] md:w-[450px]">
          <img src={country.flag!} alt="" />
        </div>

        <div className="w-[50%]">
          <CountryDetails country={country} />
        </div>
      </div>
    </>
  );
};
export default CountryDetailsPage;
