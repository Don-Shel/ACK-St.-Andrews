"use client"

import { useState, useRef, useEffect } from 'react'
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2, Rewind, Forward } from "lucide-react"
import { formatTime } from "@/lib/utils"

interface SermonPlayerProps {
  audioUrl: string
  title: string
  speaker: string
}

export function SermonPlayer({ audioUrl, title, speaker }: SermonPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100)
    }
  }

  const seek = (value: number) => {
    if (audioRef.current) {
      const time = (value / 100) * audioRef.current.duration
      audioRef.current.currentTime = time
      setProgress(value)
    }
  }

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
      <audio
        ref={audioRef}
        src={audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={() => audioRef.current && setDuration(audioRef.current.duration)}
      />
      
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-white font-medium">{title}</h4>
            <p className="text-gray-400 text-sm">{speaker}</p>
          </div>
          <div className="flex items-center gap-2">
            <Volume2 className="h-5 w-5 text-gray-400" />
            <Slider
              className="w-24"
              value={[volume * 100]}
              max={100}
              step={1}
              onValueChange={(value) => {
                setVolume(value[0] / 100)
                if (audioRef.current) audioRef.current.volume = value[0] / 100
              }}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Slider
            value={[progress]}
            max={100}
            step={0.1}
            onValueChange={(value) => seek(value[0])}
          />
          <div className="flex justify-between text-xs text-gray-400">
            <span>{formatTime(duration * (progress / 100))}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => seek(Math.max(0, progress - 10))}
          >
            <Rewind className="h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="rounded-full w-16 h-16"
            onClick={togglePlay}
          >
            {isPlaying ? (
              <Pause className="h-8 w-8" />
            ) : (
              <Play className="h-8 w-8 ml-1" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => seek(Math.min(100, progress + 10))}
          >
            <Forward className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}