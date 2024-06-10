import Image from "next/image";
import omelette from "../../public/assets/images/image-omelette.jpeg";
import { Attribution } from "./components/attribution";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <Card className="flex w-full flex-col items-center justify-between rounded-none md:w-[736px] md:rounded-3xl">
      {/* card */}
      <CardHeader>
        {/* hero image */}
        <Image src={omelette} alt={"Omelette"} />
        {/* title */}
        <CardTitle>Simple Omelette Recipe</CardTitle>
        {/* description */}
        <CardDescription>
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection,optionally filled with your
          choice of cheese, vegetables, or meats.
        </CardDescription>
        {/* cook time */}
        <Card>
          <CardHeader>
            <CardTitle>Preparation time</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc">
              <li>Total: Approximately 10 minutes</li>
              <li>Preparation: 5 minutes</li>
              <li>Cooking: 5 minutes</li>
            </ul>
          </CardContent>
        </Card>
      </CardHeader>
      <CardContent>
        {/* ingrdients */}
        <section>
          <h3>Ingredients</h3>
          <ul className="list-disc">
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </section>
        {/* divider */}
        <hr />
        {/* instructions */}
        <section>
          <h3>Instructions </h3>
          <ol className="list-decimal">
            <li>
              Beat the eggs: In a bowl, beat the eggs with a pinch of salt and
              pepper until they are well mixed. You can add a tablespoon of
              water or milk for a fluffier texture.
            </li>
            <li>
              Heat the pan: Place a non-stick frying pan over medium heat and
              add butter or oil.
            </li>
            <li>
              Cook the omelette: Once the butter is melted and bubbling, pour in
              the eggs. Tilt the pan to ensure the eggs evenly coat the surface.
            </li>
            <li>
              Add fillings (optional): When the eggs begin to set at the edges
              but are still slightly runny in the middle, sprinkle your chosen
              fillings over one half of the omelette.
            </li>
            <li>
              Fold and serve: As the omelette continues to cook, carefully lift
              one edge and fold it over the fillings. Let it cook for another
              minute, then slide it onto a plate.
            </li>
            <li>
              Enjoy: Serve hot, with additional salt and pepper if needed.
            </li>
          </ol>
        </section>
        {/* divider */}
        <hr />
        {/* nutrition */}
        <section>
          <h3>Nutrition</h3>
          <p>
            Nutrition The table below shows nutritional values per serving
            without the additional fillings.
          </p>
          <ul className="grid grid-cols-1 divide-y">
            <li>Calories 277kcal</li>
            <li>Carbs 0g</li>
            <li>Protein 20g</li>
            <li>Fat 22g</li>
          </ul>
        </section>
      </CardContent>
      <Attribution
        name={"Robert Crocker"}
        link={"https://www.frontendmentor.io/profile/robcrock"}
      />
    </Card>
  );
}
