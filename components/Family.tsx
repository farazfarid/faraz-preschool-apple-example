import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import Image from "next/image";
import { Button } from "./ui/button";

type Props = {};

const Family = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center p-2 backdrop-blur-3xl border rounded-3xl">
      <h1 className="text-6xl font-bold">Family</h1>
      <p className="text-3xl font-bold">
        I want to introduce you to the Apple family!
      </p>
      <div className="flex flex-row items-center justify-center mx-auto p-24 w-[850px]">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <Image
                src="/red.png"
                alt="Red Apple"
                width={250}
                height={250}
                className="mx-10"
              />
              <Drawer>
                <DrawerTrigger>
                  <Button variant="outline">Learn More!</Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>
                      Red Apples - Fun Facts for Kids 🍎
                    </DrawerTitle>
                    <DrawerDescription>
                      Did you know that red apples are like the superheroes of
                      fruits? They get their vibrant color from a special power
                      called &quot;anthocyanins.&quot; These are like little
                      defenders that help keep the apple healthy and strong,
                      just like a superhero cape! Red apples are full of
                      surprises! When you take a big bite, you&apos;ll discover
                      a star-shaped pattern hiding in the core. It&apos;s like a
                      secret message from the apple tree, saying,
                      &quot;You&apos;re a star for eating healthy snacks!&quot;.
                      Munching on red apples is like giving your teeth a
                      superhero workout. The crunchiness helps keep your teeth
                      strong and clean, and the natural sweetness makes your
                      smile as bright as the sunshine!
                    </DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter>
                    <DrawerClose>
                      <Button variant="outline">WOW 😍</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </CarouselItem>
            <CarouselItem>
              <Image
                src="/yellow.png"
                alt="Yellow Apple"
                width={250}
                height={250}
                className="mx-10"
              />
              <Drawer>
                <DrawerTrigger>
                  <Button variant="outline">Learn More!</Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>
                      Yellow Apples - Fun Facts for Kids 🟡
                    </DrawerTitle>
                    <DrawerDescription>
                      Yellow apples are like bites of sunshine! They get their
                      cheerful color from the sun&apos;s warm hugs. Eating a
                      yellow apple is like having a tasty piece of sunshine
                      right in your hand. Yellow apples are best friends with
                      busy bees! These friendly insects help the apple blossoms
                      turn into yummy fruits. It&apos;s like the bees are
                      magical helpers, turning flowers into delicious treats
                      just for you! The golden color of yellow apples is a sign
                      that they&apos;re packed with healthy goodness.
                      They&apos;re like little treasure chests full of vitamins
                      and fiber that make your tummy happy and strong!
                    </DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter>
                    <DrawerClose>
                      <Button variant="outline">WOW 😍</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </CarouselItem>
            <CarouselItem>
              <Image
                src="/green.png"
                alt="Green Apple"
                width={250}
                height={250}
                className="mx-10"
              />
              <Drawer>
                <DrawerTrigger>
                  <Button variant="outline">Learn More!</Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>
                      Green Apples - Fun Facts for Kids 🍏
                    </DrawerTitle>
                    <DrawerDescription>
                      Green apples are the dance champions of flavors! They have
                      a special talent for balancing sour and sweet tastes.
                      It&apos;s like having a flavor party in your mouth, where
                      the sour and sweet do a happy dance together! Snacking on
                      green apples is like having a secret weapon for smart
                      thinking! The antioxidants in green apples are like brain
                      boosters, helping you stay sharp and clever. Green apples
                      are like magic wands for your taste buds! Their juicy and
                      crispy texture is enchanting. It&apos;s like taking a
                      delicious bite and entering a world of apple magic!
                    </DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter>
                    <DrawerClose>
                      <Button variant="outline">WOW 😍</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Family;
