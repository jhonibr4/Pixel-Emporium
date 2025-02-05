import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

interface IButtonProducts {
  descriptionImage: string
  imageProduct: StaticImport
  title: string
}

export function ButtonProducts({
  imageProduct,
  title,
  descriptionImage,
}: IButtonProducts) {
  return (
    <button className=" relative flex h-[28rem] w-1/3 items-end justify-center bg-slate-400">
      <label className="custom-text-shadow mt-36 text-[14rem]">{title}</label>
      <Image
        src={imageProduct}
        alt={descriptionImage}
        className="absolute bottom-0 right-0 h-4/5 w-auto"
      />
    </button>
  )
}
