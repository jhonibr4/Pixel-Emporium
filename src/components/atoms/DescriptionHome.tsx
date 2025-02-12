interface IDescription {
  description: string
}

export function DescriptionHome({ description }: IDescription) {
  return (
    <p className="font-Roboto mb-8 text-3xl font-bold text-slate-900">
      {description}
    </p>
  )
}
