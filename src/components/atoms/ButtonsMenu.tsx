import { ComponentProps } from 'react'

interface IButton extends ComponentProps<'a'> {
  name: string
}
export function ButtonsMenu({ name, ...rest }: IButton) {
  return (
    <a href="" className="text-lg font-medium" {...rest}>
      {name}
    </a>
  )
}
