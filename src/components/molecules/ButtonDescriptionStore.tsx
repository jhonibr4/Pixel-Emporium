interface IButtonLink {
  link: string
}

export function ButtonDescriptionStore({ link }: IButtonLink) {
  return (
    <a
      href={link}
      className=" bg-principal-550 mt-4 flex h-14 w-52 items-center justify-center rounded-2xl text-2xl font-bold text-slate-900"
    >
      Compre Já
    </a>
  )
}
