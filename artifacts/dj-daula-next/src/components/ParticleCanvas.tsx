'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  alpha: number
  color: string
  glowColor: string
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

    const colorDefs = [
      { base: 'rgba(206,31,31,', glow: 'rgba(255,40,40,' },
      { base: 'rgba(180,0,255,', glow: 'rgba(220,0,255,' },
      { base: 'rgba(255,215,0,', glow: 'rgba(255,220,50,' },
      { base: 'rgba(206,31,31,', glow: 'rgba(255,40,40,' },
      { base: 'rgba(206,31,31,', glow: 'rgba(255,40,40,' },
    ]

    const particles: Particle[] = []
    const count = isTouchDevice ? 45 : 90
    const w = canvas.clientWidth
    const h = canvas.clientHeight

    for (let i = 0; i < count; i++) {
      const c = colorDefs[Math.floor(Math.random() * colorDefs.length)]
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5 - 0.1,
        radius: Math.random() * 2.5 + 0.8,
        alpha: Math.random() * 0.5 + 0.3,
        color: c.base,
        glowColor: c.glow,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.025 + 0.01,
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
          if (dist < 100) {
            const lineAlpha = (1 - dist / 100) * 0.22
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(206,31,31,${lineAlpha})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      for (const p of particles) {
        // Mouse repulsion
        const mdx = p.x - mouseX
        const mdy = p.y - mouseY
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy)
        if (mDist < 130 && !isTouchDevice) {
          const force = (130 - mDist) / 130
          p.vx += (mdx / mDist) * force * 0.35
          p.vy += (mdy / mDist) * force * 0.35
        }

        p.vx *= 0.994
        p.vy *= 0.994

        p.x += p.vx
        p.y += p.vy
        p.pulse += p.pulseSpeed

        if (p.x < -10) p.x = cw + 10
        if (p.x > cw + 10) p.x = -10
        if (p.y < -10) p.y = ch + 10
        if (p.y > ch + 10) p.y = -10

        const pulseAlpha = p.alpha + Math.sin(p.pulse) * 0.15
        const r = p.radius + Math.sin(p.pulse) * 0.4
        const clampedAlpha = Math.max(0.15, Math.min(0.85, pulseAlpha))

        // Outer bloom (largest, most diffuse)
        const bloomGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 12)
        bloomGrad.addColorStop(0, `${p.glowColor}0.08)`)
        bloomGrad.addColorStop(1, `${p.glowColor}0)`)
        ctx.beginPath()
        ctx.arc(p.x, p.y, r * 12, 0, Math.PI * 2)
        ctx.fillStyle = bloomGrad
        ctx.fill()

        // Mid glow halo
        const haloGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 5)
        haloGrad.addColorStop(0, `${p.glowColor}0.25)`)
        haloGrad.addColorStop(1, `${p.glowColor}0)`)
        ctx.beginPath()
        ctx.arc(p.x, p.y, r * 5, 0, Math.PI * 2)
        ctx.fillStyle = haloGrad
        ctx.fill()

        // Core particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2)
        ctx.fillStyle = `${p.color}${clampedAlpha})`
        ctx.fill()

        // Bright hot center
        ctx.beginPath()
        ctx.arc(p.x, p.y, r * 0.4, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${clampedAlpha * 0.8})`
        ctx.fill()
      }

      animId = requestAnimationFrame(draw)
    }

    animId = requestAnimationFrame(draw)

    const onResize = () => { resize() }
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
