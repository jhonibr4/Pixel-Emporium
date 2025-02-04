import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

interface IButtonsSocialMedia {
  socialURL: string
  logo: StaticImport
  socialMedia: string
}

export function ButtonSocialMedia({
  socialURL,
  logo,
  socialMedia,
}: IButtonsSocialMedia) {
  return (
    <a
      href={socialURL}
      className="flex size-12 items-center justify-center rounded-2xl bg-slate-900 p-2"
    >
      <Image src={logo} alt={socialMedia} />
    </a>
  )
}
