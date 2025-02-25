import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface IButtonProducts {
  descriptionImage: string;
  imageProduct: StaticImport;
  title: string;
}

export function ButtonProducts({
  imageProduct,
  title,
  descriptionImage,
}: IButtonProducts) {
  return (
    <a className=" relative flex h-[22rem] w-1/2 items-end justify-start overflow-hidden border-2 border-gray-700">
      <label className="custom-text-shadow ml-12 whitespace-pre-line text-start text-[10rem] leading-none text-transparent">
        {title}
      </label>
      <Image
        src={imageProduct}
        alt={descriptionImage}
        className="absolute bottom-0 right-0 h-full w-auto"
      />
    </a>
  );
}
