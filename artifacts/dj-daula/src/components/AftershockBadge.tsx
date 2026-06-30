interface AftershockBadgeProps {
  className?: string
  size?: number
}

export default function AftershockBadge({ className = '', size = 20 }: AftershockBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs text-daula-gray-light tracking-widest uppercase ${className}`}
      aria-label="Powered by Aftershock Roadshow"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="10" cy="10" r="9" stroke="#CE1F1F" strokeWidth="1.5" />
        <text
          x="10"
          y="14"
          textAnchor="middle"
          fontSize="10"
          fontWeight="700"
          fill="#CE1F1F"
          fontFamily="Inter, sans-serif"
          letterSpacing="0"
        >
          A
        </text>
      </svg>
      <span>Aftershock Roadshow</span>
    </span>
  )
}
