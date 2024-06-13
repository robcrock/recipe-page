import { recipe } from "../../config";

type Props = { instructions: typeof recipe.instructions };

export const Instructions = ({ instructions }: Props) => {
  return (
    <section className="flex flex-col gap-6">
      <h3 className="font-header text-m text-dark-raspberry">Instructions </h3>
      <ol className="marker:text-dark-raspberry flex list-outside list-decimal flex-col gap-2 pl-4 text-left font-light marker:font-semibold">
        {instructions.map(({ title, description }, index) => {
          return (
            <li key={index} className="pl-3">
              <span className="font-semibold">{title}: </span>
              {description}
            </li>
          );
        })}
      </ol>
    </section>
  );
};
