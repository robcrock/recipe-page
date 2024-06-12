import { CardTitle, CardDescription } from "@/components/ui/card";

type Props = {};

export const Title = (props: Props) => {
  return (
    <section className="flex flex-col gap-6">
      <CardTitle className="font-header text-l font-normal">
        Simple Omelette Recipe
      </CardTitle>
      <CardDescription className="font-base text-bReg font-light">
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection,optionally filled with your
        choice of cheese, vegetables, or meats.
      </CardDescription>
    </section>
  );
};
