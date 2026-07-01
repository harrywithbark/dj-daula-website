import { useLocation } from 'wouter'
import { ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const [location] = useLocation()

  return (
    <div key={location} className="page-enter">
      {children}
    </div>
  )
}
