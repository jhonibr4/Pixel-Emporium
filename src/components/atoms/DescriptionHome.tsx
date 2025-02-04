interface IDescription {
  description: string
}

export function DescriptionHome({ description }: IDescription) {
  return (
    <p className="font-Roboto text-3xl font-bold text-slate-900">
      {description}
    </p>
  )
}
