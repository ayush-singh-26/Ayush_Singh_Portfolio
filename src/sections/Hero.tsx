import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png"
import ArrowDown from '@/assets/icons/arrow-down.svg'
import grainImage from '@/assets/images/grain.jpg'
import Staricon from '@/assets/icons/star.svg'
import HeroOrbit from '@/components/HeroOrbit'
import SparkleIcon from '@/assets/icons/sparkle.svg'

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">

      <div className="absolute inset-0 -z-30 opacity-5" style={{ backgroundImage: `url(${grainImage.src})` }}></div>
      <div className="size-[620px] hero-ring"></div>
      <div className="size-[820px] hero-ring"></div>
      <div className="size-[1020px] hero-ring"></div>
      <div className="size-[1220px] hero-ring"></div>
      
      <HeroOrbit size = {800} rotation={-70} shouldOrbit orbitDuration="42s" shouldSpin spinDuration="6                  s">
        <Staricon className ="size-28 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size = {560} rotation={20} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="6s">
        <Staricon className ="size-12 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size = {590} rotation={100} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
        <Staricon className ="size-8 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size = {430} rotation={-15} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s">
        <SparkleIcon className ="size-8 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size = {440} rotation={90} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="3s">
        <SparkleIcon className ="size-5 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size = {530} rotation={170} shouldOrbit orbitDuration="34s" shouldSpin spinDuration="3s">
        <SparkleIcon className ="size-10 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size = {710} rotation={145} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="3s">
        <SparkleIcon className ="size-14 text-emerald-300/20" />
      </HeroOrbit>
      </div>

      <div className="container">

        <div className="flex flex-col items-center">
          <Image src={memojiImage} className="size-[100px]" alt="" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-gray-500 absolute inset-0 rounded-full animate-ping-large">

              </div>
            </div>
            <div className="text-sm">
              Available for new projects
            </div>
          </div>
        </div>
      </div>
      <h1 className="font-serif text-3xl text-center mt-4 tracking-wide">Building Exceptional User Experiences</h1>
      <p className="mt-4 text-center text-white/60">
        I am proficient in c++
      </p>
      <div className="flex flex-col items-center mt-8">
        <button className="inline-flex items-center gap-3 border border-white/15 px-6 h-12 rounded-xl">
          <span className="font-semibold">Explore My Work</span>
          <ArrowDown clasName="size-3" />
        </button>
        <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl">
          <span>hii</span>
          <span className="font-semibold">Let&apos;s Connect</span>
        </button>
      </div>
    </div>
  )
};
