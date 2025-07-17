'use client'
import StarIcon from '@/assets/icons/star.svg'
import JavascriptIcon from '@/assets/icons/square-js.svg'
import HtmlIcon from '@/assets/icons/html5.svg'
import CssIcon from '@/assets/icons/css3.svg'
import Techicon from '@/components/Techicon'
import { Card } from '@/components/Card'
import CardHeader from '@/components/CardHeader'
import ToolboxItems from '@/components/ToolboxItems'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/SectionHeader'

const toolBoxItems = [
  {
    title: 'Javascript',
    iconType: JavascriptIcon,
  },
  {
    title: 'HTML',
    iconType: HtmlIcon,
  },
  {
    title: 'CSS',
    iconType: CssIcon,
  },
  // Add more diverse tools here
  {
    title: 'React',
    iconType: StarIcon, // Replace with actual React icon
  },
  {
    title: 'Node.js',
    iconType: StarIcon, // Replace with actual Node icon
  },
  {
    title: 'TypeScript',
    iconType: StarIcon, // Replace with actual TS icon
  },
]

const hobbies = [
  {
    title: "Gaming",
    emoji: '🎮',
    top: "10%",
    left: "15%",
  },
  {
    title: "Reading",
    emoji: '📚',
    top: "30%",
    left: "60%",
  },
  {
    title: "Hiking",
    emoji: '🥾',
    top: "60%",
    left: "20%",
  },
  {
    title: "Photography",
    emoji: '📷',
    top: "40%",
    left: "40%",
  },
  {
    title: "Cooking",
    emoji: '🍳',
    top: "70%",
    left: "70%",
  },
]

export const AboutSection = () => {
  return (
    <div className="pb-20">
      <div className='container'>
        <SectionHeader 
          eyebrow="About Me" 
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do and what inspires me" 
        />

        <div className='grid grid-cols-5 gap-8 md:grid-cols-5'>
          {/* Left Column */}
          <div className='col-span-5'>
            <Card className='h-full'>
              <CardHeader title = "Summary" description=''/>
            </Card>
          </div>
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

          {/* Right Column */}
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
                    transition={{ 
                      duration: 0.5,
                      delay: index * 0.1
                    }}
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