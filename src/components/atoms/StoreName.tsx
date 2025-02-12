interface ITitle {
  title: string
}

export function StoreName({ title }: ITitle) {
  return (
    <h1 className="font-Roboto text-principal-550 rounded-xl bg-slate-900 px-10 py-8 text-center text-5xl font-bold">
      {title}
    </h1>
  )
}
