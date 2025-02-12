import Menu from '../../components/organisms/Menu'
import { WrapperProducts } from '../../components/organisms/WrapperProducts'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export default function Store() {
  return (
    <main className="flex h-screen max-w-full flex-col items-center">
      <Menu />
      <h1 className="text-principal-550 mt-12 text-4xl font-bold">Produtos</h1>

      <div>
        <WrapperProducts />

        <Carousel>
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              ...
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              ...
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              ...
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </main>
  )
}
