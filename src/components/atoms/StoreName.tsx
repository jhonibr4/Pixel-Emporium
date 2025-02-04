interface ITitle {
  title: string
}

export function StoreName({ title }: ITitle) {
  return (
    <h1 className="font-Roboto rounded-xl bg-slate-900 px-10 py-8 text-center text-5xl font-bold text-primary-550">
      {title}
    </h1>
  )
}
