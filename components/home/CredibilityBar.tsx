// TODO: once Google Reviews are collected, swap signal 4 for:
// "⭐ [N] five-star weddings" linked to Google Reviews

const SIGNALS = [
  '15 Years Experience',
  '500+ South Asian Events',
  'Surrey, BC · International',
  'Punjabi · Bollywood · Open Format',
]

export default function CredibilityBar() {
  return (
    <section
      className="bg-daula-gray border-y border-daula-gray-mid py-4"
      aria-label="Credentials"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <ul
          className="flex flex-col sm:flex-row items-center justify-center gap-0"
          role="list"
        >
          {SIGNALS.map((signal, i) => (
            <li
              key={signal}
              className="flex items-center gap-0 w-full sm:w-auto"
            >
              <span className="text-xs md:text-sm font-medium tracking-wide text-daula-white text-center py-2 sm:py-0 sm:px-6 w-full sm:w-auto">
                {signal}
              </span>
              {i < SIGNALS.length - 1 && (
                <span
                  className="hidden sm:block w-px h-5 bg-daula-red/50 flex-shrink-0"
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
