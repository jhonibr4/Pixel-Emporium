import { ButtonsMenu } from "../atoms/ButtonsMenu";

export function NavMenu() {
  return (
    <nav className=" mr-24 flex w-1/2 justify-center gap-4">
      <ButtonsMenu name="Pagina Inicial" />
      <ButtonsMenu name="Catálogo de Produtos" />
      <ButtonsMenu name="Sobre Nós" />
      <ButtonsMenu name="Animes" />
      <ButtonsMenu name="HQ's" />
      <ButtonsMenu name="Contato" />
    </nav>
  );
}
