import { ComponentProps } from 'react'

interface IButtonsLogin extends ComponentProps<'button'> {
  text: string
}

export function ButtonsLogin({ text, ...rest }: IButtonsLogin) {
  return <button {...rest}>{text}</button>
}
