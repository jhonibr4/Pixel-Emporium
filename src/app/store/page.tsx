import Menu from '@/components/organisms/Menu'
import { WrapperProducts } from '@/components/organisms/WrapperProducts'

export default function Store() {
  return (
    <main className="flex h-screen max-w-full flex-col items-center">
      <Menu />
      <h1 className="mt-12 text-4xl font-bold text-primary-550">Produtos</h1>

      <div>
        <WrapperProducts />
      </div>
    </main>
  )
}
