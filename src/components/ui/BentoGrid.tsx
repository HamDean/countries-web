import { cn } from "@/utils/cn";

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
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto ",
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
  description,
  header,
  icon,
  population,
  region,
  capital,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: string;
  icon?: React.ReactNode;
  population: number;
  region: string;
  capital: string | undefined;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-10",
        className
      )}
    >
      <div className="group-hover/bento:translate-x-2 transition duration-200">
      <img src={header} className="h-[150px] w-full" />
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          <p>
            <span className="font-bold ">Population</span>: {population}
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