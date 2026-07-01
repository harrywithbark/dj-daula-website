import ScrollReveal from '@/components/ScrollReveal'

interface ServiceItem {
  title: string
  description: string
  idealFor: string
  badge?: string
}

interface ServicesListProps {
  items: ServiceItem[]
  columns?: 2 | 3
}

function ServiceCard({ item, index }: { item: ServiceItem; index: number }) {
  return (
    <ScrollReveal delay={index * 0.06} y={20}>
      <article className="group relative bg-daula-black border border-daula-gray-mid p-6 flex flex-col gap-4 h-full overflow-hidden hover:border-daula-red/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(206,31,31,0.09)]">

        {/* Left-border red accent on hover — matches Positioning pillars */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[2px] bg-daula-red scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"
          aria-hidden="true"
          style={{ boxShadow: '0 0 8px rgba(206,31,31,0.6)' }}
        />

        {item.badge && (
          <span className="self-start text-[10px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 border border-daula-red/30 bg-daula-red/8 text-daula-red">
            {item.badge}
          </span>
        )}

        <div className="flex-1">
          <h3 className="text-lg font-black text-daula-white mb-2 group-hover:text-daula-red transition-colors duration-200 tracking-tight">
            {item.title}
          </h3>
          <p className="text-sm text-daula-gray-light leading-relaxed">
            {item.description}
          </p>
        </div>

        <div className="pt-4 border-t border-daula-gray-mid">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-daula-gray-light">
            Ideal for{' '}
            <span className="text-daula-white">{item.idealFor}</span>
          </p>
        </div>
      </article>
    </ScrollReveal>
  )
}

export default function ServicesList({ items, columns = 3 }: ServicesListProps) {
  const gridClass =
    columns === 2
      ? 'grid grid-cols-1 sm:grid-cols-2 gap-5'
      : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'

  return (
    <div className={gridClass}>
      {items.map((item, i) => (
        <ServiceCard key={item.title} item={item} index={i} />
      ))}
    </div>
  )
}
