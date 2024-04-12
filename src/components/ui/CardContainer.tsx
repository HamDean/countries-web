import { Card,CardHeader, CardContent, CardTitle } from "./card"

interface Props {
    name: string,
    flag: string,
    population: number,
    region: string,
    capital: string | undefined
}

const CardContainer = ({name, flag, population, region, capital}: Props) => {
  return (
    <Card className="w-[230px] overflow-hidden">
        <CardHeader className="p-0 mb-5">
          <img
            src={flag}
            className="w-full h-full"
          />
        </CardHeader>
        <CardContent>
          <CardTitle className="mb-2">
            <h2>{name}</h2>
          </CardTitle>
          <h2>
            {" "}
            <span className="font-bold ">{population}</span>: 81,000
          </h2>
          <h2>
            <span className="font-bold ">{region}</span>: Middle East
          </h2>
          <h2>
            <span className="font-bold ">{capital}</span>: someCapital
          </h2>
        </CardContent>
      </Card>
  )
}
export default CardContainer