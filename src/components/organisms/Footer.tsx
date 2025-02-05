import Image from 'next/image'
import Logo from '../../assets/Logo.svg'
import { WrapperSocialMedia } from '../molecules/WrapperSocialMedia'

export function Footer() {
  return (
    <footer className=" flex h-64 w-full grow bg-slate-900">
      <div className=" flex size-14 h-full grow flex-col items-center justify-center gap-3">
        <Image src={Logo} alt="Logo Footer" />
        <h1>© 2023 Pixel Emporium, Todos os direitos reservados.</h1>
      </div>
      <WrapperSocialMedia />
    </footer>
  )
}
