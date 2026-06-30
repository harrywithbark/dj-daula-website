interface FooterLogoProps {
  className?: string
}

export default function FooterLogo({ className = '' }: FooterLogoProps) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* The A-circle mark — custom SVG */}
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        aria-hidden="true"
        className="flex-shrink-0"
      >
        {/* Outer circle */}
        <circle
          cx="18"
          cy="18"
          r="16"
          stroke="#CE1F1F"
          strokeWidth="2"
          fill="none"
          style={{ filter: 'drop-shadow(0 0 4px rgba(206,31,31,0.6))' }}
        />
        {/* Inner A shape */}
        <path
          d="M13 26L18 10L23 26"
          stroke="#CE1F1F"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M14.8 21H21.2"
          stroke="#CE1F1F"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {/* Text mark */}
      <div className="flex flex-col leading-none">
        <span
          className="text-[10px] font-bold tracking-[0.35em] uppercase"
          style={{ color: '#999' }}
        >
          DJ
        </span>
        <span
          className="text-xl font-black tracking-[0.12em] uppercase"
          style={{ color: '#fff' }}
        >
          DAULA
        </span>
      </div>
    </div>
  )
}
