import regions from "@/utils/constants";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  onSelectRegion: (value: string) => void;
}

const FilterByRegion = ({ onSelectRegion }: Props) => {
  return (
    <Select onValueChange={(value) => onSelectRegion(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Filter By Region" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {regions.map((region) => (
            <SelectItem key={region} value={region}>
              {region}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default FilterByRegion;
