export default function SectionDivider({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
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
