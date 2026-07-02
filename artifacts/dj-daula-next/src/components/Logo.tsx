import Link from 'next/link'

interface LogoProps {
  variant?: 'dark' | 'light'
  accent?: 'red' | 'gold'
  compact?: boolean
  href?: string
  className?: string
  imageOnly?: boolean
}

export default function Logo({
  variant = 'dark',
  accent = 'red',
  compact = false,
  href = '/',
  className = '',
  imageOnly = false,
}: LogoProps) {
  const textColor = variant === 'dark' ? 'text-daula-white' : 'text-daula-black'
  const underlineColor = accent === 'red' ? 'bg-daula-red' : 'bg-daula-gold'

  const imageLogo = (
    <img
      src="/logo-da.png"
      alt="DJ Daula"
      className={`object-contain ${compact ? 'w-10 h-10' : 'w-12 h-12'}`}
    />
  )

  const textLogo = compact ? (
    <span className="relative inline-flex flex-col items-center">
      <span className={`text-2xl font-black tracking-[0.05em] ${textColor} leading-none`}>
        D
      </span>
      <span className={`${underlineColor} mt-[3px]`} style={{ height: '2px', width: '60%' }} />
    </span>
  ) : (
    <span className="relative inline-flex flex-col items-start">
      <span
        className={`text-xl font-black tracking-[0.18em] uppercase ${textColor} leading-none`}
      >
        DAULA
      </span>
      <span
        className={`${underlineColor} mt-[4px]`}
        style={{ height: '2px', width: '50%' }}
      />
    </span>
  )

  const content = imageOnly ? imageLogo : textLogo

  if (href) {
    return (
      <Link href={href} className={`inline-flex items-center ${className}`} aria-label="DJ Daula — Home">
        {content}
      </Link>
    )
  }

  return (
    <span className={`inline-flex items-center ${className}`}>
      {content}
    </span>
  )
}
