import Image from 'next/image'
import Alita from '../../assets/Alita.png'
import { BoxInitial } from '../organisms/BoxInitial'

export function Home() {
  return (
    <div className="flex h-screen w-full flex-row ">
      <BoxInitial></BoxInitial>
      <Image
        src={Alita}
        alt="Imagem Alita"
        className="absolute bottom-0 right-48 -z-10 w-1/3"
      />
    </div>
  )
}
