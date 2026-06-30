import { useEffect, useRef } from 'react'

interface BeatVisualizerProps {
  barCount?: number
  height?: number
  className?: string
}

export default function BeatVisualizer({
  barCount = 48,
  height = 40,
  className = '',
}: BeatVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    const parent = canvas.parentElement
    if (!parent) return

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w = parent.clientWidth
      canvas.width = w * dpr
      canvas.height = height * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${height}px`
      ctx.scale(dpr, dpr)
    }
    resize()

    const colors = [
      'rgba(206,31,31,',
      'rgba(180,0,255,',
      'rgba(201,168,76,',
      'rgba(206,31,31,',
      'rgba(180,0,255,',
    ]

    const bars: number[] = new Array(barCount).fill(0)
    const targets: number[] = new Array(barCount).fill(0)
    let tick = 0

    const draw = () => {
      const w = parent.clientWidth
      const h = height
      ctx.clearRect(0, 0, w, h)

      tick++
      const barW = w / barCount
      const gap = 2
      const actualBarW = Math.max(1, barW - gap)

      for (let i = 0; i < barCount; i++) {
        // Random beat target that changes periodically
        if (tick % Math.floor(4 + Math.random() * 6) === 0) {
          targets[i] = Math.random() * 0.7 + 0.15
        }
        // Smooth easing toward target
        bars[i] += (targets[i] - bars[i]) * 0.12

        const barH = bars[i] * h
        const x = i * barW + gap / 2
        const y = h - barH

        const colorBase = colors[i % colors.length]
        const alpha = 0.3 + bars[i] * 0.7

        // Bar body
        ctx.fillStyle = `${colorBase}${alpha})`
        ctx.fillRect(x, y, actualBarW, barH)

        // Top glow dot
        ctx.fillStyle = `${colorBase}${alpha + 0.15})`
        ctx.fillRect(x, y, actualBarW, 2)

        // Subtle glow at top of tall bars
        if (bars[i] > 0.5) {
          ctx.shadowColor = `${colorBase}0.5)`
          ctx.shadowBlur = 6
          ctx.fillRect(x, y, actualBarW, 1)
          ctx.shadowBlur = 0
        }
      }

      animId = requestAnimationFrame(draw)
    }

    animId = requestAnimationFrame(draw)
    const onResize = () => resize()
    window.addEventListener('resize', onResize, { passive: true })

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
    }
  }, [barCount, height])

  return (
    <canvas
      ref={canvasRef}
      className={`w-full block ${className}`}
      aria-hidden="true"
    />
  )
}
