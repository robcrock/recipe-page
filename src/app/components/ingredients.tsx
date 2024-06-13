import { recipe } from "../../config";

type Props = { ingredients: typeof recipe.ingredients };

export const Ingredients = ({ ingredients }: Props) => {
  return (
    <section className="text-m flex flex-col gap-6">
      <h3 className="font-header text-m text-dark-raspberry">Ingredients</h3>
      <ul className="font-base text-bReg marker:text-dark-raspberry flex list-outside list-disc flex-col gap-2 pl-4 font-light marker:text-xs">
        {ingredients.map((ingredient: string, index: number) => {
          return (
            <li key={index} className="pl-3">
              {ingredient}
            </li>
          );
        })}
      </ul>
    </section>
  );
};
