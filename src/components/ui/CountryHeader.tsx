const CountryHeader = ({ name, className }: { name: string, className?: string }) => {
  return <h1 className={`font-bold text-4xl text-gray-900 ${className}`}>{name}</h1>;
};
export default CountryHeader;
