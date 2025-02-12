interface ITitleDescriptionStore {
  title: string
}

export function TitleDescriptionStore({ title }: ITitleDescriptionStore) {
  return (
    <p className="font-Roboto text-principal-550 my-5 text-3xl font-bold">
      {title}
    </p>
  )
}
