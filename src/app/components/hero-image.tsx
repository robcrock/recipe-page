import Image from "next/image";
import omelette from "../../../public/images/image-omelette.jpeg";

export const HeroImage = () => {
  return (
    <Image
      className="rounded-none md:rounded-xl"
      src={omelette}
      alt={"Omelette"}
    />
  );
};
