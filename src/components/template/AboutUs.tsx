import Image from "next/image";
import FlashImg from "../../assets/Flash.png";

export function AboutUs() {
  return (
    <div className="relative flex max-w-full flex-col items-center bg-slate-800">
      <h1 className="mt-8 text-4xl font-bold text-principal-550">Sobre Nós</h1>
      <p className="mt-4 w-4/5 text-justify text-lg font-bold">
        Na Pixel Emporium, somos um verdadeiro refúgio para os aficionados pela
        cultura geek. Nossa loja é um universo paralelo, onde os amantes de
        games, filmes, quadrinhos e tudo que envolve o universo nerd podem
        encontrar seu lar. Com uma seleção cuidadosa e abrangente de produtos,
        desde camisetas exclusivas até action figures e colecionáveis raros,
        buscamos oferecer um pedacinho desse mundo fantástico para nossos
        clientes. Além disso, promovemos eventos temáticos, sessões de jogos e
        encontros com artistas e escritores renomados, criando um ambiente
        vibrante e acolhedor para os entusiastas da cultura geek.
      </p>
      <div className="relative h-full ">
        <h1 className="custom-text-shadow bottom-0 text-transparent">PIXEL</h1>
        <h2 className="custom-text absolute bottom-16 ml-7">EMPORIUM</h2>
        <Image
          src={FlashImg}
          alt="Imagem do Flash"
          className="absolute bottom-32 right-0 w-80"
        />
      </div>
    </div>
  );
}
