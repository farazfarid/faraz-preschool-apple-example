import Image from "next/image";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <Image
        src="/hero.png"
        alt="Next.js Logo"
        width={600}
        height={600}
        priority
      />
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="text-6xl font-bold">Faraz&apos; Preschool</h1>
        <h2 className="text-3xl font-bold">Apple - The Fruit</h2>
      </div>
    </div>
  );
};

export default Hero;
