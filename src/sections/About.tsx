'use client'

import StarIcon from '@/assets/icons/star.svg'
import JavascriptIcon from '@/assets/icons/square-js.svg'
import HtmlIcon from '@/assets/icons/html5.svg'
import CssIcon from '@/assets/icons/css3.svg'
import ReactIcon from '@/assets/icons/react.svg'
// import NodeIcon from '@/assets/icons/nodejs.svg'
// import TypeScriptIcon from '@/assets/icons/typescript.svg'
import TailwindIcon from '@/assets/icons/tailwindcss.svg'
import MongoIcon from '@/assets/icons/mongodb.svg'

import Techicon from '@/components/Techicon'
import { Card } from '@/components/Card'
import CardHeader from '@/components/CardHeader'
import ToolboxItems from '@/components/ToolboxItems'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/SectionHeader'

const toolBoxItems = [
  { title: 'JavaScript', iconType: JavascriptIcon },
  { title: 'HTML', iconType: HtmlIcon },
  { title: 'CSS', iconType: CssIcon },
  { title: 'React', iconType: ReactIcon },
  // { title: 'Node.js', iconType: NodeIcon },
  // { title: 'TypeScript', iconType: TypeScriptIcon },
  // { title: 'Tailwind CSS', iconType: TailwindIcon },
  // { title: 'MongoDB', iconType: MongoIcon },
]

const hobbies = [
  { title: "Gaming", emoji: '🎮', top: "10%", left: "15%" },
  { title: "Reading", emoji: '📚', top: "30%", left: "60%" },
  { title: "Hiking", emoji: '🥾', top: "60%", left: "20%" },
  { title: "Photography", emoji: '📷', top: "40%", left: "40%" },
  { title: "Cooking", emoji: '🍳', top: "20%", left: "70%" },
]

export const AboutSection = () => {
  return (
    <div className="pb-20" id='about'>
      <div className='container'>
        <SectionHeader 
          eyebrow="About Me" 
          title="A Glimpse Into My World"
          description="From writing code to capturing moments, this section highlights what drives me—both professionally and personally." 
        />

        <div className='grid grid-cols-5 gap-8 md:grid-cols-5'>
          {/* Summary Section */}
          <div className='col-span-5'>
            <Card className='h-full'>
              <CardHeader 
                title="Summary"
                description="I'm a passionate full-stack developer who enjoys building intuitive, fast, and scalable web applications. With a love for clean code and great design, I turn complex ideas into simple, elegant digital solutions." 
              />
              <p className="mt-4 text-white/70 text-sm md:text-base px-6 pb-6">
                “Code is not just what I do—it&apos;s how I think, solve, and express ideas in a digital world.”
              </p>
            </Card>
          </div>

          {/* Toolbox Section */}
          <div className='col-span-3 space-y-8 md:col-span-3'>
            <Card className="h-full">
              <CardHeader 
                title="My Toolbox" 
                description='Explore the technologies and tools I use to craft exceptional digital experiences' 
              />
              <div className="mt-6 space-y-4">
                <ToolboxItems 
                  items={toolBoxItems} 
                  itemsWrapperClassName='animate-move-left [animation-duration:30s]' 
                />
                <ToolboxItems 
                  items={[...toolBoxItems].reverse()} 
                  itemsWrapperClassName='animate-move-right [animation-duration:30s]' 
                />
              </div>
            </Card>
          </div>

          {/* Hobbies Section */}
          <div className='col-span-2 space-y-8 md:col-span-2'>
            <Card className="h-full relative overflow-hidden">
              <CardHeader 
                title="Beyond The Code" 
                description='Explore my interests and hobbies beyond the digital realm' 
              />
              <div className='relative flex-1 h-full'>
                {hobbies.map((hobby, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    className='absolute inline-flex items-center gap-2 px-4 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 shadow-md'
                  >
                    <span className='font-medium text-gray-950'>{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
