import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="pt-16 min-h-[60vh] flex items-center">
      <div className="max-w-7xl mx-auto px-5 md:px-8 text-center">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-daula-red mb-4">404</p>
        <h1 className="text-4xl md:text-6xl font-black text-daula-white mb-6">Page not found.</h1>
        <p className="text-daula-gray-light mb-8">The floor you were looking for doesn&apos;t exist.</p>
        <Link href="/" className="bg-daula-red text-daula-white font-semibold tracking-wide px-8 py-3.5 text-sm neon-btn-red">
          Back to the main stage &rarr;
        </Link>
      </div>
    </main>
  )
}
