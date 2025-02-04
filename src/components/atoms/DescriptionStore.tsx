interface IDescriptionStore {
  description: string
}

export function DescriptionStore({ description }: IDescriptionStore) {
  return <p className="font-Roboto text-lg text-white">{description}</p>
}
