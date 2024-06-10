import Image from "next/image";
import omelette from "../../public/assets/images/image-omelette.jpeg";
import { Attribution } from "./components/attribution";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex flex-col justify-between gap-8 p-4">
      <Card className="flex w-full flex-col items-center justify-between rounded-none md:w-[736px] md:rounded-3xl">
        {/* card */}
        <CardHeader>
          {/* hero image */}
          <Image className="rounded-xl" src={omelette} alt={"Omelette"} />
        </CardHeader>
        <CardContent className="flex flex-col gap-8">
          {/* title */}
          {/* description */}
          <section className="flex flex-col gap-6">
            <CardTitle>Simple Omelette Recipe</CardTitle>
            <CardDescription>
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection,optionally
              filled with your choice of cheese, vegetables, or meats.
            </CardDescription>
          </section>
          {/* cook time */}
          <Card className="flex flex-col gap-4">
            <CardHeader className="px-7 pb-0">
              <CardTitle>Preparation time</CardTitle>
            </CardHeader>
            <CardContent className="px-7 pb-7 pt-0">
              <ul className="list-outside list-disc pl-4">
                <li className="pl-3">Total: Approximately 10 minutes</li>
                <li className="pl-3">Preparation: 5 minutes</li>
                <li className="pl-3">Cooking: 5 minutes</li>
              </ul>
            </CardContent>
          </Card>
          {/* ingrdients */}
          <section className="flex flex-col gap-6">
            <h3>Ingredients</h3>
            <ul className="flex list-outside list-disc flex-col gap-2 pl-4">
              <li className="pl-3">2-3 large eggs</li>
              <li className="pl-3">Salt, to taste</li>
              <li className="pl-3">Pepper, to taste</li>
              <li className="pl-3">1 tablespoon of butter or oil</li>
              <li className="pl-3">
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </li>
            </ul>
          </section>
          {/* divider */}
          <hr />
          {/* instructions */}
          <section className="flex flex-col gap-6">
            <h3>Instructions </h3>
            <ol className="flex list-outside list-decimal flex-col gap-2 pl-4 text-left">
              <li className="pl-3">
                Beat the eggs: In a bowl, beat the eggs with a pinch of salt and
                pepper until they are well mixed. You can add a tablespoon of
                water or milk for a fluffier texture.
              </li>
              <li className="pl-3">
                Heat the pan: Place a non-stick frying pan over medium heat and
                add butter or oil.
              </li>
              <li className="pl-3">
                Cook the omelette: Once the butter is melted and bubbling, pour
                in the eggs. Tilt the pan to ensure the eggs evenly coat the
                surface.
              </li>
              <li className="pl-3">
                Add fillings (optional): When the eggs begin to set at the edges
                but are still slightly runny in the middle, sprinkle your chosen
                fillings over one half of the omelette.
              </li>
              <li className="pl-3">
                Fold and serve: As the omelette continues to cook, carefully
                lift one edge and fold it over the fillings. Let it cook for
                another minute, then slide it onto a plate.
              </li>
              <li className="pl-3">
                Enjoy: Serve hot, with additional salt and pepper if needed.
              </li>
            </ol>
          </section>
          {/* divider */}
          <hr />
          {/* nutrition */}
          <section className="flex flex-col gap-6">
            <h3>Nutrition</h3>
            <p>
              Nutrition The table below shows nutritional values per serving
              without the additional fillings.
            </p>
            <ul className="divide-y divide-gray-300">
              <li className="flex h-12 items-center px-8">
                <span className="w-full">Calories</span>
                <span className="w-full">277kcal</span>
              </li>
              <li className="flex h-12 items-center border-b border-slate-300 px-8">
                <span className="w-full">Carbs</span>
                <span className="w-full">0g</span>
              </li>
              <li className="flex h-12 items-center border-b border-slate-300 px-8">
                <span className="w-full">Protein</span>
                <span className="w-full">20g</span>
              </li>
              <li className="flex h-12 items-center border-b border-slate-300 px-8">
                <span className="w-full">Fat</span>
                <span className="w-full">22g</span>
              </li>
            </ul>
          </section>
        </CardContent>
      </Card>
      <Attribution
        name={"Robert Crocker"}
        link={"https://www.frontendmentor.io/profile/robcrock"}
      />
    </main>
  );
}
