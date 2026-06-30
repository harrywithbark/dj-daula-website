import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  alpha: number
  color: string
  pulse: number
  pulseSpeed: number
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let mouseX = -1000
    let mouseY = -1000
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const parent = canvas.parentElement
      if (!parent) return
      const w = parent.clientWidth
      const h = parent.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.scale(dpr, dpr)
    }
    resize()

    const colors = [
      'rgba(206,31,31,',
      'rgba(180,0,255,',
      'rgba(255,215,0,',
      'rgba(201,168,76,',
    ]

    const particles: Particle[] = []
    const count = isTouchDevice ? 30 : 55
    const w = canvas.clientWidth
    const h = canvas.clientHeight

    for (let i = 0; i < count; i++) {
      const c = colors[Math.floor(Math.random() * colors.length)]
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4 - 0.15,
        radius: Math.random() * 2 + 0.8,
        alpha: Math.random() * 0.35 + 0.15,
        color: c,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
      })
    }

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
    }
    const onLeave = () => {
      mouseX = -1000
      mouseY = -1000
    }

    if (!isTouchDevice) {
      canvas.addEventListener('mousemove', onMove, { passive: true })
      canvas.addEventListener('mouseleave', onLeave, { passive: true })
    }

    const draw = () => {
      const cw = canvas.clientWidth
      const ch = canvas.clientHeight
      ctx.clearRect(0, 0, cw, ch)

      // Draw connection lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i]
          const p2 = particles[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            const lineAlpha = (1 - dist / 120) * 0.12
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(255,255,255,${lineAlpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      for (const p of particles) {
        // Mouse repulsion
        const mdx = p.x - mouseX
        const mdy = p.y - mouseY
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy)
        if (mDist < 120 && !isTouchDevice) {
          const force = (120 - mDist) / 120
          p.vx += (mdx / mDist) * force * 0.3
          p.vy += (mdy / mDist) * force * 0.3
        }

        // Damping
        p.vx *= 0.995
        p.vy *= 0.995

        p.x += p.vx
        p.y += p.vy
        p.pulse += p.pulseSpeed

        // Wrap
        if (p.x < -10) p.x = cw + 10
        if (p.x > cw + 10) p.x = -10
        if (p.y < -10) p.y = ch + 10
        if (p.y > ch + 10) p.y = -10

        const pulseAlpha = p.alpha + Math.sin(p.pulse) * 0.08
        const r = p.radius + Math.sin(p.pulse) * 0.3

        ctx.beginPath()
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2)
        ctx.fillStyle = `${p.color}${Math.max(0.08, Math.min(0.5, pulseAlpha))})`
        ctx.fill()

        // Glow
        ctx.beginPath()
        ctx.arc(p.x, p.y, r * 3, 0, Math.PI * 2)
        ctx.fillStyle = `${p.color}0.04)`
        ctx.fill()
      }

      animId = requestAnimationFrame(draw)
    }

    animId = requestAnimationFrame(draw)

    const onResize = () => {
      resize()
    }
    window.addEventListener('resize', onResize, { passive: true })

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
      if (!isTouchDevice) {
        canvas.removeEventListener('mousemove', onMove)
        canvas.removeEventListener('mouseleave', onLeave)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      aria-hidden="true"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}
