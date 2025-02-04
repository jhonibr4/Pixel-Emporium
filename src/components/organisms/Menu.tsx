import Logo from '../../assets/Logo.svg'
import Image from 'next/image'
import { WrapperLogin } from '../molecules/WrapperLogin'
import { NavMenu } from '../molecules/NavMenu'

export default function Menu() {
  return (
    <header className="absolute z-10 flex h-20 w-full items-center justify-around bg-slate-900">
      <Image src={Logo} alt="Imagem do Logo" className="w-24" />
      <NavMenu></NavMenu>
      <WrapperLogin />
    </header>
  )
}
