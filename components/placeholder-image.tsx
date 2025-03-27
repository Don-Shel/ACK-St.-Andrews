import Image from 'next/image'

export default function PlaceholderImage({ className = '', src, alt, ...props }: { className?: string, src: string, alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      {...props}
      className={`object-cover ${className}`}
      onError={(e) => {
        e.currentTarget.src = '/images/placeholder.jpg'
      }}
    />
  )
}