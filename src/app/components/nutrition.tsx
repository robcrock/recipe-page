import { recipe } from "../../config";

type Props = { nutrition: typeof recipe.nutrition };

export const Nutrition = ({ nutrition }: Props) => {
  return (
    <section className="flex flex-col gap-6">
      <h3 className="font-header text-m text-dark-raspberry">Nutrition</h3>
      <p className="font-base text-bReg">
        Nutrition The table below shows nutritional values per serving without
        the additional fillings.
      </p>
      <ul className="font-base text-bReg divide-y divide-gray-300">
        {nutrition.map(({ title, value }, index) => {
          return (
            <li key={index} className="flex h-12 items-center px-2 md:px-8">
              <span className="w-full capitalize">{title}</span>
              <span className="text-dark-raspberry w-full font-semibold">
                {value}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
