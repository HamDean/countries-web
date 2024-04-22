import { Badge } from "./badge";

interface Props {
  borders: string[];
}

const Tags = ({ borders }: Props) => {
  return (
    <div>
      {borders.map((border) => (
        <Badge variant={"outline"} className="text-gray-600 px-4">
          {border}
        </Badge>
      ))}
    </div>
  );
};
export default Tags;
