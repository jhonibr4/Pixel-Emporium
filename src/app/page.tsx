import Menu from '@/components/organisms/Menu'
import { AboutUs } from '@/components/template/AboutUs'
import { PresentationStore } from '@/components/template/PresentationStore'
import { Home } from '@/components/template/Home'
import { Footer } from '@/components/organisms/Footer'

export default function HomePage() {
  return (
    <main className="h-screen max-w-full">
      <Menu></Menu>
      <Home />
      <AboutUs />
      <PresentationStore />
      <Footer />
    </main>
  )
}
