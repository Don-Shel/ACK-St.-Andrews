interface YouTubeVideoProps {
  videoId: string
  title: string
  className?: string
}

export default function YouTubeVideo({ videoId, title, className = "" }: YouTubeVideoProps) {
  return (
    <div className={`aspect-video ${className}`}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full rounded-lg"
      ></iframe>
    </div>
  )
}

