'use client'

import { useState } from 'react'

interface ImageSkeletonProps {
  src: string
  alt: string
  className?: string
  containerClassName?: string
  aspectRatio?: string
  caption?: string
  priority?: boolean
}

export default function ImageSkeleton({
  src,
  alt,
  className = '',
  containerClassName = '',
  aspectRatio,
  caption,
  priority = false,
}: ImageSkeletonProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <figure className={`relative overflow-hidden ${containerClassName}`} style={aspectRatio ? { aspectRatio } : undefined}>
      {!loaded && (
        <div className="absolute inset-0 bg-daula-gray animate-pulse" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-daula-gray-mid/30 to-transparent animate-shimmer" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setLoaded(true)}
        className={`transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      />
      {caption && (
        <figcaption className="absolute inset-0 bg-daula-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
          <span className="text-xs text-daula-white leading-snug">{caption}</span>
        </figcaption>
      )}
    </figure>
  )
}
