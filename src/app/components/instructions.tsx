type Props = {};

export const Instructions = (props: Props) => {
  return (
    <section className="flex flex-col gap-6">
      <h3 className="font-header text-m text-dark-raspberry">Instructions </h3>
      <ol className="marker:text-dark-raspberry flex list-outside list-decimal flex-col gap-2 pl-4 text-left font-light marker:font-semibold">
        <li className="pl-3">
          <span className="font-semibold">Beat the eggs:</span> In a bowl, beat
          the eggs with a pinch of salt and pepper until they are well mixed.
          You can add a tablespoon of water or milk for a fluffier texture.
        </li>
        <li className="pl-3">
          <span className="font-semibold">Heat the pan:</span> Place a non-stick
          frying pan over medium heat and add butter or oil.
        </li>
        <li className="pl-3">
          <span className="font-semibold">Cook the omelette:</span> Once the
          butter is melted and bubbling, pour in the eggs. Tilt the pan to
          ensure the eggs evenly coat the surface.
        </li>
        <li className="pl-3">
          <span className="font-semibold">Add fillings (optional):</span> When
          the eggs begin to set at the edges but are still slightly runny in the
          middle, sprinkle your chosen fillings over one half of the omelette.
        </li>
        <li className="pl-3">
          <span className="font-semibold">Fold and serve:</span> As the omelette
          continues to cook, carefully lift one edge and fold it over the
          fillings. Let it cook for another minute, then slide it onto a plate.
        </li>
        <li className="pl-3">
          <span className="font-semibold">Enjoy:</span> Serve hot, with
          additional salt and pepper if needed.
        </li>
      </ol>
    </section>
  );
};
