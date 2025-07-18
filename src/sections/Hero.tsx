'use client'
import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import HeroOrbit from '@/components/HeroOrbit';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-48 lg:py-60 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        {/* Grain Texture */}
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        />

        {/* Concentric Circles */}
        <div className="size-[620px] hero-ring" />
        <div className="size-[820px] hero-ring" />
        <div className="size-[1020px] hero-ring" />
        <div className="size-[1220px] hero-ring" />

        {/* Animated Orbits */}
        <HeroOrbit size={800} rotation={-70} shouldOrbit orbitDuration="42s" shouldSpin spinDuration="6s">
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={560} rotation={20} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="6s">
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={100} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-15} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={90} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={170} shouldOrbit orbitDuration="34s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={145} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
      </div>

      {/* Content Container */}
      <div className="custom-container relative z-10">
        <div className="flex flex-col items-center">
          {/* Avatar Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={memojiImage}
              className="size-24 md:size-32 rounded-full border-2 border-white/10"
              alt="Professional memoji avatar"
              priority
            />
          </motion.div>

          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 bg-gray-950/80 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-3 rounded-full backdrop-blur-sm"
          >
            <div className="relative">
              <div className="bg-green-500 size-2.5 rounded-full" />
              <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
            </div>
            <span className="text-sm font-medium text-white/90">
              Available for new projects
            </span>
          </motion.div>
        </div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-4xl md:text-6xl font-bold text-center tracking-tight"
        >
          Hi, I&apos;m <span className="text-gradient bg-gradient-to-r from-emerald-400 to-sky-500 bg-clip-text text-transparent">Ayush Singh</span>
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 font-serif text-2xl md:text-3xl text-center text-white/90 tracking-wide"
        >
          MERN Stack Developer
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 max-w-2xl mx-auto text-center text-lg text-white/70 leading-relaxed"
        >
          I craft high-performance web applications with modern technologies like Mongo DB, Express.js, React.js and Node.js focusing on clean code and exceptional user experiences.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10"
        >
          <a href="#projects">
            <button className="inline-flex items-center justify-center gap-2 border border-white/20 bg-white/5 hover:bg-white/10 px-6 h-12 rounded-xl transition-all duration-300 group">
              <span className="font-semibold">View My Work</span>
              <ArrowDown className="size-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </a>
          <a href={process.env.NEXT_PUBLIC_LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            <button className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-400 hover:to-sky-400 text-gray-950 px-6 h-12 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-emerald-500/20">
              Let&apos;s Connect
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};