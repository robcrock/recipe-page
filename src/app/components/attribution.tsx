import Link from "next/link";

type TProps = {
  name: string;
  link: string;
};

export const Attribution = ({ name, link }: TProps) => {
  return (
    <div className="attribution decoration-none text-dark-raspberry w-full font-light">
      <span>Challenge by </span>
      <Link className="text-white" href={"https://www.frontendmentor.io/"}>
        <span className="text-dark-raspberry font-bold">Frontend Mentor</span>
      </Link>
      <span>
        . Coded by{" "}
        <Link href={link}>
          <span className="text-dark-raspberry font-bold">{name}</span>
        </Link>
        .
      </span>
    </div>
  );
};
