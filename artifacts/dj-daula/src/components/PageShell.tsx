import Nav from '@/components/home/Nav'
import Footer from '@/components/home/Footer'

interface PageShellProps {
  children: React.ReactNode
}

export default function PageShell({ children }: PageShellProps) {
  return (
    <>
      <Nav />
      <main className="pt-16">{children}</main>
      <Footer />
    </>
  )
}
