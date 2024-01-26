import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {};

const Quiz = (props: Props) => {
  return (
    <div className="flex flex-col p-2 items-center justify-center backdrop-blur-md border rounded-3xl">
      <h2 className="text-3xl font-bold">Let&apos;s test your knowledge!</h2>
      <p className="text-center">
        Take the quiz to see what you&apos;ve learned about apples from this
        page!
        <br />
        Open the accordion to check your answer!
      </p>
      <Accordion type="single" collapsible className="w-full p-2">
        <AccordionItem value="item-1">
          <AccordionTrigger>How Do Apples Grow?</AccordionTrigger>
          <AccordionContent>
            Apples grow on trees! They start as tiny seeds, and with lots of
            sunshine and water, they grow into beautiful apple trees. Bees and
            other friendly insects help by pollinating the flowers, turning them
            into apples.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Why Are Apples So Crunchy?</AccordionTrigger>
          <AccordionContent>
            Apples are like nature&apos;s crispy snacks! They&apos;re crunchy
            because they&apos;re full of water and air. It&apos;s like taking a
            bite out of a tasty water balloon, but much tastier and less messy.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Do Apples Have Superpowers?</AccordionTrigger>
          <AccordionContent>
            Apples may not have capes, but they&apos;re super healthy!
            They&apos;re packed with vitamins and fiber, which are like little
            superheroes helping our bodies stay strong and healthy. So, eating
            apples is like having a secret stash of superpowers in your lunch.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>What Colors Can Apples Be?</AccordionTrigger>
          <AccordionContent>
            Apples come in different colors! There are red, green, yellow, and
            even mixed-colored apples. Each color has its own special taste.
            It&apos;s like having a colorful palette of flavors to choose from.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Can Apples Float?</AccordionTrigger>
          <AccordionContent>
            Yes, apples can float! If you put them in water, they&apos;ll bob
            around like tiny boats. This is because apples are light and have
            air pockets inside. It&apos;s like giving them a chance to show off
            their floating skills in a mini apple pool.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Quiz;
