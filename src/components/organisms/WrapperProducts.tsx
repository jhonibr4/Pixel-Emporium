import { ButtonProducts } from '../molecules/ButtonProducts'

import ImgTShirt from '../../assets/T-shirt Deidara.png'
import ImgActionFigure from '../../assets/Sub-zero.png'
import ImgMoletom from '../../assets/Moleton Gojo.png'
import ImgManga from '../../assets/Mangas.png'

export function WrapperProducts() {
  return (
    <div className="mt-10 flex w-screen flex-wrap">
      <ButtonProducts
        descriptionImage="Image T-Shirts"
        title="T-Shirt"
        imageProduct={ImgTShirt}
      />
      <ButtonProducts
        descriptionImage="Image Action Figure"
        title={'Action \nFigure'}
        imageProduct={ImgActionFigure}
      />
      <ButtonProducts
        descriptionImage="Image Moletom"
        title="Moletom"
        imageProduct={ImgMoletom}
      />
      <ButtonProducts
        descriptionImage="Image Mangá e HQ"
        title={`Mangás \nHQ's`}
        imageProduct={ImgManga}
      />
    </div>
  )
}
