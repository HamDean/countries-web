
interface Props {
  title: string,
  value: string
}

const CountryDetail = ({title, value}: Props) => {
  return (
    <span className="flex gap-1" >
      <h1 className="text-gray-800 font-semibold">{title}:</h1>
      <p className="text-gray-700">{value}</p>
    </span>
  );
};
export default CountryDetail;
