import { useState, useEffect, useCallback } from 'react'

interface GalleryImage {
  src: string
  alt: string
}

interface Props {
  images: GalleryImage[]
  className?: string
}

export default function LightboxGallery({ images, className = '' }: Props) {
  const [active, setActive] = useState<number | null>(null)

  const close = useCallback(() => setActive(null), [])

  const prev = useCallback(() =>
    setActive(i => i !== null ? (i - 1 + images.length) % images.length : null),
    [images.length]
  )

  const next = useCallback(() =>
    setActive(i => i !== null ? (i + 1) % images.length : null),
    [images.length]
  )

  useEffect(() => {
    if (active === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [active, close, prev, next])

  useEffect(() => {
    document.body.style.overflow = active !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [active])

  return (
    <>
      <div className={`grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 ${className}`}>
        {images.map(({ src, alt }, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`reveal-scale delay-${Math.min(i * 100, 500)} block rounded-2xl overflow-hidden aspect-square group shadow-sm hover:shadow-xl transition-all duration-300 w-full cursor-zoom-in`}
            aria-label={`View ${alt}`}
          >
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              decoding="async"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.92)' }}
          onClick={close}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors z-10"
            onClick={close}
            aria-label="Close"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '36px' }}>close</span>
          </button>

          {/* Prev */}
          <button
            className="absolute left-3 md:left-6 text-white/60 hover:text-white transition-colors z-10 p-2"
            onClick={e => { e.stopPropagation(); prev() }}
            aria-label="Previous"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '48px' }}>chevron_left</span>
          </button>

          {/* Image */}
          <img
            src={images[active].src}
            alt={images[active].alt}
            className="max-h-[85vh] max-w-[80vw] rounded-2xl object-contain shadow-2xl"
            onClick={e => e.stopPropagation()}
            style={{ userSelect: 'none' }}
          />

          {/* Next */}
          <button
            className="absolute right-3 md:right-6 text-white/60 hover:text-white transition-colors z-10 p-2"
            onClick={e => { e.stopPropagation(); next() }}
            aria-label="Next"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '48px' }}>chevron_right</span>
          </button>

          {/* Counter */}
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/40 font-label text-sm tabular-nums">
            {active + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  )
}
