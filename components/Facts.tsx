import React from "react";
import { Separator } from "@/components/ui/separator";
import Quiz from "./Quiz";
import ColorMe from "./ColorMe";
import Family from "./Family";

type Props = {};

const Facts = (props: Props) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold">Facts</h1>
        <h2 className="text-3xl font-bold">Interesting facts about Apples</h2>
      </div>
      <div className="w-full p-2 backdrop-blur-md border rounded-3xl">
        <h3 className="text-2xl font-bold">Apple&apos;s All-Star Crew:</h3>
        <p>
          Did you know that apples have a fantastic team inside? There are over
          7,500 different types of apples, and each one brings its own special
          flavor to the party! It&apos;s like having a fruit squad with a flavor
          for every taste bud!
        </p>
        <Separator />
        <Separator />
        <Separator />
        <h3 className="text-2xl font-bold">An Apple&apos;s Skin Story:</h3>
        <p>
          Apples are like superheroes with their skin on! That&apos;s where most
          of the vitamins and fiber live, so don&apos;t peel it away. It&apos;s
          like their colorful, edible costume that makes them super healthy and
          crunchy.
        </p>
        <Separator />
        <Separator />
        <Separator />
        <h3 className="text-2xl font-bold">Apple&apos;s H2O Ballet:</h3>
        <p>
          Apples are crunchy because they&apos;re 25% air! It&apos;s like
          they&apos;re doing a secret dance with water molecules, making every
          bite a crispy ballet. So, when you munch on an apple, you&apos;re
          basically having a taste of the fruity dance floor.
        </p>
        <Separator />
        <Separator />
        <Separator />
        <h3 className="text-2xl font-bold">
          An Apple a Day Keeps the Boredom Away:
        </h3>
        <p>
          Eating apples is like having a tasty snack and a science experiment
          all in one! Apples contain natural sugars that give you a quick burst
          of energy, perfect for a playtime boost. It&apos;s like having a sweet
          and healthy snack that&apos;s also a party for your taste buds!
        </p>
        <Separator />
        <Separator />
        <Separator />
        <h3 className="text-2xl font-bold">Apple&apos;s Float Test:</h3>
        <p>
          Apples can float in water because they are 25% air. If you put an
          apple in a bowl of water, it will bob around like a little fruity
          boat. It&apos;s like apples are saying, &quot;Look at me, I&apos;m the
          coolest fruit in the bowl - I can even float!&quot;
        </p>
      </div>

      <Quiz />
      <ColorMe />
      <Family />
    </div>
  );
};

export default Facts;
