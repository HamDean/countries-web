
interface Props {
  title: string,
  value: string
}

const CountryDetail = ({title, value}: Props) => {
  return (
    <span className="flex gap-1 mb-2 text-nowrap " >
      <h1 className="text-gray-800 dark:text-white">{title}:</h1>
      <p className="text-gray-700 dark:text-gray-600">{value}</p>
    </span>
  );
};
export default CountryDetail;
