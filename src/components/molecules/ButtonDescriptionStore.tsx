interface IButtonLink {
  link: string
}

export function ButtonDescriptionStore({ link }: IButtonLink) {
  return (
    <a
      href={link}
      className=" mt-4 flex h-14 w-52 items-center justify-center rounded-2xl bg-primary-550 text-2xl font-bold text-slate-900"
    >
      Compre Já
    </a>
  )
}
