type Props = {};

export const Ingredients = (props: Props) => {
  return (
    <section className="text-m flex flex-col gap-6">
      <h3 className="font-header text-m text-dark-raspberry">Ingredients</h3>
      <ul className="font-base text-bReg marker:text-dark-raspberry flex list-outside list-disc flex-col gap-2 pl-4 font-light marker:text-xs">
        <li className="pl-3">2-3 large eggs</li>
        <li className="pl-3">Salt, to taste</li>
        <li className="pl-3">Pepper, to taste</li>
        <li className="pl-3">1 tablespoon of butter or oil</li>
        <li className="pl-3">
          Optional fillings: cheese, diced vegetables, cooked meats, herbs
        </li>
      </ul>
    </section>
  );
};
