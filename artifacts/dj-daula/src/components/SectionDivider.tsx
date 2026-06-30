export default function SectionDivider({ variant = 'dark' }: { variant?: 'dark' | 'light' | 'neon' }) {
  if (variant === 'neon') {
    return (
      <div className="h-px w-full relative" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, transparent, #CE1F1F 30%, #CE1F1F 70%, transparent)',
            boxShadow: '0 0 8px 1px rgba(206,31,31,0.6), 0 0 24px 4px rgba(206,31,31,0.2)',
          }}
        />
      </div>
    )
  }

  const gradient = variant === 'dark'
    ? 'linear-gradient(to right, transparent, #2A2A2A, transparent)'
    : 'linear-gradient(to right, transparent, #e5e5e5, transparent)'

  return (
    <div
      className="h-px w-full"
      aria-hidden="true"
      style={{ background: gradient }}
    />
  )
}
