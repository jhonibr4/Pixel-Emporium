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
            <CarouselItem className=" align-center flex h-96 basis-1/4 flex-col rounded-[0.5rem] border-2 p-2">
              <div className="flex h-56 w-full justify-center rounded-[0.5rem] bg-slate-600">
                <Image
                  src={TShirt}
                  alt="T-shirt Deidara"
                  className="h-full w-auto"
                />
              </div>
              <h1 className="ml-1 text-xl font-semibold text-principal-550">
                Camiseta Deidara
              </h1>
              <div className="flex flex-col items-center self-end">
                <p>
                  <b>R$:120,00</b> no Pix
                </p>
                <p className="text-center">
                  R$ 84,90 em até <b>2x</b> de <b>R$ 42,45</b> sem juros
                </p>
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
