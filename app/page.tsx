import Facts from "@/components/Facts";
import Hero from "@/components/Hero";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-12 gap-20">
      <Hero />
      <Separator />
      <Facts />
    </main>
  );
}
