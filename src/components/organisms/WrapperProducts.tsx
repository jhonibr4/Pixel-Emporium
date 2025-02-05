import { ButtonProducts } from '../molecules/ButtonProducts'

import TShirt from '../../assets/T-shirt Deidara.png'

export function WrapperProducts() {
  return (
    <div className="mt-10 flex w-screen flex-wrap">
      <ButtonProducts
        descriptionImage="Image T-Shirts"
        title="T-Shirt"
        imageProduct={TShirt}
      />
      <ButtonProducts
        descriptionImage="Image T-Shirts"
        title="T-Shirt"
        imageProduct={TShirt}
      />
      <ButtonProducts
        descriptionImage="Image T-Shirts"
        title="T-Shirt"
        imageProduct={TShirt}
      />
      <ButtonProducts
        descriptionImage="Image T-Shirts"
        title="T-Shirt"
        imageProduct={TShirt}
      />
    </div>
  )
}
