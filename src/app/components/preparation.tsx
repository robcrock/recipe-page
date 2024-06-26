import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { recipe } from "../../config";

type Props = typeof recipe.preparation;

export const Preparation = ({ total, preparation, cooking }: Props) => {
  return (
    <Card className="bg-snow flex flex-col gap-4 border-none">
      <CardHeader className="px-7 pb-0">
        <CardTitle className="font-base text-bReg text-dark-raspberry text-xl font-semibold">
          Preparation time
        </CardTitle>
      </CardHeader>
      <CardContent className="px-7 pb-7 pt-0">
        <ul className="font-base text-bReg marker:text-dark-raspberry list-outside list-disc pl-4 font-light marker:text-xs">
          <li className="pl-3">
            <span className="font-medium">Total:</span> {total}
          </li>
          <li className="pl-3">
            <span className="font-medium">Preparation:</span> {preparation}
          </li>
          <li className="pl-3">
            <span className="font-medium">Cooking:</span> {cooking}
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};
