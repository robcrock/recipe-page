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
    <main className="flex flex-col justify-between gap-8 p-0 md:p-4">
      <Card className="flex w-full flex-col items-center justify-between gap-6 rounded-none md:w-[736px] md:rounded-3xl">
        {/* card */}
        <CardHeader className="p-0 md:p-4">
          {/* hero image */}
          <Image className="rounded-xl" src={omelette} alt={"Omelette"} />
        </CardHeader>
        <CardContent className="flex flex-col gap-8">
          {/* title */}
          {/* description */}
          <section className="flex flex-col gap-6">
            <CardTitle className="font-header text-l font-normal">
              Simple Omelette Recipe
            </CardTitle>
            <CardDescription className="font-base text-bReg font-light">
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection,optionally
              filled with your choice of cheese, vegetables, or meats.
            </CardDescription>
          </section>
          {/* cook time */}
          <Card className="flex flex-col gap-4">
            <CardHeader className="px-7 pb-0">
              <CardTitle className="font-base text-bReg text-xl font-semibold">
                Preparation time
              </CardTitle>
            </CardHeader>
            <CardContent className="px-7 pb-7 pt-0">
              <ul className="font-base text-bReg list-outside list-disc pl-4 font-light">
                <li className="pl-3">
                  <span className="font-semibold">Total:</span> Approximately 10
                  minutes
                </li>
                <li className="pl-3">
                  <span className="font-semibold">Preparation:</span> 5 minutes
                </li>
                <li className="pl-3">
                  <span className="font-semibold">Cooking:</span> 5 minutes
                </li>
              </ul>
            </CardContent>
          </Card>
          {/* ingrdients */}
          <section className="text-m flex flex-col gap-6">
            <h3 className="font-header text-m">Ingredients</h3>
            <ul className="font-base text-bReg flex list-outside list-disc flex-col gap-2 pl-4 font-light">
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
            <h3 className="font-header text-m">Instructions </h3>
            <ol className="flex list-outside list-decimal flex-col gap-2 pl-4 text-left font-light">
              <li className="pl-3">
                <span className="font-semibold">Beat the eggs:</span> In a bowl,
                beat the eggs with a pinch of salt and pepper until they are
                well mixed. You can add a tablespoon of water or milk for a
                fluffier texture.
              </li>
              <li className="pl-3">
                <span className="font-semibold">Heat the pan:</span> Place a
                non-stick frying pan over medium heat and add butter or oil.
              </li>
              <li className="pl-3">
                <span className="font-semibold">Cook the omelette:</span> Once
                the butter is melted and bubbling, pour in the eggs. Tilt the
                pan to ensure the eggs evenly coat the surface.
              </li>
              <li className="pl-3">
                <span className="font-semibold">Add fillings (optional):</span>{" "}
                When the eggs begin to set at the edges but are still slightly
                runny in the middle, sprinkle your chosen fillings over one half
                of the omelette.
              </li>
              <li className="pl-3">
                <span className="font-semibold">Fold and serve:</span> As the
                omelette continues to cook, carefully lift one edge and fold it
                over the fillings. Let it cook for another minute, then slide it
                onto a plate.
              </li>
              <li className="pl-3">
                <span className="font-semibold">Enjoy:</span> Serve hot, with
                additional salt and pepper if needed.
              </li>
            </ol>
          </section>
          {/* divider */}
          <hr />
          {/* nutrition */}
          <section className="flex flex-col gap-6">
            <h3 className="font-header text-m">Nutrition</h3>
            <p className="font-base text-bReg">
              Nutrition The table below shows nutritional values per serving
              without the additional fillings.
            </p>
            <ul className="font-base text-bReg divide-y divide-gray-300">
              <li className="flex h-12 items-center px-2 md:px-8">
                <span className="w-full">Calories</span>
                <span className="w-full font-semibold">277kcal</span>
              </li>
              <li className="flex h-12 items-center border-b border-slate-300 px-2 md:px-8">
                <span className="w-full">Carbs</span>
                <span className="w-full font-semibold">0g</span>
              </li>
              <li className="flex h-12 items-center border-b border-slate-300 px-2 md:px-8">
                <span className="w-full">Protein</span>
                <span className="w-full font-semibold">20g</span>
              </li>
              <li className="flex h-12 items-center border-b border-slate-300 px-2 md:px-8">
                <span className="w-full">Fat</span>
                <span className="w-full font-semibold">22g</span>
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
