interface ISubtitle {
  text: string
}

export function TextHome({ text }: ISubtitle) {
  return (
    <h2 className="font-Roboto py-8 text-center text-5xl font-bold text-slate-900">
      {text}
    </h2>
  )
}
