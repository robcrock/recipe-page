import { Card, CardHeader } from "@/components/ui/card";
import React, { ReactNode } from "react";
import { Attribution } from "./attribution";

type Props = {
  heroImage: ReactNode;
  cardContent: ReactNode;
};

export const RecipeCard = ({ heroImage, cardContent }: Props) => {
  return (
    <Card className="text-dark-charcoal flex w-full flex-col items-center justify-between gap-6 rounded-none border-none md:w-[736px] md:rounded-3xl">
      <CardHeader className="p-0 md:p-4">
        {/* hero image */}
        {heroImage}
      </CardHeader>
      {cardContent}
      <section className="block pb-4 md:hidden">
        <Attribution
          name={"Robert Crocker"}
          link={"https://www.frontendmentor.io/profile/robcrock"}
        />
      </section>
    </Card>
  );
};
