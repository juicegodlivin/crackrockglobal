'use client'

import AudioPlayer from './AudioPlayer'

export default function ClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <AudioPlayer />
    </>
  )
}

