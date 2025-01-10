'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface ProjectCardProps {
  title: string
  description: string
  gradient: string
  metrics: Record<string, string>
  tech: string[]
  onMouseMove?: (e: React.MouseEvent) => void
}

export function ProjectCard({
  title,
  description,
  gradient,
  metrics,
  tech,
  onMouseMove,
}: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  
  const [hovered, setHovered] = useState(false)
  
  // Mouse position
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring animation for smooth movement
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), {
    damping: 30,
    stiffness: 200,
  })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), {
    damping: 30,
    stiffness: 200,
  })

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    
    // Get mouse position relative to card center
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function onMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
    setHovered(false)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="relative h-full perspective-1000"
    >
      <div 
        className={`
          w-full h-full rounded-xl p-8
          transform transition-all duration-200
          ${hovered ? 'scale-[1.02]' : 'scale-100'}
          ${gradient}
        `}
      >
        <div className="relative h-full flex flex-col justify-between">
          {/* Project title and description */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-white">
              {title}
            </h3>
            <p className="text-gray-200 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {Object.entries(metrics).map(([key, value]) => (
              <div
                key={key}
                className="p-3 bg-black/20 backdrop-blur-sm rounded-lg border border-white/10
                  transform transition-all duration-300 hover:scale-105 group cursor-default"
              >
                <div className="text-sm text-gray-300 group-hover:text-white transition-colors">
                  {key}
                </div>
                <div className="text-xl font-bold text-white group-hover:text-purple-300">
                  {value}
                </div>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {tech.map((item) => (
              <div
                key={item}
                className="px-3 py-1 rounded-full text-sm bg-black/20 text-white
                  backdrop-blur-sm border border-white/10
                  transform transition-all duration-300 hover:scale-110
                  hover:bg-white/20"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

