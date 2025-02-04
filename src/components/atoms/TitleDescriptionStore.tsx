interface ITitleDescriptionStore {
  title: string
}

export function TitleDescriptionStore({ title }: ITitleDescriptionStore) {
  return (
    <p className="font-Roboto my-5 text-3xl font-bold text-primary-550">
      {title}
    </p>
  )
}
