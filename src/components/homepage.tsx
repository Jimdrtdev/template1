import React from 'react'
import Image from 'next/image'

export default function Homepage() {
  return (
    <section className="relative h-screen">
      <Image
        src="/home-bg.png"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
      />
    </section>
  )
}

