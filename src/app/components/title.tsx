import { CardTitle, CardDescription } from "@/components/ui/card";
import { recipe } from "../../config";

type Props = typeof recipe.title;

export const Title = ({ title, description }: Props) => {
  return (
    <section className="flex flex-col gap-6">
      <CardTitle className="font-header text-l font-normal">{title}</CardTitle>
      <CardDescription className="font-base text-bReg font-light">
        {description}
      </CardDescription>
    </section>
  );
};
