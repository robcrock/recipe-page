type Props = {};

export const Nutrition = (props: Props) => {
  return (
    <section className="flex flex-col gap-6">
      <h3 className="font-header text-m text-dark-raspberry">Nutrition</h3>
      <p className="font-base text-bReg">
        Nutrition The table below shows nutritional values per serving without
        the additional fillings.
      </p>
      <ul className="font-base text-bReg divide-y divide-gray-300">
        <li className="flex h-12 items-center px-2 md:px-8">
          <span className="w-full">Calories</span>
          <span className="text-dark-raspberry w-full font-semibold">
            277kcal
          </span>
        </li>
        <li className="flex h-12 items-center border-b border-slate-300 px-2 md:px-8">
          <span className="w-full">Carbs</span>
          <span className="text-dark-raspberry w-full font-semibold">0g</span>
        </li>
        <li className="flex h-12 items-center border-b border-slate-300 px-2 md:px-8">
          <span className="w-full">Protein</span>
          <span className="text-dark-raspberry w-full font-semibold">20g</span>
        </li>
        <li className="flex h-12 items-center border-b border-slate-300 px-2 md:px-8">
          <span className="w-full">Fat</span>
          <span className="text-dark-raspberry w-full font-semibold">22g</span>
        </li>
      </ul>
    </section>
  );
};
