import { div } from 'framer-motion/client'
import React from 'react'

export const SectionHeader = ({eyebrow ,title,description} : {
  eyebrow : string,
  title : string,
  description : string
} ) => {
  return (
    <div className='mb-20'>
      <p className="text-center uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">{eyebrow}</p>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">{title}</h2>
      <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 w-5/6 mx-auto">{description}</p>
    </div>
  )
}

