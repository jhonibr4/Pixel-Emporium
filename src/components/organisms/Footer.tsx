import Image from 'next/image'
import Logo from '../../assets/Logo.svg'
import { ButtonSocialMedia } from '../molecules/ButtonSocialMedia'
import IconFacebook from '../../assets/Icons/Facebook.png'
import IconInstagram from '../../assets/Icons/Instagram.png'
import IconLinkedIn from '../../assets/Icons/LinkedIn.png'
import IconBehance from '../../assets/Icons/Behance.png'
import ImageAnya from '../../assets/Anya.png'

export function Footer() {
  return (
    <footer className=" flex h-64 w-full grow bg-slate-900">
      <div className=" flex size-14 h-full grow flex-col items-center justify-center gap-3">
        <Image src={Logo} alt="Logo Footer" />
        <h1>© 2023 Pixel Emporium, Todos os direitos reservados.</h1>
      </div>
      <div className="relative mt-10 flex size-14 h-full grow items-center justify-center">
        <Image
          src={ImageAnya}
          alt="Image Anya"
          className="absolute -top-[1.35rem] w-40"
        />
        <div className=" flex min-h-11 min-w-24 gap-7 rounded-2xl bg-primary-550 p-2">
          <ButtonSocialMedia
            socialMedia="Behance"
            socialURL="#"
            logo={IconBehance}
          />
          <ButtonSocialMedia
            socialMedia="Instagram"
            socialURL="#"
            logo={IconInstagram}
          />
          <ButtonSocialMedia
            socialMedia="Facebook"
            socialURL="#"
            logo={IconFacebook}
          />
          <ButtonSocialMedia
            socialMedia="LinkedIn"
            socialURL="#"
            logo={IconLinkedIn}
          />
        </div>
      </div>
    </footer>
  )
}
