import useCountries from "./hooks/useCountries";

const App = () => {
  const { countries } = useCountries();
  return (
    <div>
      {countries?.map((c) => (
        <li key={c.name}>{c.name}</li>
      ))}
    </div>
  );
};
export default App;
