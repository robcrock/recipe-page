import { ReactNode } from "react";
import { CardContent } from "@/components/ui/card";

type Props = {
  title: ReactNode;
  preparation: ReactNode;
  ingredients: ReactNode;
  instructions: ReactNode;
  nutrition: ReactNode;
};

export const Content = ({
  title,
  preparation,
  ingredients,
  instructions,
  nutrition,
}: Props) => {
  return (
    <CardContent className="flex flex-col gap-8">
      {title}
      {preparation}
      {ingredients}
      <hr />
      {instructions}
      <hr />
      {nutrition}
    </CardContent>
  );
};
