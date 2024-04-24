import { cn } from "@/utils/cn";

interface Props {
  className?: string;
  title?: string;
  description?: string | React.ReactNode;
  header?: string;
  icon?: React.ReactNode;
  population: number;
  region: string;
  capital: string | undefined;
}

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  header,
  population,
  region,
  capital,
}: Props) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-transparent dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-10 w-[15.63rem]",
        className
      )}
    >
      <div className="group-hover/bento:translate-x-1 transition duration-200">
        <div className="rounded-sm overflow-hidden ">
          <img src={header} className="h-[150px] w-full" />
        </div>
        <div className="font-sans font-bold text-neutral-700 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal flex flex-col gap-y-1 text-neutral-600 text-xs dark:text-neutral-300">
          <p>
            <span className="font-bold ">Population</span>:{" "}
            {population.toLocaleString()}
          </p>
          <p>
            <span className="font-bold ">Region</span>: {region}
          </p>
          <p>
            <span className="font-bold ">Capital</span>: {capital}
          </p>
        </div>
      </div>
    </div>
  );
};
