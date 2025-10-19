'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, Volume2, VolumeX, ChevronUp, ChevronDown } from 'lucide-react'

interface Track {
  title: string
  artist: string
  src: string
  cover?: string
}

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)
  const [volume, setVolume] = useState(0.7)
  const audioRef = useRef<HTMLAudioElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const tracks: Track[] = [
    {
      title: "CrackRock Dreams",
      artist: "CrackRock Global",
      src: "/CrackRock Dreams.mp4"
    }
    // Add more tracks here as needed
  ]

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
    // Video is always muted - audio element handles sound
    if (videoRef.current) {
      videoRef.current.muted = true
    }
  }, [volume])

  // Sync video with audio when expanded
  useEffect(() => {
    if (isExpanded && videoRef.current && audioRef.current && isPlaying) {
      const audio = audioRef.current
      const video = videoRef.current
      
      // Sync video time with audio
      video.currentTime = audio.currentTime
      
      if (audio.paused && !video.paused) {
        video.pause()
      } else if (!audio.paused && video.paused) {
        video.play().catch(err => console.log('Video sync error:', err))
      }
    }
  }, [isExpanded, isPlaying])

  const togglePlay = async () => {
    const audio = audioRef.current
    const video = videoRef.current
    
    if (!audio) return

    try {
      if (isPlaying) {
        audio.pause()
        if (video) video.pause()
      } else {
        await audio.play()
        if (video) await video.play()
      }
      setIsPlaying(!isPlaying)
    } catch (error) {
      console.error('Error playing audio:', error)
      // If there's an error, still toggle the state
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
    // Video always stays muted
    if (videoRef.current) {
      videoRef.current.muted = true
    }
  }

  const handleTrackSelect = async (index: number) => {
    const audio = audioRef.current
    const video = videoRef.current
    
    // Pause current playback
    if (audio) audio.pause()
    if (video) video.pause()
    
    setIsPlaying(false)
    setCurrentTrack(index)
    
    // Reset audio/video when track changes
    setTimeout(() => {
      if (audio) audio.currentTime = 0
      if (video) video.currentTime = 0
    }, 100)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
      if (newVolume === 0) {
        setIsMuted(true)
      } else if (isMuted) {
        setIsMuted(false)
      }
    }
    // Video always stays muted
    if (videoRef.current) {
      videoRef.current.muted = true
    }
  }

  return (
    <>
      {/* Hidden audio element for playback */}
      <audio
        ref={audioRef}
        src={tracks[currentTrack].src}
        loop
        preload="auto"
      />

      {/* Floating Player */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-20 right-0 w-80 bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl overflow-hidden border border-yellow-400/20 mb-2"
            >
              {/* Video Display */}
              <div className="relative aspect-square">
                <video
                  ref={videoRef}
                  src={tracks[currentTrack].src}
                  loop
                  muted
                  preload="auto"
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              </div>

              {/* Track Info */}
              <div className="p-4 border-t border-yellow-400/20">
                <h3 className="text-white font-bold text-lg mb-1">
                  {tracks[currentTrack].title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {tracks[currentTrack].artist}
                </p>

                {/* Volume Control */}
                <div className="flex items-center gap-3 mb-4">
                  <button
                    onClick={toggleMute}
                    className="text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    {isMuted || volume === 0 ? (
                      <VolumeX className="w-5 h-5" />
                    ) : (
                      <Volume2 className="w-5 h-5" />
                    )}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="flex-1 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, #fbbf24 0%, #fbbf24 ${volume * 100}%, #374151 ${volume * 100}%, #374151 100%)`
                    }}
                  />
                </div>

                {/* Track List */}
                {tracks.length > 1 && (
                  <div className="space-y-2">
                    <p className="text-gray-400 text-xs font-semibold uppercase mb-2">Tracks</p>
                    {tracks.map((track, index) => (
                      <button
                        key={index}
                        onClick={() => handleTrackSelect(index)}
                        className={`w-full text-left p-2 rounded-lg transition-colors ${
                          currentTrack === index
                            ? 'bg-yellow-400/20 text-yellow-400'
                            : 'text-gray-300 hover:bg-gray-800'
                        }`}
                      >
                        <p className="text-sm font-medium">{track.title}</p>
                        <p className="text-xs text-gray-500">{track.artist}</p>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Control Buttons */}
        <div className="flex flex-col gap-2">
          {isPlaying && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center group"
            >
              {isExpanded ? (
                <ChevronDown className="w-6 h-6 text-black" />
              ) : (
                <ChevronUp className="w-6 h-6 text-black" />
              )}
            </motion.button>
          )}

          {/* Play/Pause Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={togglePlay}
            className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full shadow-2xl hover:shadow-yellow-400/50 transition-all duration-300 flex items-center justify-center group relative overflow-hidden"
          >
            {/* Pulse animation when playing */}
            {isPlaying && (
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-yellow-400 rounded-full"
              />
            )}
            
            {isPlaying ? (
              <Pause className="w-7 h-7 text-black fill-black relative z-10" />
            ) : (
              <Play className="w-7 h-7 text-black fill-black ml-1 relative z-10" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Custom slider styles */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #fbbf24;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #fbbf24;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </>
  )
}

export default AudioPlayer

