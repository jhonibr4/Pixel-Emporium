import Menu from "@/components/organisms/Menu";
import { WrapperProducts } from "@/components/organisms/WrapperProducts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/carousel";

import TShirt from "@/assets/T-shirt Deidara.png";
import Image from "next/image";

export default function Store() {
  return (
    <main className="flex h-screen max-w-full flex-col items-center">
      <Menu />
      <h1 className="mt-12 text-4xl font-bold text-principal-550">Produtos</h1>

      <div className="flex flex-col">
        <WrapperProducts />

        <Carousel className="mt-12 w-4/5 self-center">
          <CarouselContent className="justify-evenly">
            <CarouselItem className="h-96 basis-1/4 rounded-md border-2 bg-gray-500/20">
              <div className="h-2/3 w-full bg-slate-600">
                <Image src={TShirt} alt="T-shirt Deidara" />
              </div>
            </CarouselItem>
            <CarouselItem className="h-96 basis-1/4 rounded-md border-2 bg-gray-500/20">
              <div className="h-2/3 w-full bg-slate-600">
                <Image src={TShirt} alt="T-shirt Deidara" />
              </div>
            </CarouselItem>
            <CarouselItem className="h-96 basis-1/4 rounded-md border-2 bg-gray-500/20">
              <div className="h-2/3 w-full bg-slate-600">
                <Image src={TShirt} alt="T-shirt Deidara" />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </main>
  );
}
