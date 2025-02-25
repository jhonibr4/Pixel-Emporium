import Image from "next/image";
import ImgAnimes from "../../assets/Image Character Animes.png";
import { DescriptionStore } from "../atoms/DescriptionStore";
import { TitleDescriptionStore } from "../atoms/TitleDescriptionStore";
import { ButtonDescriptionStore } from "../molecules/ButtonDescriptionStore";

export function PresentationStore() {
  return (
    <div className="relative flex  h-full w-full gap-12">
      <div className="ml-32 flex h-full  flex-col justify-center">
        <div className=" w-11/12">
          <TitleDescriptionStore title="Blusas Personalizadas" />
          <DescriptionStore description="Expresse sua paixão geek com estilo! Descubra nossas blusas personalizadas na Pixel Emporium, criadas com os melhores designs inspirados nos universos dos games, filmes, séries e quadrinhos. Com tecidos de alta qualidade e estampas exclusivas, nossas blusas são a escolha perfeita para os verdadeiros fãs." />
        </div>
        <div className=" w-11/12">
          <TitleDescriptionStore title="Mangás e HQ’s" />
          <DescriptionStore description="Desbrave novas aventuras nas páginas das melhores mangas e HQ's na Pixel Emporium! Nossa loja geek é o destino perfeito para os aficionados por quadrinhos, com uma ampla seleção de títulos aclamados e lançamentos imperdíveis. Explore os mundos fascinantes dos super-heróis, dos mangas japoneses e das histórias épicas, mergulhando em tramas envolventes e ilustrações de tirar o fôlego." />
        </div>
        <div className=" w-11/12">
          <TitleDescriptionStore title="Action Figures" />
          <DescriptionStore description="Transforme sua coleção em uma verdadeira obra de arte com nossas incríveis action figures na Pixel Emporium! Nossas figuras são cuidadosamente selecionadas para oferecer aos fãs geek os personagens mais icônicos dos universos dos filmes, séries, games e quadrinhos." />
          <ButtonDescriptionStore link="#" />
        </div>
      </div>
      <Image src={ImgAnimes} alt="Imagem de animes" className="mr-32" />
    </div>
  );
}
