import { useRef } from "react";

interface Props {
  onQueryCountry: (query: string) => void;
}

const SearchCountryBar = ({ onQueryCountry }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleQueryCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!ref.current) return;
    onQueryCountry(ref.current.value);
  };

  return (
    <form className="w-full  md:max-w-[50%] mb-4 md:0">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-transparent dark:bg-blend-darken dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
          placeholder="Search for a country..."
          required
          ref={ref}
          onChange={(e) => {
            handleQueryCountry(e);
          }}
        />
      </div>
    </form>
  );
};
export default SearchCountryBar;
