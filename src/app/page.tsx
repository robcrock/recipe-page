import { RecipeCard } from "./components/recipe-card";
import { Attribution } from "./components/attribution";
import { HeroImage } from "./components/hero-image";
import { Content } from "./components/content";
import { Title } from "./components/title";
import { Preparation } from "./components/preparation";
import { Ingredients } from "./components/ingredients";
import { Instructions } from "./components/instructions";
import { Nutrition } from "./components/nutrition";
import { recipe } from "../config";

const { title, preparation, ingredients, instructions, nutrition } = recipe;

export default function Home() {
  return (
    <main className="flex flex-col p-0 md:p-4">
      <RecipeCard
        heroImage={<HeroImage />}
        cardContent={
          <Content
            title={
              <Title title={title.title} description={title.description} />
            }
            preparation={
              <Preparation
                total={preparation.total}
                preparation={preparation.preparation}
                cooking={preparation.cooking}
              />
            }
            ingredients={<Ingredients ingredients={ingredients} />}
            instructions={<Instructions instructions={instructions} />}
            nutrition={<Nutrition nutrition={nutrition} />}
          />
        }
      />
      <section className="my-4 hidden md:block">
        <Attribution
          name={"Robert Crocker"}
          link={"https://www.frontendmentor.io/profile/robcrock"}
        />
      </section>
    </main>
  );
}
