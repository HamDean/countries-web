import CardContainer from "./components/ui/CardContainer";
import useCountries from "./hooks/useCountries";

const App = () => {
  const { countries } = useCountries();

  return (
    <div>
      {countries.map((country) => (
        <CardContainer
          name={country.name}
          population={country.population}
          region={country.region}
          flag={country.flag}
          capital={country.capital}
          key={country.alpha2Code}
        />
      ))}
    </div>
  );
};
export default App;
