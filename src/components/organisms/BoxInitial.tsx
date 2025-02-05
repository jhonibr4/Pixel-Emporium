import Link from 'next/link'
import { DescriptionHome } from '../atoms/DescriptionHome'
import { StoreName } from '../atoms/StoreName'
import { TextHome } from '../atoms/TextHome'

export function BoxInitial() {
  return (
    <div className="custom-path flex w-3/5 items-center justify-center rounded-sm bg-primary-550">
      <div className="mr-28 mt-20 w-1/2">
        <StoreName title="Pixel Emporium" />
        <TextHome text="O paraíso geek!" />
        <DescriptionHome
          description="Bem-vindo ao Pixel Emporium, o destino perfeito para os amantes da cultura
        geek!"
        />
        <Link
          href="/store"
          className=" mt-6 rounded-full bg-slate-900 px-8 py-2 text-xl font-bold text-white"
        >
          Conheça já
        </Link>
      </div>
    </div>
  )
}
