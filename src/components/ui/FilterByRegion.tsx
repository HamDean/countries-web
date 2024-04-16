import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@radix-ui/react-select";

import regions from "@/utils/constants";

const FilterByRegion = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Filter By Regions" />
      </SelectTrigger>
      <SelectContent>
        {regions.map((region) => (
          <SelectItem value={region} key={region} className="cursor-pointer">
            {region}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
export default FilterByRegion;
