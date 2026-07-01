import { useEffect, useRef } from 'react'

interface BeatVisualizerProps {
  mode?: 'bars' | 'waveform' | 'radial'
  theme?: 'dark' | 'light'
  barCount?: number
  height?: number
  className?: string
  speed?: number
}

export default function BeatVisualizer({
  mode = 'bars',
  theme = 'dark',
  barCount = 48,
  height = 40,
  className = '',
  speed = 1,
}: BeatVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const parent = canvas.parentElement
    if (!parent) return

    let animId: number
    let rotation = 0
    let tick = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w = parent.clientWidth
      canvas.width = w * dpr
      canvas.height = height * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()

    // ── Color helpers ────────────────────────────────────────────────
    const DARK_COLORS  = ['rgba(206,31,31,', 'rgba(180,79,255,', 'rgba(255,216,77,']
    const LIGHT_COLORS = ['rgba(180,20,20,',  'rgba(110,0,190,',  'rgba(160,120,0,']

    const getColor = (index: number, alpha: number): string => {
      const palette = theme === 'dark' ? DARK_COLORS : LIGHT_COLORS
      return `${palette[index % palette.length]}${alpha})`
    }

    // ── Shared simulation state ──────────────────────────────────────
    const values  = new Array(barCount).fill(0) as number[]
    const targets = new Array(barCount).fill(0) as number[]

    const updateSimulation = () => {
      tick++
      const isBeat = tick % 61 === 0 || tick % 67 === 0

      for (let i = 0; i < barCount; i++) {
        const ratio = i / barCount
        // Bass (left) changes slower, treble (right) faster
        const updateEvery = Math.floor(3 + ratio * 5)

        if (tick % updateEvery === 0 || Math.random() < 0.015) {
          const bandFactor = ratio < 0.3 ? 1.0 : ratio < 0.7 ? 0.7 : 0.45
          let t = (Math.random() * 0.72 + 0.1) * bandFactor * speed
          if (isBeat && ratio < 0.4) t = Math.min(1, t * 1.55)
          targets[i] = Math.min(1, t)
        }
        // Treble eases faster
        const ease = 0.08 + ratio * 0.06
        values[i] += (targets[i] - values[i]) * ease
      }
    }

    // ── BARS renderer ────────────────────────────────────────────────
    const drawBars = () => {
      const w = parent.clientWidth
      const h = height
      ctx.clearRect(0, 0, w, h)
      updateSimulation()

      const barW      = w / barCount
      const gap       = barW > 4 ? 2 : 0.5
      const actualBarW = Math.max(1, barW - gap)

      for (let i = 0; i < barCount; i++) {
        const barH  = values[i] * h
        const x     = i * barW + gap / 2
        const y     = h - barH
        const alpha = 0.35 + values[i] * 0.65

        const grad = ctx.createLinearGradient(x, y, x, h)
        grad.addColorStop(0, getColor(i, Math.min(1, alpha + 0.1)))
        grad.addColorStop(1, getColor(i, alpha * 0.35))
        ctx.fillStyle = grad
        ctx.fillRect(x, y, actualBarW, barH)

        // Bright top cap
        ctx.fillStyle = getColor(i, Math.min(1, alpha + 0.25))
        ctx.fillRect(x, y, actualBarW, 2)

        // Glow halo on tall bars
        if (values[i] > 0.55 && theme === 'dark') {
          ctx.shadowColor = getColor(i, 0.55)
          ctx.shadowBlur  = 9
          ctx.fillRect(x, y, actualBarW, 1)
          ctx.shadowBlur  = 0
        }
      }
    }

    // ── WAVEFORM renderer ────────────────────────────────────────────
    const drawWaveform = () => {
      const w = parent.clientWidth
      const h = height
      ctx.clearRect(0, 0, w, h)
      updateSimulation()

      const midY      = h / 2
      const amplitude = h * 0.42

      // Build point list (midpoints method for smooth catmull-rom-like curve)
      const pts: [number, number][] = values.map((v, i) => [
        (i / (barCount - 1)) * w,
        midY + (v - 0.5) * amplitude * 2,
      ])

      // ── Fill (closed path below the curve) ──
      const strokeR = theme === 'dark' ? 'rgba(206,31,31,' : 'rgba(180,20,20,'

      ctx.beginPath()
      ctx.moveTo(0, pts[0][1])
      for (let i = 1; i < pts.length; i++) {
        const [px, py] = pts[i - 1]
        const [cx2, cy2] = pts[i]
        const mx = (px + cx2) / 2
        ctx.quadraticCurveTo(px, py, mx, (py + cy2) / 2)
      }
      ctx.lineTo(w, pts[pts.length - 1][1])
      ctx.lineTo(w, h)
      ctx.lineTo(0, h)
      ctx.closePath()

      const fillGrad = ctx.createLinearGradient(0, midY - amplitude, 0, h)
      fillGrad.addColorStop(0, `${strokeR}${theme === 'dark' ? '0.18' : '0.1'})`)
      fillGrad.addColorStop(1, `${strokeR}0)`)
      ctx.fillStyle = fillGrad
      ctx.fill()

      // ── Stroke ──
      ctx.beginPath()
      ctx.moveTo(0, pts[0][1])
      for (let i = 1; i < pts.length; i++) {
        const [px, py] = pts[i - 1]
        const [cx2, cy2] = pts[i]
        const mx = (px + cx2) / 2
        ctx.quadraticCurveTo(px, py, mx, (py + cy2) / 2)
      }
      ctx.lineTo(w, pts[pts.length - 1][1])

      ctx.lineWidth   = 2
      ctx.strokeStyle = `${strokeR}0.9)`
      if (theme === 'dark') {
        ctx.shadowColor = `${strokeR}0.55)`
        ctx.shadowBlur  = 10
      }
      ctx.stroke()
      ctx.shadowBlur = 0
    }

    // ── RADIAL renderer ──────────────────────────────────────────────
    const drawRadial = () => {
      const w = parent.clientWidth
      const h = height
      ctx.clearRect(0, 0, w, h)
      updateSimulation()

      rotation += 0.004 * speed

      const cx     = w / 2
      const cy     = h / 2
      const maxR   = Math.min(w, h) * 0.44
      const innerR = maxR * 0.32

      ctx.save()
      ctx.translate(cx, cy)
      ctx.rotate(rotation)

      for (let i = 0; i < barCount; i++) {
        const angle     = (i / barCount) * Math.PI * 2
        const barLength = innerR + values[i] * (maxR - innerR)
        const x1 = Math.cos(angle) * innerR
        const y1 = Math.sin(angle) * innerR
        const x2 = Math.cos(angle) * barLength
        const y2 = Math.sin(angle) * barLength
        const alpha = 0.3 + values[i] * 0.7

        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.lineWidth   = Math.max(1.5, 3.5 * values[i])
        ctx.strokeStyle = getColor(i, alpha)

        if (theme === 'dark' && values[i] > 0.5) {
          ctx.shadowColor = getColor(i, 0.45)
          ctx.shadowBlur  = 10
        }
        ctx.stroke()
        ctx.shadowBlur = 0
      }

      // Inner circle accent
      ctx.beginPath()
      ctx.arc(0, 0, innerR * 0.6, 0, Math.PI * 2)
      ctx.strokeStyle = theme === 'dark'
        ? `rgba(206,31,31,0.25)`
        : `rgba(180,20,20,0.2)`
      ctx.lineWidth = 1
      ctx.stroke()

      ctx.restore()
    }

    // ── Dispatch ─────────────────────────────────────────────────────
    const dispatch = () => {
      if (mode === 'bars') drawBars()
      else if (mode === 'waveform') drawWaveform()
      else drawRadial()
    }

    if (prefersReduced) {
      dispatch()
      return
    }

    const loop = () => {
      dispatch()
      animId = requestAnimationFrame(loop)
    }
    animId = requestAnimationFrame(loop)

    window.addEventListener('resize', resize, { passive: true })
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [mode, theme, barCount, height, speed])

  return (
    <canvas
      ref={canvasRef}
      className={`w-full block ${className}`}
      aria-hidden="true"
    />
  )
}
